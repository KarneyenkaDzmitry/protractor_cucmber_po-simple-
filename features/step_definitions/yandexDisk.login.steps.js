'use strict';
const { Then, Given, When } = require('cucumber');
const { expect } = require('chai');
const startPage = require('../../page-objects/start.page');
const loginPage = require('../../page-objects/login.page');
const homepage = require('../../page-objects/home.page');

Given('I am on {string} page', function (string) {
   return  startPage.visit(string);
});

When('I click on the {string} button', function (string) {
    return startPage.isLoaded()
    .then(()=>startPage.pushSingInButton());
});

When('I wait for until login page is loaded', function () {
    return loginPage.isLoaded();
});

Then('I see the login form', { timeout: 2 * 5000 }, async function () {
    return expect(await loginPage.form.isPresent()).to.be.equal(true);
});

Then('I see the Login field with typed text {string}', async function (string) {
    expect(await loginPage.loginField.isPresent()).to.be.equal(true);
    const defaultTexts = await loginPage.getDefaultTexts();
    expect(defaultTexts.includes(string)).to.be.equal(true);
});

Then('I see the Password field with typed text {string}', async function (string) {
    expect(await loginPage.passwordField.isPresent()).to.be.equal(true);
    const defaultTexts = await loginPage.getDefaultTexts();
    expect(defaultTexts.includes(string)).to.be.equal(true);
});

Then('{string} checkbox with text {string}',async function (string, text) {
    string === 'unselected'?
        expect(await loginPage.checkbox.isSelected()).to.be.equal(false)
        :
        expect(await loginPage.checkbox.isSelected()).to.be.equal(true);
    return expect(await loginPage.getCheckboxText()).to.be.equal(text);
});

Then('{string} button with text {string}', async function (string, text) {
    string === 'enable'?
        expect(await loginPage.submitButton.isEnabled()).to.be.equal(true)
        :
        expect(await loginPage.submitButton.isEnabled()).to.be.equal(false);
        return expect(await loginPage.submitButton.getText()).to.be.equal(text);
});

When('Log in with the following data:', { timeout: 4 * 5000 },async  function (dataTable) {
    const data = dataTable.rowsHash();
    return await loginPage.login(data.username, data.password, data.remember);
});

Then('The title of page is {string}',async function (string) {
    return expect(await browser.getTitle()).to.be.equal(string);
});

Then('URL is {string}', async function (string) {
    return expect(await browser.getCurrentUrl()).to.be.equal(string);
});

Then('I see the component with text {string}',async function (string) {
    return expect(await homepage.getDesctopName()).to.be.equal(string);
});
