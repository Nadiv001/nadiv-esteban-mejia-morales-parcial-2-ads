import { ConcreteFactoryApple } from "./AbstractFactory";
import { ConcreteFactoryLenovo } from "./AbstractFactory";
import { ConcreteFactoryXiaomi } from "./AbstractFactory";
import { cliente } from "./AbstractFactory";

export class Facade {
  protected apple!: ConcreteFactoryApple;
  protected lenovo!: ConcreteFactoryLenovo;
  protected xiaomi!: ConcreteFactoryXiaomi;

  constructor(
    Apple: ConcreteFactoryApple,
    Lenovo: ConcreteFactoryLenovo,
    Xiaomi: ConcreteFactoryXiaomi
  ) {
    this.apple = Apple || new ConcreteFactoryApple();
    this.lenovo = Lenovo || new ConcreteFactoryLenovo();
    this.xiaomi = Xiaomi || new ConcreteFactoryXiaomi();
  }

  public operation(marca: number, equipo: number): void {
    switch (marca) {
      case 1:
        cliente(this.apple, equipo);
        break;
      case 2:
        cliente(this.lenovo, equipo);
        break;
      case 3:
        cliente(this.xiaomi, equipo);
        break;
      default:
        console.log("Marca incorrecta");
        break;
    }
  }
}

export function clientCode(facade: Facade, marca: number, equipo: number) {
  console.log(facade.operation(marca, equipo));
}
