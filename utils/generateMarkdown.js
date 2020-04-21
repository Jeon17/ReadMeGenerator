function generateProjectUrl(github, title) {
  const readMeGenerator = title.toLowerCase().split(" ").join("-");
  return `https://github.com/${github}/${readMeGenerator}`;
}

function renderLicenseBadge(license, github, title) {
  if (license !== "None") {
    return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)]($github, title)`
  }
  return ''
}

function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License

This project is licensed under the ${license} license.`
    )
  }
  return ''
}

// Development will happen in generate markdown
function generateMarkdown(data) {
  return `
# **${data.title}**

## Description
  ${data.description}

## Author Information
  Name: ${data.name}
  Location: ${data}
  Github Profile Picture: ${data}
  
## Table of Contents
  1.[Version](#version)
  2. [Project URL](#projectURL)
  3. [Install](#install)
  4. [Usage](#usage)
  5. [License](#license)
  6. [Badge](#badge)
  7. [Contributing](#contributing)
  8. [Tests](#tests)`;
}



module.exports = generateMarkdown;
