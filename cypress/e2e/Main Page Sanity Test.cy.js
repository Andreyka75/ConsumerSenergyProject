///<reference types="Cypress"/>

// import selectors from '../support/selectors.js'
// import commands from '../support/commands.js'

describe('Main Page Sanity testing', () => {
  beforeEach('navigate to the main page', () => {
    cy.visit('/')
    
  })
  it('verify correct URL',{defaultCommandTimeout: 60000},()=>{
    cy.url().should('eq', 'https://consumersenergymanagement.ca/')
  })
  it('verify clicking on Home tab',{defaultCommandTimeout: 60000}, () => {
    
    cy.clickOnHomeTab()
  })
  it('verify clicking on About tab',{defaultCommandTimeout: 60000}, () => {
    
    cy.clickOnAboutTab()

  })
  it('verify clicking on Products tab',{defaultCommandTimeout: 60000}, () => {
    
    cy.clickOnProductsTab()

  })
  it('verify clicking on Services tab',{defaultCommandTimeout: 60000}, () => {
    
    cy.clickOnServicesTab()

  })
  it('verify clicking on Tools tab',{defaultCommandTimeout: 60000}, () => {
    
    cy.clickOnToolsTab()

  })
  it('verify clicking on Promotions tab',{defaultCommandTimeout: 60000}, () => {
    
    cy.clickOnPromotionsTab()

  })
  it('verify clicking on Careers tab',{defaultCommandTimeout: 60000}, () => {
    
    cy.clickOnCareersTab()

  })
  it('verify clicking on Blog tab',{defaultCommandTimeout: 60000}, () => {
    
    cy.clickOnBlogTab()

  })
  it('verify clicking on FAQs tab',{defaultCommandTimeout: 60000}, () => {
    
    cy.clickOnFAQsTab()

  })
  it('verify clicking on Contact tab',{defaultCommandTimeout: 60000}, () => {
    
    cy.clickOnContactTab()

  })
})