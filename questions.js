function questions(){
    return [
        {
            type: "input",
            message: "What is the title of your project?",
            name: 'title',
        },
        {
            type: "input",
            message: "Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide: - What was your motivation? - Why did you build this project? - What problem does it solve? - What did you learn?",
            name: 'description',
        },
        {
            type: "input",
            message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
            name: 'installation',
        },
        {
            type: "input",
            message: "Provide instructions and examples for use. Include screenshots as needed.",
            name: 'usage',
        },
        {
            type: "list",
            message: "What license is this project using??",
            name: 'license',
            choices: ["MIT", "Apache 2.0", "GNU General Public License v3.0", "BSD 2-Clause Simplified License", "BSD 3-Clause New or Revised License", "Boost Software License 1.0", "reative Commons Zero v1.0 Universal"],
        },
        {
            type: "input",
            message: "If you created an application or package and would like other developers to contribute, include guidelines for how to do so.",
            name: 'contributing',
        },
        {
            type: "input",
            message: "Go the extra mile and write tests for your application. Then provide examples on how to run them here.",
            name: 'tests',
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: 'github',
        },
        {
            type: "input",
            message: "What is your email address?",
            name: 'email',
        },
    ]
};

module.exports = {questions};