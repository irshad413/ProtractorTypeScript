"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("../../node/node_modules/protractor");
class SearchPageObject {
    constructor() {
        this.searchTextBox = protractor_1.$("input[class='gLFyf gsfi']");
        this.searchButton = protractor_1.$("input[value='Google Search']");
        this.logo = protractor_1.$('.logo');
    }
}
exports.SearchPageObject = SearchPageObject;
