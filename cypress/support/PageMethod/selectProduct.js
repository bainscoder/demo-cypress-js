/// <reference types = "cypress"/>
import * as productData from "../../fixtures/product.json"

class selectProductToBuy {
    getProduct() {
        return cy.contains(productData.productName)
    }
    addproductIncart() {
        return cy.get("#button button")
    }
    productName() {
        return cy.get("#productDetails h1")
    }
    productDescription() {
        return cy.get("#details p")
    }
    productCount() {
        return cy.get("#badge")
    }
    placeOrderButton() {
        return cy.get("#button a")
    }
    productVerify() {
        return cy.get("#box h3")
    }
}
export default selectProductToBuy