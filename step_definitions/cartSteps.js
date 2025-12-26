const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { ProductsPage } = require('../pages/ProductsPage');

// Paso para agregar el producto
When('Agrega el producto {string} al carrito', async function (productName) {
  // Creamos la instancia de la página de productos usando la página actual
  this.productsPage = new ProductsPage(this.page);
  
  // Llamamos al método que hace el clic en el botón
  await this.productsPage.addBackpackToCart();
});

// Paso para verificar la cantidad en el carrito
Then('El carrito deberia mostrar {string} producto', async function (expectedCount) {
  // Usamos el método getCartCount que acabamos de analizar
  const actualCount = await this.productsPage.getCartCount();
  
  // Realizamos la aserción (verificación)
  expect(actualCount).toBe(expectedCount);
});