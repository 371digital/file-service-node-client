"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _constants = require("../../constants");
var _utils = require("../../utils");
var _formData = _interopRequireDefault(require("form-data"));
var _fs = _interopRequireDefault(require("fs"));
var _axios = _interopRequireDefault(require("axios"));
var uploadZip = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(filePath, accessToken) {
    var form;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          form = new _formData["default"]();
          form.append('zip', _fs["default"].createReadStream(filePath));
          _context.next = 4;
          return _axios["default"].post(_constants.endPoints.uploadZip, form, {
            headers: {
              "x-access-token": accessToken
            }
          }).then(_utils.prepareResponse);
        case 4:
          return _context.abrupt("return", _context.sent);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function uploadZip(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var _default = uploadZip;
exports["default"] = _default;
//# sourceMappingURL=index.js.map