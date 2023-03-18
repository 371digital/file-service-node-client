"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _downloadFile = _interopRequireDefault(require("./methods/downloadFile"));
var _getFileConfiguration = _interopRequireDefault(require("./methods/getFileConfiguration"));
var _uploadZip = _interopRequireDefault(require("./methods/uploadZip"));
var _default = {
  downloadFile: _downloadFile["default"],
  getFileConfiguration: _getFileConfiguration["default"],
  uploadZip: _uploadZip["default"]
};
exports["default"] = _default;
//# sourceMappingURL=index.js.map