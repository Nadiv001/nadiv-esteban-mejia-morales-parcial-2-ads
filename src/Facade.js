"use strict";
exports.__esModule = true;
exports.clientCode = exports.Facade = void 0;
var AbstractFactory_1 = require("./AbstractFactory");
var AbstractFactory_2 = require("./AbstractFactory");
var AbstractFactory_3 = require("./AbstractFactory");
var AbstractFactory_4 = require("./AbstractFactory");
var Facade = /** @class */ (function () {
    function Facade(Apple, Lenovo, Xiaomi) {
        this.apple = Apple || new AbstractFactory_1.ConcreteFactoryApple();
        this.lenovo = Lenovo || new AbstractFactory_2.ConcreteFactoryLenovo();
        this.xiaomi = Xiaomi || new AbstractFactory_3.ConcreteFactoryXiaomi();
    }
    Facade.prototype.operation = function (marca, equipo) {
        switch (marca) {
            case 1:
                (0, AbstractFactory_4.cliente)(this.apple, equipo);
                break;
            case 2:
                (0, AbstractFactory_4.cliente)(this.lenovo, equipo);
                break;
            case 3:
                (0, AbstractFactory_4.cliente)(this.xiaomi, equipo);
                break;
            default:
                console.log("Marca incorrecta");
                break;
        }
    };
    return Facade;
}());
exports.Facade = Facade;
function clientCode(facade, marca, equipo) {
    console.log(facade.operation(marca, equipo));
}
exports.clientCode = clientCode;
