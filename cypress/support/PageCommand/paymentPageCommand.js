import payment from "../PageMethod/payment";
import * as paymentDetails from "../../fixtures/paymnetDetails.json"

const pay               = new payment()

/**
 * This cypress custom command is to validate payment page:
 */
Cypress.Commands.add("fillPaymentDetailsAndCompletePayment",()=> {
    pay.getCardNumber().type(paymentDetails.cardNumber).should("have.value",paymentDetails.cardNumber)
    pay.getCardHolderName().type(paymentDetails.cardHolderName).should("have.value",paymentDetails.cardHolderName)
    pay.getExpiryDate().type(paymentDetails.expiryDate).should("have.value",paymentDetails.expiryDate)
    pay.getCVV().type(paymentDetails.cvv).should("have.value",paymentDetails.cvv)
    pay.getPayNowBtn().click()
    cy.url().should('contain','orderPlaced')
})