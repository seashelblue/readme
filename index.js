var inquirer = require('inquirer');
var fs = require('fs');
inquirer.prompt([
    {
        type: 'input',
        name: 'project',
        message: 'Project Name: '
    },
    {
        type: 'input',
        name: 'script',
        message: 'Description: '
    },
    {
        type: 'input',
        name: 'table',
        message: 'Table of Contents: '
    },
    {
        type: 'input',
        name: 'install',
        message: 'Installation: '
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage: '
    },
    {
        type: 'input',
        name: 'valid',
        message: 'License: '
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Contributing: '
    },
    {
        type: 'input',
        name: 'test',
        message: 'Tests: '
    },
    {
        type: 'input',
        name: 'question',
        message: 'Questions: '
    }
])
.then(function(answer) {
    console.log('', answer);
    var readMeString = `
    [Title](#Title) : ${answer.project}
    [Description](#Description): ${answer.script}
    [Table of Contents](#Table of Contents): ${answer.table}
    [Installation](#Installation): ${answer.install}
    [Usage](#Usage): ${answer.usage}
    [License](#License): ${answer.valid}
    [Contributing](#Contributing): ${answer.contribute}
    [Tests](#Tests): ${answer.test}
    [Questions](#Questions): ${answer.question}
    ![README Generator](https://img.shields.io/badge/License-MJ-red)
    `
    fs.writeFile('README.md', readMeString, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
})