class Home {

    get womenTab() {
    return cy.get('a[title="Women"]')
}

    clickOnWomenTab() {
        this.womenTab.click()
    }

    moveOnWomenTab() {
        this.womenTab.hover()
    }
}

export default new Home();