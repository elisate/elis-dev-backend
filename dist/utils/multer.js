"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _cloudinary = require("cloudinary");
var _multerStorageCloudinary = require("multer-storage-cloudinary");
var _multer = _interopRequireDefault(require("multer"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Configure Cloudinary storage for different types of files
// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: (req, file) => {
//     let folder;
//     if (file.fieldname === "videos") {
//       folder = "videos";
//     } else if (file.fieldname === "documents") {
//       folder = "documents";
//     } else if (file.fieldname === "images") {
//       folder = "images";
//     }

//     return {
//       folder: folder, // The folder in Cloudinary where files will be uploaded
//       resource_type: "auto", // This tells Cloudinary to automatically detect file type (video, image, etc.)
//       public_id: `${Date.now()}-${file.originalname.split(".")[0]}`, // Custom file name
//     };
//   },
// });

var configureMulter = function configureMulter() {
  var upload = (0, _multer["default"])({
    storage: storage,
    limits: {
      fileSize: 50 * 1024 * 1024 // 50 MB
    },
    fileFilter: function fileFilter(req, file, cb) {
      var allowedFormats = {
        videos: ["video/mp4", "video/mpeg", "video/mp3"],
        documents: ["application/pdf", "application/ppt", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
        images: ["image/jpeg", "image/png", "image/gif"]
      };
      if (allowedFormats[file.fieldname] && allowedFormats[file.fieldname].includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new Error("Invalid file type"), false);
      }
    }
  }).fields([{
    name: "videos",
    maxCount: 5
  }, {
    name: "documents",
    maxCount: 5
  }, {
    name: "images",
    maxCount: 5
  }]);
  return upload;
};
var _default = exports["default"] = configureMulter;