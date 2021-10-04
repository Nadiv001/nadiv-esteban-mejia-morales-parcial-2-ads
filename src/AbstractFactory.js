"use strict";
exports.__esModule = true;
exports.cliente = exports.ConcreteFactoryXiaomi = exports.ConcreteFactoryLenovo = exports.ConcreteFactoryApple = void 0;
// Apple Factory
var ConcreteFactoryApple = /** @class */ (function () {
    function ConcreteFactoryApple() {
    }
    ConcreteFactoryApple.prototype.createComputador = function () {
        return new ConcreteComputadorApple();
    };
    ConcreteFactoryApple.prototype.createCelular = function () {
        return new ConcreteCelularApple();
    };
    ConcreteFactoryApple.prototype.createTableta = function () {
        return new ConcreteTabletaApple();
    };
    return ConcreteFactoryApple;
}());
exports.ConcreteFactoryApple = ConcreteFactoryApple;
// Lenovo Factory
var ConcreteFactoryLenovo = /** @class */ (function () {
    function ConcreteFactoryLenovo() {
    }
    ConcreteFactoryLenovo.prototype.createComputador = function () {
        return new ConcreteComputadorLenovo();
    };
    ConcreteFactoryLenovo.prototype.createCelular = function () {
        return new ConcreteCelularLenovo();
    };
    ConcreteFactoryLenovo.prototype.createTableta = function () {
        return new ConcreteTabletaLenovo();
    };
    return ConcreteFactoryLenovo;
}());
exports.ConcreteFactoryLenovo = ConcreteFactoryLenovo;
// Xiaomi Factory
var ConcreteFactoryXiaomi = /** @class */ (function () {
    function ConcreteFactoryXiaomi() {
    }
    ConcreteFactoryXiaomi.prototype.createComputador = function () {
        return new ConcreteComputadorXiaomi();
    };
    ConcreteFactoryXiaomi.prototype.createCelular = function () {
        return new ConcreteCelularXiaomi();
    };
    ConcreteFactoryXiaomi.prototype.createTableta = function () {
        return new ConcreteTabletaXiaomi();
    };
    return ConcreteFactoryXiaomi;
}());
exports.ConcreteFactoryXiaomi = ConcreteFactoryXiaomi;
// Computador
var ConcreteComputadorApple = /** @class */ (function () {
    function ConcreteComputadorApple() {
    }
    ConcreteComputadorApple.prototype.usarTeclado = function () {
        return "Has usado el teclado de una IMac";
    };
    return ConcreteComputadorApple;
}());
var ConcreteComputadorLenovo = /** @class */ (function () {
    function ConcreteComputadorLenovo() {
    }
    ConcreteComputadorLenovo.prototype.usarTeclado = function () {
        return "Has usado el teclado de un Thinkpad";
    };
    return ConcreteComputadorLenovo;
}());
var ConcreteComputadorXiaomi = /** @class */ (function () {
    function ConcreteComputadorXiaomi() {
    }
    ConcreteComputadorXiaomi.prototype.usarTeclado = function () {
        return "Has usado el teclado de un Redmi G ";
    };
    return ConcreteComputadorXiaomi;
}());
// Celular
var ConcreteCelularApple = /** @class */ (function () {
    function ConcreteCelularApple() {
    }
    ConcreteCelularApple.prototype.llamar = function () {
        return "Has llamado a través de un Iphone";
    };
    return ConcreteCelularApple;
}());
var ConcreteCelularLenovo = /** @class */ (function () {
    function ConcreteCelularLenovo() {
    }
    ConcreteCelularLenovo.prototype.llamar = function () {
        return "Has llamado a través de un Legion";
    };
    return ConcreteCelularLenovo;
}());
var ConcreteCelularXiaomi = /** @class */ (function () {
    function ConcreteCelularXiaomi() {
    }
    ConcreteCelularXiaomi.prototype.llamar = function () {
        return "Has llamado a través de un Note 9";
    };
    return ConcreteCelularXiaomi;
}());
// Tableta
var ConcreteTabletaApple = /** @class */ (function () {
    function ConcreteTabletaApple() {
    }
    ConcreteTabletaApple.prototype.leer = function () {
        return "Has leido a través de un IPad";
    };
    return ConcreteTabletaApple;
}());
var ConcreteTabletaLenovo = /** @class */ (function () {
    function ConcreteTabletaLenovo() {
    }
    ConcreteTabletaLenovo.prototype.leer = function () {
        return "Has leido a través de un Yoga";
    };
    return ConcreteTabletaLenovo;
}());
var ConcreteTabletaXiaomi = /** @class */ (function () {
    function ConcreteTabletaXiaomi() {
    }
    ConcreteTabletaXiaomi.prototype.leer = function () {
        return "Has leido a través de un RedmiPad";
    };
    return ConcreteTabletaXiaomi;
}());
// Codigo de CLiente
function cliente(factory, equipo) {
    switch (equipo) {
        case 1:
            var computador = factory.createComputador();
            console.log("\n" + computador.usarTeclado() + "\n");
            break;
        case 2:
            var celular = factory.createCelular();
            console.log("\n" + celular.llamar() + "\n");
            break;
        case 3:
            var tableta = factory.createTableta();
            console.log("\n" + tableta.leer() + "\n");
            break;
        default:
            console.log("Ese producto no se encuentra disponible");
            break;
    }
}
exports.cliente = cliente;
