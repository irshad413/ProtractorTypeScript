# ProtractorTypeScript
A new UI based framework for protractor where TestScripts are created using TypeScript

This framework is unique in itself as we are driving Protractor and Node scripts using Maven build instead of regular Grunt approach. This is done purely to create a framework which can be triggered through jenkins. 
As there a limitation with Cucumber.js module, we need to have a local version of node running in machine for this framework to work. Refer to https://github.com/cucumber/cucumber-js/issues/1145 for more information on the issue


All node modules will be downloaded to "node" folder inside src/main/java. Exclude the folder from build path

Reports will be generated in "node/reports" folder. We can move the reports outside if needed.
