console.log("pepe",  typeof "Pepe");
console.log(22, typeof 22);
console.log(true, typeof true);
console.log(22n), typeof 22n;
console.log(undefined, typeof undefined);
console.log(null, typeof null, "--> MENTIRA, es un BUG del lenguaje original");
console.log(Symbol(), typeof Symbol());
console.log({}, typeof{});
console.log(() => {}, typeof (() => {}));

console.log("<-----Demostracion de que Null no es un objeto----->");

console.log(({}.foo = 22));

console.log("<-----Variables----->");
console.log("<-----Declararlas y asignarlas valor----->");

let foo;//Declaración (Inicialización a Undefined)
foo = 22;//Asignación
console.log({ foo });

let baz = 22; // Inicialización = Declaración y Asignación
console.log({ baz });

const pi = 3.14;
//variables con let-->reasignarse y opcionalmente CAMBIAR DE TIPO

let n = 9_999_875_543_123n;


