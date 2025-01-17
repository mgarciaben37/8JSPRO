# Tipos de Javascript

* string
* number
* boolean
* undefined
* null
* symbol()
* bigint

Mi código UTILIZAAAA estos datos y construye entidades referenciadas que son los OBJETOS, solo estos pueden mutar. Hay un tipo de objeto MUY ESPECIAL que es la FUNCIÓN.

# Variables

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

# Numbers

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
