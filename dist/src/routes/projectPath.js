"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _projectController = require("../controllers/projectController.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var projectRouter = _express["default"].Router();
projectRouter.post('/createProject', _projectController.createProject);
projectRouter.get("/getProjects", _projectController.getAllProjects);
var _default = exports["default"] = projectRouter;