Feature: Login en Sauce Demo

  Background:
    Given El usuario navega a la pagina de inicio de sesion

  Scenario: Inicio de sesion exitoso
    When El usuario ingresa credenciales validas "standard_user" y "secret_sauce"
    Then El usuario deberia ver la pagina de productos

  Scenario: Inicio de sesion fallido
    When El usuario ingresa credenciales invalidas "locked_out_user" y "secret_sauce"
    Then Deberia visualizarse un mensaje de error de bloqueo