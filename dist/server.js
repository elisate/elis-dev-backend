"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _express = _interopRequireWildcard(require("express"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _cors = _interopRequireDefault(require("cors"));
var _indexRouter = _interopRequireDefault(require("./src/routes/indexRouter.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
// import Docrouter from "./src/Docs/Swagger.js";

_dotenv["default"].config();

// environment variables
var port = process.env.PORT || 3000;
var dbUser = process.env.DB_USER;
var dbPass = process.env.DB_PASS;
var dbName = process.env.DB_NAME;

// Define CORS options
var corsOptions = {
  origin: "*",
  // Accept requests from any origin
  optionsSuccessStatus: 200,
  credentials: true // Allow cookies & authentication headers
};
var app = (0, _express["default"])();
// Use CORS middleware with options
app.use((0, _cors["default"])(corsOptions));

// Database connection
var dbUri = "mongodb+srv://".concat(dbUser, ":").concat(dbPass, "@cluster0.hex2mmr.mongodb.net/").concat(dbName, "?retryWrites=true&w=majority");
_mongoose["default"].set("strictQuery", false);
_mongoose["default"].connect(dbUri).then(function () {
  console.log("Connected to MongoDB");
  app.listen(port, function () {
    console.log("Node API is running on port http://localhost:".concat(port));
  });
})["catch"](function (error) {
  console.log(error);
});

// Routes / Endpoints
app.use(_bodyParser["default"].json());
app.use("/", _indexRouter["default"]);
// app.use("/api-docs", Docrouter);