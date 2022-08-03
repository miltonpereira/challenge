/// <reference types = "cypress"/>


class Alert {

    // static ccss properties
    alertsUrl = `/Alerts.html`
    buttonSelector = ".btn-primary"


    // page navigator method
    visitAlertsPage = () => cy.visit(this.alertsUrl).title().should('eq', 'Alerts')


    // cypress selector methods
    okAlertSelector = (value) => cy.contains(value)
    okButton = () => cy.get("#CancelTab > .btn")
    confirmMessage = () => cy.get('#demo')

    


    // Action methods
    clickokAlertTab = (value) => this.okAlertSelector(value).should('be.visible').click()
    clickokAlertButton = () => this.okButton().should('be.visible').click({ force: true })
    verifyConfirmMessage = (message) => this.confirmMessage().should('have.text',message)

}

export const browserAlert = new Alert();