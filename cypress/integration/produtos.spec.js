/// <reference types="cypress" />

describe('Funcionalidade página de produtos', () => {

    beforeEach(() => {
        cy.visit('produto')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains('Ajax Full-Zip Sweatshirt')
            .click()
    });

    it.only('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 3

        cy.get('[class="product-block grid"]')
            .contains('Ajax Full-Zip Sweatshirt').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Ajax Full-Zip Sweatshirt” foram adicionados no seu carrinho.')

    });

    it('Deve adicionar produtos ao carrinho - Usando Comando customizado', () => {
        cy.addProdutos('Ajax Full-Zip Sweatshirt', 'M', 'Blue', '4')
    });

    it('Deve adicionar produtos ao carrinho - Usando Comando customizado', () => {
        cy.addProdutos('Ajax Full-Zip Sweatshirt', 'XS', 'Red', '4')
    });


});

