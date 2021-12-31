"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var networkInterfaces_1 = require("./networkInterfaces");
exports.default = jest.mock("os", function () { return ({
    networkInterfaces: jest.fn(function () { return networkInterfaces_1.mockNetworkInterfaces; }),
}); });
//# sourceMappingURL=mockedOS.js.map