"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateAccessToken = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
_dotenv["default"].config();
var generateAccessToken = exports.generateAccessToken = function generateAccessToken(user) {
  return _jsonwebtoken["default"].sign({
    _id: user._id,
    email: user.email
  }, process.env.JWT_SECRET, {
    expiresIn: "7h"
  });
};