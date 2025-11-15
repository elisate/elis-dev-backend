"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _contactController = require("../controllers/contactController.js");
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
var contactRouter = _express["default"].Router();
contactRouter.get('/getAllContacts', _contactController.getAllContacts);
contactRouter.get('/getAllContactById', _contactController.getContactById);
contactRouter.put('/updateContactById', _contactController.updateContact);
contactRouter["delete"]('/deleteContact', _contactController.deleteContact);
contactRouter.post("/createContact", _contactController.createContact);
var _default = exports["default"] = contactRouter;