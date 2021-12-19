describe('Teste', () => {
    it('Acessar Pagina', () => {
        cy.visit('https://www.saucedemo.com');
       
        cy.get('[data-test="username"]').type('standard_user');
       
        cy.get('[data-test="password"]').type('secret_sauce');
        
        cy.get('[data-test="login-button"]').click();

        cy.get('.select_container').click();

        cy.get('[data-test="product_sort_container"]').select('Price (low to high)');

        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();

        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();

        cy.get('.shopping_cart_badge').click();

        cy.get('[data-test="checkout"]').click();

        cy.get('[data-test="firstName"]').type('Pâmela');

        cy.get('[data-test="lastName"]').type('Ornellas');

        cy.get('[data-test="postalCode"]').type('04728-180');

        cy.get('[data-test="continue"]').click();

        cy.get('[data-test="finish"]').click();

        return

    });
});