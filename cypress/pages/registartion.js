/// <reference types = "cypress"/>


class Registration {

    // static ccss properties
    regFromUrl = `/Register.html`
    hobbieSelector = "[id=\"checkbox1\"]"
    languageSelector = "[ng-model=\"FirstLast\"]"
    submitSelector = '[id=\"submitbtn\"]'

    // page navigator method
    visitRegPage = () => cy.visit(this.regFromUrl).title().should('eq', 'Register')

    // generate selector method
    selector = (fieldName) => `[ng-model=\"${fieldName}\"]`

    // cypress selector methods
    firstName = () => cy.get(this.selector("FirstName"))
    lastName = () => cy.get(this.selector("LastName"))
    address = () => cy.get(this.selector("Adress"))
    email = () => cy.get(this.selector("EmailAdress"))
    phone = () => cy.get(this.selector("Phone"))
    gender = () => cy.get(this.selector("radiovalue"))
    hobbies = () => cy.get(this.hobbieSelector)
    language = () => cy.get(this.languageSelector)
    skills = () => cy.get(this.selector("Skill"))
    country = () => cy.get(this.selector("EmailAdress"))
    year = () => cy.get(this.selector("yearbox"))
    month = () => cy.get(this.selector("monthbox"))
    day = () => cy.get(this.selector("daybox"))
    password = () => cy.get(this.selector("Password"))
    confirmPassword = () => cy.get(this.selector("CPassword"))
    submitButton = () => cy.get(this.submitSelector)


    // Action methods
    enterFirstName = () => this.firstName().should('be.visible').clear().type('firstname')

    enterLastName = () => this.lastName().should('be.visible').clear().type('last name')

    enterAddress = () => this.address().should('be.visible').clear().type('address')

    enterEmail = () => this.email().should('be.visible').clear().type('email@example.com')

    enterPhone = () => this.phone().should('be.visible').clear().type('9803908767')

    selectMaleGender = () => this.gender().should('be.visible').first().check()

    selectHobbies = () => this.hobbies().should('be.visible').check()

    selectSkills = () => this.skills().should('be.visible').select('C')

    enterPassword = () => this.password().should('be.visible').type('123Wow#')

    enterConfirmPassword = () => this.confirmPassword().should('be.visible').type('123Wow#')

    clickSubmit = () => this.submitButton().should('be.visible').click()
    
    success = () => this.submitButton().should('not.be.visible')


    /**
     * Enters date of birth
     */
    enterBirthDate = () => {
        this.year().select('1990')
        this.month().select('March')
        return this.day().select('10')
    }

    /**
     * Fills & submits the registration form
     */
    fillDeatils = () => {
        this.enterFirstName()
        this.enterLastName()
        this.enterAddress()
        this.enterEmail()
        this.selectMaleGender()
        this.selectHobbies()
        this.selectSkills()
        this.enterBirthDate()
        this.enterPassword()
        this.enterConfirmPassword()
        return this.enterPhone()
    }

}

export const regUser = new Registration();