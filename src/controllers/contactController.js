import Contact from "../models/contactModel.js";
import sendEmail from "../../utils/sendemail.js";
import express from "express"

export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve contacts" });
  }
};

// Get a single contact by ID
export const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve contact" });
  }
};

// Update a contact by ID
export const updateContact = async (req, res) => {
  try {
    const { names, email, subject, message } = req.body;
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      { names, email, subject, message },
      { new: true, runValidators: true }
    );
    if (!updatedContact) {
      return res.status(404).json({ error: "Contact not found" });
    }
    res.status(200).json(updatedContact);
  } catch (error) {
    res.status(500).json({ error: "Failed to update contact" });
  }
};

// Delete a contact by ID
export const deleteContact = async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) {
      return res.status(404).json({ error: "Contact not found" });
    }
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete contact" });
  }
};



export const createContact = async (req, res) => {
  try {
    const { names, email, subject, message } = req.body;

    // Create a new contact entry with status set to "pending"
    const newContact = new Contact({
      names,
      email,
      subject,
      message,
      status: "Pending", // Set status to pending
    });
    const savedContact = await newContact.save();

    // Create HTML content for the confirmation email to the user (without their message)
    const htmlContentForUser = `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
        <h2 style="color: #32F6FF">Thank You for Contacting Us!</h2>
        <p>Hi ${names},</p>
        <p>Thank you for reaching out. We have received your message and will get back to you shortly.</p>
        <p>Best Regards,<br>Dtechel Team</p>
      </div>
    `;

    // Send the confirmation email to the user (without including their message)
    const emailSentToUser = await sendEmail(
      email,
      "Contact Received",
      htmlContentForUser
    );
    if (emailSentToUser) {
      console.log("Confirmation email sent to:", email);
    }

    // Create HTML content for the notification email to yourself (including the user's message)
    const htmlContentForAdmin = `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
        <h2 style="color: #32F6FF">New Contact Submission</h2>
        <p>You have received a new contact message.</p>
        <p><strong>Name:</strong> ${names}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br>${message}</p>
        <p>Please log in to the system to review the contact.</p>
      </div>
    `;

    // Send notification email to yourself (admin), including the user's message
    const emailSentToAdmin = await sendEmail(
      "dushimiyimanaelisa@gmail.com",
      "New Contact Received",
      htmlContentForAdmin
    );
    if (emailSentToAdmin) {
      console.log("Notification email sent to admin.");
    }

    res.status(201).json(savedContact);
  } catch (error) {
    console.error("Error creating contact:", error);
    res.status(500).json({ error: "Failed to create contact" });
  }
};



export const replyToContact = async (req, res) => {
  try {
    const { contactId, replySubject, replyMessage } = req.body;

    // Fetch the contact by ID to get the email address
    const contact = await Contact.findById(contactId);
    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }

    // Prepare the email content
    const htmlContent = `
      <p>Dear ${contact.names},</p>
      <p>${replyMessage}</p>
      <p>Best regards,<br>Future Focus Rwanda Team</p>
    `;

    // Send the reply email
    const emailSent = await sendEmail(contact.email, replySubject, htmlContent);
    if (!emailSent) {
      return res.status(500).json({ error: "Failed to send email reply" });
    }

    // Update the contact's status to "replied"
    contact.status = "Replied"; // Set status to replied
    await contact.save();

    res.status(200).json({ message: "Email reply sent successfully" });
  } catch (error) {
    console.error("Error sending email reply:", error);
    res.status(500).json({ error: "Failed to send email reply" });
  }
};
