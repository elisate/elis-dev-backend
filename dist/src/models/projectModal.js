"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// import { array } from "i/lib/util";

var projectSchema = new _mongoose["default"].Schema({
  projectTitle: {
    type: String
  },
  videos: {
    type: Array,
    required: false
  },
  documents: {
    type: Array,
    required: false
  },
  images: {
    type: Array
  },
  projectContent: {
    type: String
  },
  projectRep: {
    type: String
  },
  projectLink: {
    type: String
  }
}, {
  timestamps: true
});
var _default = exports["default"] = _mongoose["default"].model("Project", projectSchema);