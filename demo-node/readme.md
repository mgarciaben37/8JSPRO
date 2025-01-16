# Proyecto con Node

Podría ser un proyecto Backend
No hay front

-  Pacakge.json --> ejecutar-->npm init -y
- Creamos /copiamos archivo .editorconfig
- Prettier (se añade con este comando -->npm i -D prettier)
- Añadiremos package.json --> **las comillas quitadas
- Añadiren typescript (se añade con este comando --> npm i -D typescript)
- npx tsc --init

Configuracion:

- Ejecutar cosas que tenemos en node modules (se añade este comando -->npx tsc -v)
- Tener previamente un archivo JS. Convertimos js a ts (npx tsc sample.js)
- Para crear  tsconfig.json (se añade cone ste comando--> npx tsc --init)
- en el archivo tsconfig.js
- cambiamos "target": "es2016",  ---> "target": "ESNext"
- añadimos "rootDir": "./src"
- descomentamos "moduleResolution": "node10",  

- nos vamos al treminal y decimos --> npm run build