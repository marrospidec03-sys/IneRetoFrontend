const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

Given('El usuario navega a la pagina de inicio de sesion', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigate();
});

When('El usuario ingresa credenciales validas {string} y {string}', async function (user, pass) {
  await this.loginPage.login(user, pass);
});

When('El usuario ingresa credenciales invalidas {string} y {string}', async function (user, pass) {
  await this.loginPage.login(user, pass);
});

Then('El usuario deberia ver la pagina de productos', async function () {
  await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

Then('Deberia visualizarse un mensaje de error de bloqueo', async function () {
  const errorText = await this.loginPage.errorMessage.textContent();
  expect(errorText).toContain('Epic sadface: Sorry, this user has been locked out.');
});