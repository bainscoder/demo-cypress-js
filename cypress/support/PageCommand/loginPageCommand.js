/// <reference types = "cypress"/>

import Login from "../PageMethod/loginPage";
import * as loginData from "../../fixtures/login.json"

const login                    =             new Login()

/**
 * This cypress custom command is to validate valid login functionality:
 */
Cypress.Commands.add("loginWithvalidCredentials",()=> {
    login.getLoginUrl()
    login.getUsername().clear().type(loginData.username).should('have.value',loginData.username)
    login.getPassword().clear().type(loginData.password).should('have.value',loginData.password)
    login.getLogin().click()
    cy.url().should('contain','/index.html')
})

/**
 * This cypress custom command is to validate in-validate login functionality:
 */
Cypress.Commands.add("loginWithInvalidCredentials",()=> {
    login.getLoginUrl(loginData.url)
    login.getUsername().clear().type(loginData.username).should('have.value',loginData.username)
    login.getPassword().clear().type("test").should('have.value',"test")
    login.getLogin().click()
    login.getvalidationMessage().should("have.text",loginData.validationMessage)
    cy.url().should('not.contain','/index.html')
})

/**
 * This cypress custom command is to validate cancel button functionality:
 */
Cypress.Commands.add("verifyFunctionalityOfCancelButton",()=> {
    login.getLoginUrl(loginData.url)
    login.getUsername().clear().type(loginData.username).should('have.value',loginData.username)
    login.getPassword().clear().type(loginData.password).should('have.value',loginData.password)
    login.getCancel().click()
    login.getUsername().should('not.have.value',loginData.username)
    login.getPassword().should('not.have.value',loginData.password)
    cy.url().should('not.contain','/index.html')
})

