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
exports.__esModule = true;
var PS = require("prompt-sync");
var AbstractFactory_1 = require("./AbstractFactory");
var AbstractFactory_2 = require("./AbstractFactory");
var AbstractFactory_3 = require("./AbstractFactory");
var Facade_1 = require("./Facade");
var Facade_2 = require("./Facade");
var prompt = PS({ sigint: true });
var facade = new Facade_1.Facade(new AbstractFactory_1.ConcreteFactoryApple(), new AbstractFactory_2.ConcreteFactoryLenovo(), new AbstractFactory_3.ConcreteFactoryXiaomi());
var pregunta = function () { return __awaiter(void 0, void 0, void 0, function () {
    var respuesta;
    return __generator(this, function (_a) {
        respuesta = prompt("Bienvenido a K-tech, ¿que marca te gustaría utilizar hoy?\n" +
            "1. Apple\n" +
            "2. Lenovo\n" +
            "3. Xiaomi\n");
        return [2 /*return*/, respuesta];
    });
}); };
var pregunta2 = function (marca) { return __awaiter(void 0, void 0, void 0, function () {
    var respuesta;
    return __generator(this, function (_a) {
        respuesta = prompt("\u00BFCual producto de " + marca + " te gustar\u00EDa utilizar hoy?\n1. Computador\n2. Celular\n3. Tableta\n");
        return [2 /*return*/, respuesta];
    });
}); };
function menu() {
    return __awaiter(this, void 0, void 0, function () {
        var opcionMarca, opcionEquipo, marca;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    opcionMarca = -1;
                    opcionEquipo = -1;
                    marca = "";
                    return [4 /*yield*/, pregunta().then(function (data) { return (opcionMarca = parseInt(data)); })];
                case 1:
                    _a.sent();
                    marca = asignarMarca(opcionMarca);
                    return [4 /*yield*/, pregunta2(marca).then(function (data) { return (opcionEquipo = parseInt(data)); })];
                case 2:
                    _a.sent();
                    (0, Facade_2.clientCode)(facade, opcionMarca, opcionEquipo);
                    console.log("¡Vuelve pronto!");
                    return [2 /*return*/];
            }
        });
    });
}
function asignarMarca(id) {
    var result = "";
    switch (id) {
        case 1:
            result = "Apple";
            break;
        case 2:
            result = "Lenovo";
            break;
        case 3:
            result = "Xiaomi";
            break;
        default:
            result = "Has introducido un valor incorrecto";
            break;
    }
    return result;
}
menu();
