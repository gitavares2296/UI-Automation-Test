describe('Suite Test - Search a product', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Procurar um produto na loja e adicionar ao carrinho', () => {
        cy.get('[id="age-gate-button-yes"]').click()
        cy.get('[id="welcome-button-set-delivery-options"]').click()
        cy.get('[id="address-search-input-address"]').type('Rua Gomes de Carvalho')
        cy.wait(2000)
        cy.contains('Rua Gomes de Carvalho').click()
        cy.get('[id="address-details-input-number"]').type('911')
        cy.contains('Não tenho complemento').click()
        cy.contains('Trabalho').click()
        cy.get('[id="address-details-button-continue"]').click()
        cy.wait(1000)
        cy.get('[id="see-products"]').click()
        cy.get('[id="search-product-input"]').type('Tequila')
        cy.wait(1000)
        cy.contains('Tequila Jose Cuervo Especial Gold').click()
        cy.get('[id="product-amount"]').click()

        cy.get('div.css-gnj7ig-productTitle').should('contain', 'Tequila Jose Cuervo Especial Gold 750ml')
        
    })

    it('Procurar um produto que não exista na loja', () => {
        cy.get('[id="age-gate-button-yes"]').click()
        cy.get('[id="welcome-button-set-delivery-options"]').click()
        cy.get('[id="address-search-input-address"]').type('Rua Gomes de Carvalho')
        cy.wait(2000)
        cy.contains('Rua Gomes de Carvalho').click()
        cy.get('[id="address-details-input-number"]').type('911')
        cy.contains('Não tenho complemento').click()
        cy.contains('Trabalho').click()
        cy.get('[id="address-details-button-continue"]').click()
        cy.wait(1000)
        cy.get('[id="see-products"]').click()
        cy.get('[id="search-product-input"]').type('Esfirra')
        cy.wait(1000)
        cy.get('[id="search-product-not-found"]').should('contain', 'Putz, não conseguimos encontrar o produto')
   
    })

    it('Procurar uma cerveja na categoria "cervejas"', () => {
        cy.get('[id="age-gate-button-yes"]').click()
        cy.get('[id="welcome-button-set-delivery-options"]').click()
        cy.get('[id="address-search-input-address"]').type('Rua Gomes de Carvalho')
        cy.wait(2000)
        cy.contains('Rua Gomes de Carvalho').click()
        cy.get('[id="address-details-input-number"]').type('911')
        cy.contains('Não tenho complemento').click()
        cy.contains('Trabalho').click()
        cy.get('[id="address-details-button-continue"]').click()
        cy.wait(1000)
        cy.get('[id="see-products"]').click()
        cy.get('[id="category-Cervejas"]').click()
        cy.get('[id="image-brand-Budweiser"]').click()
        cy.wait(1000)
        cy.get('div').contains('Budweiser 350ml').click()
        cy.get('[id="add-amount-6"]').click()
        cy.get('[id="product-amount"]').click()
        cy.wait(1000)

        cy.get('div.css-gnj7ig-productTitle').should('contain', 'Budweiser 350ml')
    })

})

