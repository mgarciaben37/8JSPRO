# DIA 17/01/2025

## Tipos de Javascript

* string
* number
* boolean
* undefined
* null
* symbol()
* bigint

Mi código UTILIZAAAA estos datos y construye entidades referenciadas que son los OBJETOS, solo estos pueden mutar. Hay un tipo de objeto MUY ESPECIAL que es la FUNCIÓN.

## Variables

IMPORTANTE USAR Y PONER 'USE STRICT' en el documento de JS o TS que vayamos a usar.

IMPORTANTE. Una variable NO puede APUNTAR a otra variable.

Las variables son identificadores asignados a valores. Identificador se pintan cuadrados y los valores redondos.

**nullish --> undefined o null** 

En javascript se escribe un string con comillas simples.
Para poner comillas dentro de comillas ponemos  Ej: \' texto \'.
Salto de linea se escribe con \n (antes) ahora se escribe con los Template string Ej: 
```tjs
const title = `El tesoro de
${user}`
```

## Numbers

* Dentro de la escritura de los números, la barra baja ( _ )es ignorada. Ej:  
```js
n = 1_200_300
```

* MAX_VALUE --> Valor mas grande
* MIN_VALUE --> Valor mas pequeño

* MAX_SAFE_INTEGER -->
* MIN_SAFE_INTEGER -->

* Bigint Ej: 
```js
let n = 9_999_875_543_123n;
```

* Numeros "raritos"
Ej:
```js
const rare = 0/0
```

# DIA 20/01/2025

MUTACIÓN: Cuando a la constante le ponemos un atributo Ej. obj.name

Objetc = {New Objet} // Con corchetes es un nuevo objeto
objetc = objetc2 // Mismo objeto

Objetos anidados. REPASAR

**FUNCIONES CONSTRUCTORAS** (LO VEREMOS): Cuando nos encontramos uno objeto new + Letra mayúsculas

Ej:
```js
const obj1 = new Object();
```

SE USA PASCAL CASE (primera con mayúscula)

Objeto de tipo fecha: new Date

**WRAPPER OBJECT DE LOS PRIMITIVOS**

Ej:
```js;
foo.ToLowerCase();
```
Esto no se podría hacer, pero la coercion lo permite, con lo que la variable hacemos que se convierta a minúsculas.

## Expresiones y Sentencias

**Operadores** --> Valores

```js
22/11
```
IMPORTANT!! Las expresiones se construyen con operadores

* Primario--> una 1 operando
  ```js
  console.log(!true);
  ```
* Binario--> usa 2
  ```js
  console.log(2 + 2);
  ```
* Ternario--> usa 3
  ```js
  console.log(true ? 'True' : 'False');
  ```

**Sentencias** --> Ordenes

```js
const r = 33/7;
console.log(r.tofixed(2));
```


**Operador throw**
Técnicamente, podemos usar cualquier cosa como un objeto error. Eso puede ser incluso un primitivo, como un número o una cadena, pero es mejor usar objetos, preferiblemente con propiedades name y message (para mantenerse algo compatible con los errores incorporados).

Para lanzar un error, para evitar que nuestro código falle.

```js
Ej: throw new Error ('mensaje de Error');
```

**Try error**
La declaración try... catch señala un bloque de instrucciones a intentar ( try ), y especifica una respuesta si se produce una excepción ( catch )

```js
try{
    const r = divide(3, 0);
    console.log(r*3);
} catch (error){
    console.error(error);
}

console.log('Fin del programa');
```

**Objects**
```js
const user = {
    name:'pepe',
    age: 22,
    job: 'developer'
}

console.log(Object.keys(user));//Clave --> Devuelve [ 'name', 'age', 'job' ]
console.log(Object.values(user)); // Valor --> Devuelve [ 'pepe', 22, 'developer' ]
```

```js
console.log(typeof []); // devuelve Object NO array
console.log(typeof new Error ()); // devuelve Object
console.log(typeof new Date()); // devuelve Object
```

**Arrays**  