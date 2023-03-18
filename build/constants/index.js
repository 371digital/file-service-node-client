"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serviceUrl = exports.endPoints = void 0;
var serviceUrl = "https://file-service.371digital.com";
exports.serviceUrl = serviceUrl;
var endPoints = {
  "downloadFile": function downloadFile(fileId) {
    return "".concat(serviceUrl, "/download/").concat(fileId);
  },
  "uploadZip": "".concat(serviceUrl, "/uploadZip"),
  "getFileConfiguration": function getFileConfiguration(fileId) {
    return "".concat(serviceUrl, "/getFileConfiguration?id=").concat(fileId);
  }
};
exports.endPoints = endPoints;
//# sourceMappingURL=index.js.map