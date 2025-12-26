class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.completeHeader = page.locator('.complete-header');
  }

  async llenarFormulario(nombre, apellido, zip) {
    await this.firstNameInput.fill(nombre);
    await this.lastNameInput.fill(apellido);
    await this.postalCodeInput.fill(zip);
    await this.continueButton.click();
  }

  async finalizarCompra() {
    await this.finishButton.click();
  }

  async obtenerMensajeConfirmacion() {
    return await this.completeHeader.textContent();
  }
}
module.exports = { CheckoutPage };