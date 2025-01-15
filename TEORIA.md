# JAVASCRIPT BACK

https://2024.stateofjs.com/en-US/libraries/build_tools/

- Build--> En resumen, un build es un proceso clave en el desarrollo de software que permite a los desarrolladores crear una versión ejecutable de tu software. Este proceso es esencial para garantizar la calidad y la funcionalidad del software antes de su lanzamiento.

- Vite--> Freamwork. Pagina Web: https://vite.dev/. Carpeta This que solo va a tener HTML puro compactado, CSS y Javascript. Se llama compilación. A la hora de elegir un freamwork, miraremos "LA VELOCIDAD". Vite es una herramienta de creación de frontend increíblemente rápida que impulsa la próxima generación de aplicaciones web.  pronunciado como /vit/.


- Para  empezar a trabajar con Vite:
  
 1. npm create vite@latest
 2. y? --> enter para Si
 3. nombre del proyecto. -->Ej. demo-pro
 4. Que quieres usar? -->Vanilla
 5. TypeScript o  JavaScript? -->TypeScript
 6. entras en el proyecto
 7. npm i

nos creara una carpeta con archivos:

En src etsaran los archivos.
En la carpeta Public, se ponen como transparentres, Lo que este en Public estara en la raiz.
.gitignore--> me crea un repositorio, si ya tenemos un repo en esa carpeta borramos ese .gitignore
package.json
package-lock.json--> lo crea a raiz de ejecutar npm i. Si tenemos un lio por lo que sea borramos node_modules y package-lock.json y volvemos a instlar con npm i
tsconfig.json--> configuraciones por defecto de javascript


dev-->
build-->
preview-->

En public y en src...se borraria todos los archivos salvo vite-env.d.ts (SI ES UN PROYECTO DE 0)

1. npm run dev--> nos da la URL.
2. cerramos con Ctrl + C
3. npm run build--> nos muestra una carpeta dist con las cosas que hay "como en produccion" nos enseña las cosas que hay.
4. npm run preview--> para ver la web y ver que esta perfectamente en local
5. si queremos ver dev a la vez ponemos la ruta de la carpeta y luego ejecutamos de nuevo npm run dev

* AYUDAS * npm run dev. Con tecla h y enter nos da comandos de trabajo

* Una Caracteristica de Vite * El fichero index.html va en la raiz


# TYPESCRIPT
TYPESCRIPT--> javascript con estilos. Web: https://www.typescriptlang.org/

Para probar typeScript en navegador. https://www.typescriptlang.org/play ()

* No vamos a usar links directos a las hojas de estilos, porque tiene capacidad para integrar una hoja de estilo desde la hoja main.ts(typescript). Es decir, que si lo hacemos por componentes, cada componente de TS tendrá importado su archivo de CSS correspondiente. IMPORTANTE, el CSS que tengamos es generico a TODA LA PAGINA, es decir que si cambiamos el p de todo lo ponemos a nivel general y si lo hacemos dentro de algo lo haremos con anidamiento:
  
```ts
section{
    h2{

    }
}
```

* Nos acostumbramos a usar inspeccionar/ Network

# COMO ESCRIBIR CON JAVASCRIPT / TYPESCRIPT

creamos .editorconfig

Importante unificar este fichero con TODO EL EQUIPO QUE TRABAJEMOS.

```js
# EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file
root = true

[*]
indent_style = space
indent_size = 4
end_of_line = crlf
charset = utf-8
trim_trailing_whitespace = false
insert_final_newline = true
```

# LINTER EXTENSIÓN
Linter es una herramienta que de forma estatica nos da pistas de malas practicas, ejemplo: poner let en vez de const. Para eso hay que ponerle reglas.

WEB LINTER--> https://eslint.org/

npm init @eslint/config@latest


INSTALAR ESLint
1. primeros necesitamos la extension
2. npm init @eslint/config@latest
3. (y)? SI
4.  How would you like to use ESLint? ... 
  To check syntax only
> To check syntax and find problems -->ESTE
5. 
√ How would you like to use ESLint? · problems
? What type of modules does your project use? ... 
> JavaScript modules (import/export)
  CommonJS (require/exports)
  None of these--> ESTE

ME QUEDO A MITAD DE CAMINO DE COPIAR, los de abajo son los parámetros necesarios para la instalación:

√ How would you like to use ESLint? · problems
√ What type of modules does your project use? · esm
√ Which framework does your project use? · none
√ Does your project use TypeScript? · typescript
√ Where does your code run? · browser, node
The config that you've selected requires the following dependencies:

eslint, globals, @eslint/js, typescript-eslint
√ Would you like to install them now? · No / Yes
√ Which package manager do you want to use? · npm

se nos crea un archivo eslint.config.js, con los parámetros.

Si queremos configurar algo del linter en el archivo eslint.config.js, podemos ponerlo:

Ejemplo:

En este codigo de abajo que hemos añadido a linter nos pone un warning pero nos "deja de tocar las narices". podemos dejarlo Off /Warn /Error

```ts
 {
    rules: {
        'prefer-const': 'warn',
    },
  },
```  

# TYPESCRIPT

typescript compila. Si hay un error de código no lo compiles.


# TESTING 

Test automaticos que funcionan.

## Testing Unitario

https://mochajs.org/

https://jasmine.github.io/

https://jestjs.io/

https://vitest.dev/--> INSTALAMOS ESTE

### INSTALAMOS VITEST

1. npm install -D vitest
2. Para ejecutar nuestros text: npm run test

Queremos ejecutar el fichero tsc del package.json --> npm run tsc -- services.js

INSTALAR EN CASA

[https://github.cohttps://github.com/coreybutler/nvm-windows/releasesm/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows?tab=readme-ov-file)

Dowload 

nvm-setup.exe

Instalacion generica

INSTALAR EN CASA LA VERSION DE 23.6.0 DE NODE


### SEGUIMOS CON LOS TEST
Un test lo que hace es decir OYE cuando yo ejecute esto, entonces espero expect

npm -D @types/jest

```ts
import { add } from "./services";

console.log(add(4,5));
console.log(add(1, -2));
console.log(add(1.5, 3.4));

test('Add function with 1 and 1 should return 1', () =>{
    expect(add(0, 1)).toBe(1)
});

test("Patata", () => {
    expect(add(1, -2)).toBe(-1);
});

test("Patata", () => {
    expect(add(1.5, 3.4)).toBe(4.9);
});
```

npm run test--> para ejecutar los test