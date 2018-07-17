'use strict';
const { Then, Given, When } = require('cucumber');
const { expect } = require('chai');
const startPage = require('../../page-objects/start.page');
const loginPage = require('../../page-objects/login.page');
const homePage = require('../../page-objects/home.page');
let isLogined = false;

Given('I am on homepage after login action', function () {
    if (!isLogined) {
        const params = browser.params;
        index = true;
        return startPage.pushSingInButton()
        .then(()=>loginPage.login(params.username, params.password, params.remember));
    } else {
        return homePage.visit();
    }
});

When('I move mouse to main table with text {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('I click the left button of the mouse', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('I see context menu', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('I see in it {int} fields in the folowwing order :', function (int, dataTable) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Given('I am on homepage after login action', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('I move mouse to main table with text {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('I click the left button of the mouse', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('I click the right button on the {string} refference', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('I see the dialogue windows with text {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('one field with typed text {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('I type nay name of folder', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('push the button {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('I see the created folder in the main table', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});