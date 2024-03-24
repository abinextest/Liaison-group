# liaison_group_test

**About Framework:**
To run this test, `Node.js  needs to be installed. After installing node.js, you can install the required packages by running `npm install` in the project directory.

The  LIAISON Group framework is written with playwright so to install the playwright packages run this command `npm init playwright`.

Another package to be installed is cucumber as this is written in cucumber BDD format, To install this, you should run this command `npm install @cucumber/cucumber`. If you are  using VScode, you should add the cucumber Gherkin plugin.

To run some of the commands for the tests:

This command will execute all To run all the tests:   `npx cucumber-js --exit`
This command will execute all the scenarios tagged with @Validation:   `npx cucumber-js --tags "@Validation" --exit`  
This command will execute all scenarios tagged in parallel:   ` npx cucumber-js --tags "@Validation" --parallel 2 --exit` 

Other commands are in the config file.

For the third test. The pay gap links needed to be worked more  hence I chose the test.

The last test labeled `failed test` has a bug in it. The form shows a successful message when no data is filled.
