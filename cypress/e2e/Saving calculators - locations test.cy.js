///<reference types="Cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

import selectors from '../support/selectors.js'


describe('Saving calculators locations test', () => {
    it('navigate to Savings Calculator page', { defaultCommandTimeout: 90000 }, () => {
        cy.visit('https://consumersenergymanagement.ca/')
        cy.get(selectors.SavingCalculator_button).should("be.visible").should("have.text", " Savings Calculator ")
        cy.get(selectors.SavingCalculator_button).click().url().should('eq', 'https://consumersenergymanagement.ca/savings-calculator/')

    })
    it('Verify all the Canadian provinces are on the state list and can be chosen', () => {

        cy.get(selectors.Provinces_selector).should("be.visible").children().first().should("have.text", "Select State")
        selectors.Provinces.forEach(element => {
            cy.get(selectors.Provinces_selector).select(element).invoke('text').should('contain', element)
            cy.get(selectors.Provinces_selector).select(element).should("be.visible")
            
        })

    })
    it('Verify each Canadian province has at least one city to choose',()=>{

        cy.get(selectors.City_selector).should("be.visible")
        selectors.Provinces.forEach(element => {
            cy.get(selectors.Provinces_selector).select(element).invoke('text').should('contain', element)
            cy.get(selectors.City_selector).select(1).invoke('val').should("not.be.empty")
            
            
        })
    })
})