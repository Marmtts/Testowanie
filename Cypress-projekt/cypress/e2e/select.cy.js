/// <reference types="cypress"/>


describe("Kliknięcie w element na stronie",() => {

it("Zakładka Women", () => {
    cy.visit("/")
    cy.get('a[title="Women"]').click()
})

it("Wybranie filtra in stock", () => {
    cy.get("#selectProductSort").select("In stock")
    cy.get("#selectProductSort").should("have.value","quantity:desc")

})

it("Wybranie filtra od A do Z", () => {
    cy.get("#selectProductSort").select("name:asc")
    cy.get("#selectProductSort").should("have.value","name:asc")

})



})