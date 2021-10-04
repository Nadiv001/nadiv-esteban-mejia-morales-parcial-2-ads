import * as PS from "prompt-sync";
import { ConcreteFactoryApple } from "./AbstractFactory";
import { ConcreteFactoryLenovo } from "./AbstractFactory";
import { ConcreteFactoryXiaomi } from "./AbstractFactory";
import { Facade } from "./Facade";
import { clientCode } from "./Facade";

const prompt: PS.Prompt = PS({ sigint: true });
const facade = new Facade(
  new ConcreteFactoryApple(),
  new ConcreteFactoryLenovo(),
  new ConcreteFactoryXiaomi()
);

const pregunta = async (): Promise<string> => {
  let respuesta: string = prompt(
    "Bienvenido a K-tech, ¿que marca te gustaría utilizar hoy?\n" +
      "1. Apple\n" +
      "2. Lenovo\n" +
      "3. Xiaomi\n"
  );
  return respuesta;
};

const pregunta2 = async (marca: string): Promise<string> => {
  let respuesta: string = prompt(
    `¿Cual producto de ${marca} te gustaría utilizar hoy?\n1. Computador\n2. Celular\n3. Tableta\n`
  );
  return respuesta;
};

async function menu() {
  let opcionMarca = -1;
  let opcionEquipo = -1;
  let marca: string = "";

  await pregunta().then((data) => (opcionMarca = parseInt(data)));
  marca = asignarMarca(opcionMarca);
  await pregunta2(marca).then((data) => (opcionEquipo = parseInt(data)));
  clientCode(facade, opcionMarca, opcionEquipo);
  console.log("¡Vuelve pronto!");
}

function asignarMarca(id: number): string {
  let result: string = "";
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
