'use strict';

class HomePage {
    getDesctopName() {
        return $('h1[title]').getText();
    }
}

module.exports = new HomePage();