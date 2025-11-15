"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _contactPaths = _interopRequireDefault(require("./contactPaths.js"));
var _userPaths = _interopRequireDefault(require("./userPaths.js"));
var _projectPath = _interopRequireDefault(require("./projectPath.js"));
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
var mainRouter = _express["default"].Router();
mainRouter.use('/contact', _contactPaths["default"]);
mainRouter.use('/user', _userPaths["default"]);
mainRouter.use('/project', _projectPath["default"]);
var _default = exports["default"] = mainRouter;