"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIPAddresses = void 0;
var os = __importStar(require("os"));
var lodash_1 = require("lodash");
var networkInterfaces = os.networkInterfaces();
function getIPAddresses() {
    var ip = [];
    for (var devName in networkInterfaces) {
        var iface = networkInterfaces[devName];
        if (iface === undefined)
            return ["0.0.0.0"];
        var ipaddress = lodash_1.compact(iface.map(function (alias) {
            if (alias.family === "IPv4" && alias.address !== "127.0.0.1" && !alias.internal) {
                return alias.address;
            }
            return null;
        }));
        if (lodash_1.isEmpty(ipaddress))
            continue;
        ip.push(ipaddress[0]);
    }
    if (lodash_1.isEmpty(ip))
        return ["0.0.0.0"];
    return ip;
}
exports.getIPAddresses = getIPAddresses;
//# sourceMappingURL=getIPAddresses.js.map