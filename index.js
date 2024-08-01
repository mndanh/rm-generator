const inquirer = require('inquirer');
const fs = require('fs');
const {mdOutput} = require("./mdOutput");
const {questions} = require("./questions");
const {renderLicenseBadge} = require("./licenseBadge");

async function init() {
    try {
        const replies = await inquirer.prompt(questions());
        replies.licenseBadge = renderLicenseBadge(replies.license);
        const newReadMe = mdOutput(replies);
        fs.writeFile('README.md', newReadMe, (err) => {
            if (err) {
                console.error("There was an error creating this README")
            } else {
                console.log("README generated")
            }
            
        });
    } catch (error) {
        console.error("Error during initialization: ", error);
    }
};

init();