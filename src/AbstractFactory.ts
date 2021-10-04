// Absstract Dispositivos
interface AbstractComputador {
  usarTeclado(): string;
}
interface AbstractCelular {
  llamar(): string;
}
interface AbstractTableta {
  leer(): string;
}
// Abstract Factory
interface AbstractFactory {
  createComputador(): AbstractComputador;
  createCelular(): AbstractCelular;
  createTableta(): AbstractTableta;
}

// Apple Factory
export class ConcreteFactoryApple implements AbstractFactory {
  public createComputador(): AbstractComputador {
    return new ConcreteComputadorApple();
  }
  public createCelular(): AbstractCelular {
    return new ConcreteCelularApple();
  }
  public createTableta(): AbstractTableta {
    return new ConcreteTabletaApple();
  }
}

// Lenovo Factory
export class ConcreteFactoryLenovo implements AbstractFactory {
  public createComputador(): AbstractComputador {
    return new ConcreteComputadorLenovo();
  }
  public createCelular(): AbstractCelular {
    return new ConcreteCelularLenovo();
  }
  public createTableta(): AbstractTableta {
    return new ConcreteTabletaLenovo();
  }
}

// Xiaomi Factory
export class ConcreteFactoryXiaomi implements AbstractFactory {
  public createComputador(): AbstractComputador {
    return new ConcreteComputadorXiaomi();
  }
  public createCelular(): AbstractCelular {
    return new ConcreteCelularXiaomi();
  }
  public createTableta(): AbstractTableta {
    return new ConcreteTabletaXiaomi();
  }
}

// Computador
class ConcreteComputadorApple implements AbstractComputador {
  public usarTeclado(): string {
    return "Has usado el teclado de una IMac";
  }
}

class ConcreteComputadorLenovo implements AbstractComputador {
  public usarTeclado(): string {
    return "Has usado el teclado de un Thinkpad";
  }
}

class ConcreteComputadorXiaomi implements AbstractComputador {
  public usarTeclado(): string {
    return "Has usado el teclado de un Redmi G ";
  }
}

// Celular
class ConcreteCelularApple implements AbstractCelular {
  public llamar(): string {
    return "Has llamado a través de un Iphone";
  }
}

class ConcreteCelularLenovo implements AbstractCelular {
  public llamar(): string {
    return "Has llamado a través de un Legion";
  }
}

class ConcreteCelularXiaomi implements AbstractCelular {
  public llamar(): string {
    return "Has llamado a través de un Note 9";
  }
}

// Tableta
class ConcreteTabletaApple implements AbstractTableta {
  public leer(): string {
    return "Has leido a través de un IPad";
  }
}

class ConcreteTabletaLenovo implements AbstractTableta {
  public leer(): string {
    return "Has leido a través de un Yoga";
  }
}

class ConcreteTabletaXiaomi implements AbstractTableta {
  public leer(): string {
    return "Has leido a través de un RedmiPad";
  }
}

// Codigo de CLiente
export function cliente(factory: AbstractFactory, equipo: number) {
  switch (equipo) {
    case 1:
      const computador = factory.createComputador();
      console.log("\n" + computador.usarTeclado() + "\n");
      break;
    case 2:
      const celular = factory.createCelular();
      console.log("\n" + celular.llamar() + "\n");
      break;
    case 3:
      const tableta = factory.createTableta();
      console.log("\n" + tableta.leer() + "\n");
      break;
    default:
      console.log("Ese producto no se encuentra disponible");
      break;
  }
}
