
import { Given, When, Then, And} from '@badeball/cypress-cucumber-preprocessor'
import {regUser} from '../../pages/registartion'
import {browserAlert} from '../../pages/alert'


Given("I'm on the registration page", () => {
  regUser.visitRegPage()
})

When('I fill up mandatory fields', () => {
  regUser.fillDeatils()
})

And('I click on submit button', () => {
  regUser.clickSubmit()
})

Then('I should be successfully registered', () => {
    regUser.success()
  })



Given("I'm on the alerts page", () => {
  browserAlert.visitAlertsPage()
})

When('Click on {string} tab', (tab) => {
  browserAlert.clickokAlertTab(tab)
})

And('I click on {string} button', () => {
  browserAlert.clickokAlertButton()
})

Then('I should see {string}', (msg) => {
  browserAlert.verifyConfirmMessage(msg)
})







