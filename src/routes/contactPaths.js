
import express from "express";
import {
    getAllContacts,
    updateContact,
    getContactById,
    deleteContact,
    createContact
} from '../controllers/contactController.js';

const contactRouter =express.Router();
contactRouter.get('/getAllContacts', getAllContacts);
contactRouter.get('/getAllContactById', getContactById);
contactRouter.put('/updateContactById', updateContact);
contactRouter.delete('/deleteContact', deleteContact);
contactRouter.post("/createContact",createContact);
export default contactRouter;







