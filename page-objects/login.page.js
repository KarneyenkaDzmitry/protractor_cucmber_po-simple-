'use strict';
const EC = protractor.ExpectedConditions;

class LoginPage {

    constructor() { }

    get loginField() { return $('input[name=login]') };
    get passwordField() { return $('input[name=passwd]') };
    get form() { return $('form[method=post]') };
    get checkbox() { return $('.passport-Checkbox') };
    get submitButton() { return $('.passport-Button') };

    getDefaultTexts() {
        return $$('.passport-Input-Label').map(elm => {
            return elm.getText();
        });
    }

    getCheckboxText() {
        return $('.passport-Checkbox-Label').getText();
    }

    isLoaded() {
        return browser.wait(EC.elementToBeClickable(this.submitButton), 5000);
    }

    login(username, password, rememberMe) {
        return this.loginField.sendKeys(username)
            .then(() => this.passwordField.sendKeys(password))
            .then(() => {
                if (rememberMe) {
                    this.checkbox.click()
                        .then(() => this.submitButton.click());
                } else { this.submitButton.click() }
            });
    }
}
module.exports = new LoginPage();