"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _userController = require("../controllers/userController.js");
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
var userRouter = _express["default"].Router();
userRouter.post('/register', _userController.register);
userRouter.post("/login", _userController.login);
var _default = exports["default"] = userRouter;