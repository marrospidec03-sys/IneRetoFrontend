class CartPage {
  constructor(page) {
    this.page = page;
    // El botón que nos lleva al formulario de datos personales
    this.checkoutButton = page.locator('[data-test="checkout"]');
    // El nombre del producto dentro del carrito (para validar que sea el correcto)
    this.cartItemName = page.locator('.inventory_item_name');
  }

  async clickCheckout() {
    await this.checkoutButton.click();
  }

  async getFirstItemName() {
    return await this.cartItemName.textContent();
  }
}
module.exports = { CartPage };