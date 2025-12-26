const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { ProductsPage } = require('../pages/ProductsPage');
const { CheckoutPage } = require('../pages/CheckoutPage'); // Tendremos que crear este Page Object
const { CartPage } = require('../pages/CartPage'); // Tendremos que crear este Page Object

When('Completa el checkout con {string}, {string} y {string}', async function (nombre, apellido, zip) {
  // Usamos los Page Objects para navegar y actuar
  const productsPage = new ProductsPage(this.page);
  await productsPage.goToCart(); // <-- El selector está escondido dentro de la clase

  const cartPage = new CartPage(this.page);
  await cartPage.clickCheckout(); // <-- El selector está escondido dentro de la clase

  this.checkoutPage = new CheckoutPage(this.page);
  await this.checkoutPage.llenarFormulario(nombre, apellido, zip);
});

Then('Deberia ver el mensaje de confirmacion {string}', async function (mensajeEsperado) {
  await this.page.locator('[data-test="finish"]').click(); // Clic a Finish
  const mensajeReal = await this.page.locator('.complete-header').textContent();
  expect(mensajeReal).toBe(mensajeEsperado);
});