/// <reference types="cypress"/>
import Base from "../pages/Base";
import Search from "../pages/Search";
import {searchPhrase, notFoundProduct} from "../fixtures/searchData.json"
import ResultPage from "../pages/ResultPage";

describe("Wpisywanie tekstu w wyszukiwarke",() => {
    it("Wpisywanie tekstu", () => {
        Base.openHomePage();
        Search.typeSearchPhrase(searchPhrase);
        // cy.get('#search_query_top').type("Przykładowa treść")
        Search.searchBox.should("have.value",searchPhrase)
        // cy.get('#search_query_top').should("have.value","Przykładowa treść")
        cy.wait(3000)
        Search.clearSearchPhrase()
        // cy.get('#search_query_top').clear()
        cy.wait(3000)
        Search.typeSearchPhrase(`${searchPhrase}{enter}`)
        // cy.get('#search_query_top').type("Przykładowa treść{enter}")
        ResultPage.searchAlert.should("be.visible").and("include.text",notFoundProduct)
        // cy.get('p.alert').should("be.visible").and("include.text","No results")
        Search.searchBox.should("have.class","search_query")
        Search.searchBox.should("have.css","margin-right","1px")
    })
})