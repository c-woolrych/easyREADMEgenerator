// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
[![License](http://img.shields.io/badge/license-${data.license}-blue.svg)]
## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
To see other projects: https://github.com/${data.username}.
If you have any questions feel free to contact me at ${data.email}.
`;
}

module.exports = generateMarkdown;
