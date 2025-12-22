Prerrequisitos y Herramientas
Para este proyecto se utilizaron las siguientes versiones y herramientas:

 IDE: Visual Studio Code.
 Entorno de ejecución: Node.js (Version LTS recomendada).
 Gestor de paquetes: NPM (incluido con Node.js).
 Framework de Automatización: Playwright. 
 Herramienta de BDD: Cucumber.js.

Extensiones de VS Code necesarias
Asegúrate de tener estas extensiones instaladas para que el código funcione y se vea correctamente:
 Playwright Test for VSCode (Microsoft): Permite ejecutar los tests desde el editor.
 Cucumber (Gherkin) Full Support: Para que VS Code entienda los archivos .feature.

Librerías instaladas (Dependencias)
 @playwright/test: El núcleo para la automatización web.
 @playwright/test (Assertion Library): Se utiliza el módulo expect de Playwright para realizar las validaciones (assertions) de los resultados esperados.
 @cucumber/cucumber: Para permitir la integración de Gherkin con Playwright.
 Hooks: Se implementaron ganchos BeforeAll y AfterAll para gestionar el ciclo de vida del navegador, optimizando el uso de recursos.

Patrón de Diseño
Se implementó Page Object Model (POM) para mejorar la mantenibilidad y reutilización del código, separando la estructura de las páginas de la lógica de las pruebas.

Estructura del Proyecto
Carpeta pages/: Contiene las clases del patrón Page Object Model, donde se definen los localizadores y métodos de interacción con la interfaz de usuario de Sauce Demo.

Instalación y Ejecución
Ejecute el siguiente comando para descargar Playwright y Cucumber:
    npm install
    Por ejemplo, si desea descargar la librería Cucumber
    npm install --save-dev @cucumber/cucumber

Para lanzar la suite de pruebas completa, utilice el comando:
    npx cucumber-js
    Por ejemplo, cada vez que termines de escribir un código como el de Login.