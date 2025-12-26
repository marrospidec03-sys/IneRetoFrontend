Feature: Flujo de compras en SauceDemo
  Como un usuario registrado
  Quiero agregar productos al carrito y finalizar la compra
  Para asegurar que el sistema de ventas funciona correctamente

  Background: 
    Given El usuario navega a la pagina de inicio de sesion

  Scenario: Agregar una mochila al carrito
    When El usuario ingresa credenciales validas "standard_user" y "secret_sauce"
    And Agrega el producto "Sauce Labs Backpack" al carrito
    Then El carrito deberia mostrar "1" producto

  Scenario: Completar el proceso de compra exitosamente
    When El usuario ingresa credenciales validas "standard_user" y "secret_sauce"
    And Agrega el producto "Sauce Labs Backpack" al carrito
    And Completa el checkout con "Manuel", "Arrospide" y "12345"
    Then Deberia ver el mensaje de confirmacion "Thank you for your order!"