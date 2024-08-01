const inquirer = require('inquirer');
const fs = require('fs');
const {mdOutput} = require("./mdOutput");
const {questions} = require("./questions");
const {licenseImg} = require("./licenseBadge");

async function init() {
    const replies = await inquirer.createPromptModule(questions);
    replies.licenseImg = renderLicenseBadge(replies.license);
    const newReadMe = mdOutput(replies);
    fs.writeFile('README.md', newReadMe, (err) => {
        if (err) {
            console.error("There was an error creating this README")
        } else {
            console.log("README generated")
        }
        
    })
};

init();