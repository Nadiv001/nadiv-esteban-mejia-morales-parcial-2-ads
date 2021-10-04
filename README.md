# **_Preguntas_**

## **Explicación general del programa**

Esta aplicación se ideó para un establecimiendo de tecnología, el cual le permite al cliente probar distintos dispositivos de varias marcas, el usuario solo tiene que seleccionar que marca y dispositivo desea y el programa otogará el dispositivo correcto.
Aplicación orientada a la creación de automóviles, la cual facilite la creación y modificación/adición de los mismos, mediante la implementación de patrones de diseño como _Builder_(Creacional) y _Decorator_(Estructural).

### **Necesidad a resolver**

Se busca facilitarle a los clientes la interacción con el establecimiento, liberando a sus trabajadores de atender a clientes que solo desean usar un dispositivo en particular. Por otro lado, se busca un sistema sencillo, el cual emplee poco código, y muestre solo lo necesario al cliente por medio del patrón _Fachada_ (Estructural), cuando en el tranfondo se encuentra la complejidad de un patrón _Abstract Factory_ (Crecional) para la identificación de dispositivos.

### **Detalles técnicos**

Para el desarrollo de la aplicación, se uso el lenguaje _TypeScript_, ya que este, al poseer un tipado fuerte, nos permite ser claros en las variables usadas y recibidas, otorgando un desarrollo claro del proyecto. Por otro lado, era un lenguaje compatible con el "IDE" utilizado, con esto nos referimos a _Visual Studio Code_, un editor de texto ligero para las especificaciones del equipo disponible, que posee un entorne de desarrollo agradable y con diseño moderno, el cual, con la ayuda de extenciones de facil instalación, nos permite utilizar snippets, para agilizar la escritura de código, y también ejecutar codigo de _TypeScript_.

## **Instrucciones de uso**

### **Ejecución de forma local**

Usar _**Visual Studio Code**_ para ejecutar el programa.
Usar el comando "Ctrl + ñ" para abrir la terminal.

#### **Paso 1**

Instalar las dependencias e instalaciones necesarias:

- Descargar _NodeJs_ mediante el siguiente link:
  - [NodeJs.com](https://nodejs.org/en/)
- Usar la versión LTS (Long Term Support), ejecutando el instalador y siguiendo los pasos tradicionales.

- Para verificar la instalación correcta de _NodeJs_ ejecutamos el siguiente comando en la terminal:
  - node --version

#### **Paso 2**

- Descargar _TypeScript_, a través del siguiente comando en la terminal:
  - npm install -g typescript
- Para verificar la instalción correcta de _TypeScript_ ejecutamos el siguiente comando en la terminal:
  - tsc --version

#### **Paso 3**

- Descargar _NodeJs_, ejecutando uno a uno los siguientes comandos en la terminal:

  - npm install -g ts-node
  - npm install -g tslib @types/node

- Para verificar la instalción correcta de _NodeJs_ ejecutamos el siguiente comando en la terminal:
  - node --version

#### **Paso 4**

- Para ejecurtar el _**Programa**_ escribimos el siguiente comando en la terminal:
  - node ./src/main.js

### **Argumentos del usuario**

Al usuario se le realizarán 2 preguntas consecutivas:

- La primera indicando con cúal marca de dispositivo desea interactuar, se tendrán 3 opciones: 1.Apple, 2.Lenovo y 3.Xiaomi, para seleccionar una, debe escribir en la consola el número que corresponde a dicha marca, por ejemplo, si se desea seleccionar '_Lenovo_', se escribe en la consola el número '_2_' y se presiona _Enter_.
- La segunda pregunta es con respecto al tipo de dispositivo que desea, 1.Computador, 2.Celular y 3.Tableta, al igual que la pregunta anterior, se escribe el número correspondiente y se presiona _Enter_.

Posterior al recibimiento de ambas respuestas, el usuario habrá "interactuado" con el dispositivo y marca seleccionado, recibiendo un mensaje como el siguiente:

- "Has llamado a través de un IPhone"

Finalmente, el programa se despedirá con un mensaje de "¡Vuelve pronto!".

_**Notas:**_ <br>

- _La aplicación no cuenta con validaciones, por lo cual, ingresar un valor distinto a los solicitados ocacionará un error._
- _**Bug:** Cada vez que el usuario ingrese una entrada sin darle envíar (Enter), la pregunta actual se repetirá, esto no afecta la ejecución del programa, pero es un aspecto a tener en cuenta._

<br>

# **_Patrón de diseño creacional ~ Abstract Factory_**

## Justificación de selección

En la aplicación se necesitaba una matríz de productos, donde un eje representaba la marca y el otro el dispositivo, esto se debe a que existían varias marcas con el mismo tipo de producto, que realizaban la misma tarea, pero en sí eran distintas. A partir de este problema se identificó la necesidad de crear dintintas familias de los mismos objetos y por ello se definió utilizar _Abstract Factory_.

## Uso del patrón

El patrón se observa en el documento 'AbstractFactory.ts', el cual esta segmentado de la siguiente forma:

- Líneas 2-10: Interfaces de los dispositivos.
- Líneas 12-16: Creación de la _Fábrica Abstracta_.
- Líneas 18-55: Creación de las _Fábricas concretas_.
- Líneas 57-74: Computadores _concretos_
- Líneas 76-93: Celulares _concretos_
- Líneas 95-112: Tabletas _concretas_
- Líneas 114-113: Código del cliente

# **_Patrón de diseño estructural ~ Facade/Fachada_**

## Justificación de selección

Al usar el patrón anterior se evidencian numerosas interfaces, clases y fábricas abstractas y concretas las cuales pueden ser confusas para el cliente sin necesidad, ya que para nuestro cliente final es irrelevante el trasfondo del proceso. Con el fin de ocultar la complejidad del código se buscó implementar el patrón _Fachada_, con la cual poder ofrecer una interfaz simple con la cual interactuar, ocultando las clases complejas que se empléan.

## Uso del patrón

El patrón se observa en el documento 'Facade.ts', el cual esta segmentado de la siguiente forma:

- Líneas 1-4 Importes de la AbstractFactory
- Líneas 6-37 Clase Facade
  - Líneas 7-9 creacíon de varibales de fábricas concretas
  - Líneas 11-19 Constructor que cree las fábricas concretas
  - Líneas 21-36 Metodo de contacto con la Fábrica concreta para creación de un dispositivo
- Líneas 39-41 Función con Fachada para ser usada con el cliente

En el archivo '_main.ts_'

- Líneas 9-13: Creación de una Fachada para ser usada por el cliente.
