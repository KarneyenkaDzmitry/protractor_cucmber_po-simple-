'use strict';
const EC = protractor.ExpectedConditions;
class StartPage {
	constructor() {
		this.title = 'Yandex.Disk';
	}
	get singInButton() { return  $('.button')};

	pushSingInButton() {
		this.singInButton.click();
	};

	visit(path) {
		browser.get(path);
	}
	isLoaded() {
		return browser.wait(EC.elementToBeClickable(this.singInButton), 5000);
	}
}
module.exports = new StartPage();