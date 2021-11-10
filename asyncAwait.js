"use strict";
// exercicio 1
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
exports.__esModule = true;
function dobrarEm5Segundos(x) {
    return new Promise(function (resolve, _) {
        setTimeout(function () {
            return resolve(2 * x);
        }, 5000);
    });
}
function somaAsync(x) {
    return __awaiter(this, void 0, void 0, function () {
        var a, b, c, soma;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dobrarEm5Segundos(10)];
                case 1:
                    a = _a.sent();
                    return [4 /*yield*/, dobrarEm5Segundos(20)];
                case 2:
                    b = _a.sent();
                    return [4 /*yield*/, dobrarEm5Segundos(30)];
                case 3:
                    c = _a.sent();
                    soma = a + b + c + x;
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            return resolve(soma);
                        })];
            }
        });
    });
}
somaAsync(10).then(function (numb) { return console.log(numb); });
// exercicio 2.1
var delay = function () { return new Promise(function (resolve) { return setTimeout(resolve, 1000); }); };
function umPorSegundo() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, delay()];
                case 1:
                    _a.sent();
                    console.log('1s');
                    return [4 /*yield*/, delay()];
                case 2:
                    _a.sent();
                    console.log('2s');
                    return [4 /*yield*/, delay()];
                case 3:
                    _a.sent();
                    console.log('3s');
                    return [2 /*return*/];
            }
        });
    });
}
umPorSegundo();
// exercicio 2.2
var axios_1 = require("axios");
function getUserFromGithub(user) {
    return __awaiter(this, void 0, void 0, function () {
        var userData, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1["default"].get("https://api.github.com/users/" + user)];
                case 1:
                    userData = _a.sent();
                    console.log(userData.data);
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    console.log('Usuário não existe');
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
getUserFromGithub('djunior97');
getUserFromGithub('djunioriqdivqv97');
// exercicio 2.3
var Github = /** @class */ (function () {
    function Github() {
    }
    Github.getRepositories = function (repo) {
        return __awaiter(this, void 0, void 0, function () {
            var rep, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1["default"].get("https://api.github.com/repos/" + repo)];
                    case 1:
                        rep = _a.sent();
                        console.log(rep.data);
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        console.log('Repositório não existe');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return Github;
}());
Github.getRepositories('marcelo-growdev/scrapbook-es6');
Github.getRepositories('marcelo-growdev/qdbqqbqwn');
// exercicio 2.4
var buscaUsuario = function (usuario) { return __awaiter(void 0, void 0, void 0, function () {
    var userData, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, axios_1["default"].get("https://api.github.com/users/" + usuario)];
            case 1:
                userData = _a.sent();
                console.log(userData.data);
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                console.log('Usuário não existe');
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
buscaUsuario('marcelo-growdev');
