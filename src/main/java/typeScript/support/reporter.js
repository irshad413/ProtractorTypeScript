"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reporter = void 0;
const reporter = require("../../node/node_modules/cucumber-html-reporter");
const fs = require("fs");
const mkdirp = require("../../node/node_modules/mkdirp");
const path = require("path");
const jsonReports = path.join(process.cwd(), "/reports/json");
const htmlReports = path.join(process.cwd(), "/reports/html");
const targetJson = jsonReports + "/cucumber_report.json";
const cucumberReporterOptions = {
    jsonFile: targetJson,
    output: htmlReports + "/cucumber_reporter.html",
    reportSuiteAsScenarios: true,
    theme: "bootstrap",
};
class Reporter {
    static createDirectory(dir) {
        if (!fs.existsSync(dir)) {
            mkdirp.sync(dir);
        }
    }
    static createHTMLReport() {
        try {
            reporter.generate(cucumberReporterOptions); // invoke cucumber-html-reporter
        }
        catch (err) {
            if (err) {
                throw new Error("Failed to save cucumber test results to json file.");
            }
        }
    }
}
exports.Reporter = Reporter;
