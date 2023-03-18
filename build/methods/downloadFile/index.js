"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _constants = require("../../constants");
var _https = _interopRequireDefault(require("https"));
var _path = _interopRequireDefault(require("path"));
var _fs = _interopRequireDefault(require("fs"));
var _getFileConfiguration = _interopRequireDefault(require("../getFileConfiguration"));
var downloadFile = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(fileId, directoryPath) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return new Promise( /*#__PURE__*/function () {
            var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(resolve, reject) {
              var fileConfiguration, file;
              return _regenerator["default"].wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return (0, _getFileConfiguration["default"])(fileId);
                  case 2:
                    fileConfiguration = _context.sent;
                    if (!fileConfiguration.status) reject(fileConfiguration);
                    file = _fs["default"].createWriteStream(_path["default"].join(directoryPath, fileConfiguration.data.name));
                    _https["default"].get(_constants.endPoints.downloadFile(fileId), function (response) {
                      response.pipe(file);
                      file.on('finish', function () {
                        file.close();
                        resolve(fileConfiguration);
                      });
                    }).on('error', function (error) {
                      reject(error.message);
                    });
                  case 6:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function (_x3, _x4) {
              return _ref2.apply(this, arguments);
            };
          }());
        case 2:
          return _context2.abrupt("return", _context2.sent);
        case 3:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function downloadFile(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var _default = downloadFile;
exports["default"] = _default;
//# sourceMappingURL=index.js.map