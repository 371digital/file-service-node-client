"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareResponse = void 0;
var prepareResponse = function prepareResponse(response) {
  var _response$data, _response$data2;
  var status = ((_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.code) === 200;
  return {
    status: status,
    error: !status ? response.data.message : "",
    data: (_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.data
  };
};
exports.prepareResponse = prepareResponse;
//# sourceMappingURL=index.js.map