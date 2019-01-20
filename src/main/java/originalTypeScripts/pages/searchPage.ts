import { $, ElementFinder } from "../../node/node_modules/protractor";

export class SearchPageObject {
    public searchTextBox: ElementFinder;
    public searchButton: ElementFinder;
    public logo: ElementFinder;

    constructor() {
        this.searchTextBox = $("input[class='gLFyf gsfi']");
        this.searchButton = $("input[value='Google Search']");
        this.logo = $('.logo');
    }
}
