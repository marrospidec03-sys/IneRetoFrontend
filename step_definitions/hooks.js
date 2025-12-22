const { Before, After, BeforeAll, AfterAll } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');

let browser;

BeforeAll(async function () {
  // Se ejecuta una vez antes de todas las pruebas
  browser = await chromium.launch({ 
    headless: false,
    slowMo: 500
  }); // headless: false para ver el navegador
});

Before(async function () {
  // Se ejecuta antes de CADA escenario
  this.context = await browser.newContext();
  this.page = await this.context.newPage();
});

After(async function () {
  // Se ejecuta después de CADA escenario
  await this.page.close();
  await this.context.close();
});

AfterAll(async function () {
  // Se ejecuta una vez al final de todo
  await browser.close();
});