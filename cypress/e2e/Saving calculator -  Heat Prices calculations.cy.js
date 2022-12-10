///<reference types="Cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

import { data } from '../fixtures/params.json'
import selectors from '../support/selectors.js'


describe('Saving calculator Heat Prices calculations test',{defaultCommandTimeout: 100000}, () => {

    const Current_Heating_System_field = '[name="heattype"]';
    const Current_Heating_Cost_field = '[id="CHC"]';
    const New_Heating_Cost_field = '[id="NHC"]';
    const Annual_Heating_Savings_field = '[id="AHS"]';

    beforeEach(() => {
        cy.visit('https://consumersenergymanagement.ca/savings-calculator/')

    })
    it('Populate all the fields at step 1 with the test data of your choice', () => {

        cy.get(selectors.Provinces_selector).should("be.visible").children().first().should("have.text", "Select State")
        cy.get(selectors.Provinces_selector).select("Alberta").invoke('text').should('contain', "Alberta")
        cy.get(selectors.City_selector).should("be.visible").children().first().should("have.text", "Select City")
        cy.get(selectors.City_selector).select("Calgary").invoke('text').should('contain', "Calgary")
        cy.get(selectors.Stories_selector).should("be.visible").children().first().should("have.text", "Select Stories")
        cy.get(selectors.Stories_selector).select("2 + Basement").invoke('val').should('eq', "2+")
        cy.get(selectors.Squar_feet_selector).should("be.visible").children().first().should("have.text", "Sq Ft")
        cy.get(selectors.Squar_feet_selector).select("2000").invoke('val').should('eq', "2000")
        cy.get(selectors.House_age).should("be.visible").clear()
        cy.get(selectors.House_age).type("5").should("have.value", "5")


        data.forEach(element => {
            cy.get('#step1col3 > :nth-child(1)').contains("Gas / Therm:").should("be.visible")
            cy.get(selectors.Gas_Therm_field).clear().type(element.Gas_Therm_field).invoke('val').should('eq', element.Gas_Therm_field)
            cy.get('#step1col3 > :nth-child(2)').contains("Propane / Gal:").should("be.visible")
            cy.get(selectors.Propane_Gal_field).clear().type(element.Propane_Gal_field).invoke('val').should('eq', element.Propane_Gal_field)
            cy.get('#step1col3 > :nth-child(3)').contains("Oil / Gal:").should("be.visible")
            cy.get(selectors.Oil_Gal_field).clear().type(element.Oil_Gal_field).invoke('val').should('eq', element.Oil_Gal_field)
            cy.get('#step1col3 > :nth-child(4)').contains("Summer / KWHR:").should("be.visible")
            cy.get(selectors.Summer_KWHR_field).clear().type(element.Summer_KWHR_field).invoke('val').should('eq', element.Summer_KWHR_field)
            cy.get('#step1col3 > :nth-child(5)').contains("Winter / KWHR:").should("be.visible")
            cy.get(selectors.Winter_KWHR_field).clear().type(element.Winter_KWHR_field).invoke('val').should('eq', element.Winter_KWHR_field)
        })

    })
    it('Verify choosing each Current Heating type change price in Current Heating Cost column', () => {

        cy.get('#step2col2 > :nth-child(1)').contains("Current Heating System").should("be.visible")
        cy.get('#step2col3 > :nth-child(3)').contains("Current Heating Cost: ").should("be.visible")
        // cy.get(Current_Heating_System_field).contains("Current Heater").should("be.visible")
        // cy.get(Current_Heating_Cost_field).select("Calgary").invoke('text').should('contain', "$0.00")
        // cy.get(Current_Heating_System_field).select("Natural Gas").invoke('val').should('eq', 'Natural Gas')
        // cy.get(Current_Heating_Cost_field).should("have.value", "$7,327.27")
    })


})