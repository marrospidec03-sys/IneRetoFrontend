class ProductsPage {
  constructor(page) {
    this.page = page;
    // Localizador para el botón "Add to cart" de la mochila (backpack)
    this.addToCartBackpackButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    // Localizador para el número rojo que aparece en el carrito
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async addBackpackToCart() {
    await this.addToCartBackpackButton.click();
  }

  async getCartCount() {
    return await this.cartBadge.textContent();
  }

  async goToCart() {
    await this.cartIcon.click();
  }
}
module.exports = { ProductsPage };