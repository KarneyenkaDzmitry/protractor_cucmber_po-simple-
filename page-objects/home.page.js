'use strict';

class HomePage {
    getDesctopName() {
        return $('h1[title]').getText();
    }
    visit(){BhxBrowser.get('https://disk.yandex.com/client/disk')}
}

module.exports = new HomePage();