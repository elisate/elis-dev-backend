"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Admin = void 0;
var Admin = exports.Admin = function Admin(req, res, next) {
  if (req.user.role !== "Admin") {
    return res.status(403).json({
      message: "Access denied contact Admin please!"
    });
  }
  next();
};