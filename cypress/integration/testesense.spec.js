/// <reference types="cypress" />

describe('Teste Sense - Pâmela Ornellas', () => {
    it('Acessar Pagina', () => {
        cy.visit('https://www.saucedemo.com');

    });

    it('Iniciar teste login/Filtro menor/maior/Colocar item 1 e 2 no carrinho/Realizar cadastro para compra/Finalizar compra/CheckOut', () => {
     
    //Login
        cy.get('[data-test="username"]').type('standard_user');
       
        cy.get('[data-test="password"]').type('secret_sauce')

        cy.get('[data-test="login-button"]').click();
    
    //Selecionar preço do menor para o maior

        cy.get('.select_container').click();

        cy.get('[data-test="product_sort_container"]').select('Price (low to high)');
    
    //Incluir item 1 ao carrinho de compras
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();

    //Incluir item 2 ao carrindo de compras
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
        
    //Visualizar carrinho de compras
        cy.get('.shopping_cart_badge').click();
    
    //Efetuar compra
        cy.get('[data-test="checkout"]').click();

    //Realizar cadastro para compra
        cy.get('[data-test="firstName"]').type('Pâmela');

        cy.get('[data-test="lastName"]').type('Ornellas');

        cy.get('[data-test="postalCode"]').type('04728-180');

        cy.get('[data-test="continue"]').click();

    //Finalizar compra
        cy.get('[data-test="finish"]').click();

        return

    });

});

