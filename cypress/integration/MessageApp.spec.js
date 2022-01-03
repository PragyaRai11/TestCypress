describe('Test Message app',()=>{
    it('Test Message App',()=>{
        cy.visit('http://localhost:3000/')
        cy.get("h1[class='display-4']").should('have.text', ' Send Message')
        

    })

})