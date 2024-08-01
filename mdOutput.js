function mdOutput(data) {
    const readme = `# ${data.title}
    
    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

    ## Description
    ${data.description}

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## License

    ## Contributing
    ${data.contributing}

    ## Tests
    ${data.tests}

    ## Questions
    - [Click here to view my project on GitHub:](https://www.github.com/${data.github})
    - [Contact me with any questions or input you may have:](${data.email})

    `
    return readme;
  }
  
  module.exports = {mdOutput};