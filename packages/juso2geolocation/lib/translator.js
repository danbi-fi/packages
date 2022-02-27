"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransGeolocation = void 0;
var axios_1 = __importDefault(require("axios"));
var lodash_1 = require("lodash");
/**
 * Juso API to Geolocation data
 * @constructor
 * @this {TransGeolocation}
 * @param {string} apiKey Juso Coord. API key
 * @method `translate()` translation geolocation
 * @version 0.0.1
 */
exports.TransGeolocation = function (apiKey) {
    if (!(this instanceof exports.TransGeolocation)) {
        return new exports.TransGeolocation(apiKey);
    }
    Object.defineProperty(this, "success", {
        get: function () {
            return this.value || false;
        },
        set: function (val) {
            this.value = val;
        },
    });
    this.translate = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var admCd, rnMgtSn, udrtYn, buldMnnm, buldSlno, data, jsonRes, results, juso, _a, entX, entY, transData, x, y, z, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        admCd = params.admCd, rnMgtSn = params.rnMgtSn, udrtYn = params.udrtYn, buldMnnm = params.buldMnnm, buldSlno = params.buldSlno;
                        return [4 /*yield*/, axios_1.default.post("https://www.juso.go.kr/addrlink/addrCoordApiJsonp.do", null, {
                                params: {
                                    confmKey: apiKey,
                                    admCd: admCd,
                                    rnMgtSn: rnMgtSn,
                                    udrtYn: udrtYn,
                                    buldMnnm: buldMnnm,
                                    buldSlno: buldSlno,
                                    resultType: "json",
                                },
                            })];
                    case 1:
                        data = (_b.sent()).data;
                        jsonRes = eval(data);
                        if ((0, lodash_1.isEmpty)(jsonRes) || (0, lodash_1.isNull)(jsonRes) || (0, lodash_1.isUndefined)(jsonRes)) {
                            this.success = false;
                            return [2 /*return*/, null];
                        }
                        results = jsonRes.results;
                        if ((0, lodash_1.isEmpty)(results) || (0, lodash_1.isNull)(results) || (0, lodash_1.isUndefined)(results)) {
                            this.success = false;
                            return [2 /*return*/, null];
                        }
                        juso = results.juso;
                        if ((0, lodash_1.isEmpty)(juso) || (0, lodash_1.isNull)(juso) || (0, lodash_1.isUndefined)(juso)) {
                            this.success = false;
                            return [2 /*return*/, null];
                        }
                        _a = juso[0], entX = _a.entX, entY = _a.entY;
                        return [4 /*yield*/, axios_1.default.get("https://epsg.io/trans", {
                                params: {
                                    s_srs: 5179,
                                    t_srs: 4326,
                                    x: parseFloat(entX),
                                    y: parseFloat(entY),
                                },
                            })];
                    case 2:
                        transData = (_b.sent()).data;
                        if ((0, lodash_1.isEmpty)(transData) || (0, lodash_1.isNull)(transData) || (0, lodash_1.isUndefined)(transData)) {
                            this.success = false;
                            return [2 /*return*/, null];
                        }
                        x = transData.x, y = transData.y, z = transData.z;
                        if ((0, lodash_1.isNull)(x) || (0, lodash_1.isUndefined)(x) || (0, lodash_1.isNull)(y) || (0, lodash_1.isUndefined)(y) || (0, lodash_1.isNull)(z) || (0, lodash_1.isUndefined)(z)) {
                            this.success = false;
                            return [2 /*return*/, null];
                        }
                        this.success = true;
                        return [2 /*return*/, {
                                latitude: parseFloat(y),
                                longitude: parseFloat(x),
                                altitude: parseFloat(z),
                                x: parseFloat(entX),
                                y: parseFloat(entY),
                            }];
                    case 3:
                        e_1 = _b.sent();
                        // console.log(e);
                        return [2 /*return*/, null];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
};
//# sourceMappingURL=translator.js.map