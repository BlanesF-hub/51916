Analizador de lenguaje de condicionales simples con ANTLR4 y JavaScript

Pasos para instalacion:

Para instalar este proyecto debemos clonar el repositorio ejecutando en una ventana de comandos (CMD, POWERSHELL o terminal en Linux) los siguientes comandos:

git clone: https://github.com/BlanesF-hub/51916.git



cd \ssl-antlr-condicional

cd ssl-antlr-calculator

code ssl-51916

El analizador pedido realiza lo siguiente:

1. Verifica si el código fuente está escrito correctamente (análisis léxico y sintáctico).
2. Muestra una tabla con los lexemas y sus tokens.
3. Muestra el árbol sintáctico del programa.
4. Traduce el código a JavaScript y lo ejecuta como si fuera un intérprete.

Como ejecutar proyecto

- Tener instalado Node.js
- Tener instalado ANTLR4 o bien la extension de Visual Studio CODE

Si usás el .jar:

1. Bajá ANTLR desde https://www.antlr.org/
2. Generá los archivos con: java -jar antlr-4.X-complete.jar -Dlanguage=JavaScript Calculator.g4 -o generated

--

Cómo ejecutar el proyecto

1. Generar los archivos del parser y lexer (si no los tenés generados ya):antlr4 -Dlanguage=JavaScript Calculator.g4 -o generated

2. Instalar la librería de antlr4: npm install antlr4

3. Ejecutar el programa: npm start


Por defecto, va a leer el archivo input.txt y procesarlo.

Parandose en el archivo instrucciones.g4 si se toca f5 genera el arbol sintactico recorrido segun el input deseado y permitido
