const fs = require('fs')
const inquirer = require('inquirer')
const generateHTML = require('./dist/generateHTML.js')
const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')


let team = []

const managerQs = [
    {
        type: 'input',
        message: 'What is the the name of the team manager?',
        name: 'name',
        validate: (response) => {
            if (!response) {
                return console.log('This response is required.')
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        message: 'What is the employee ID of the team manager?',
        name: 'id',
        validate: (response) => {
            if (!response) {
                return console.log('This response is required.')
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        message: 'What is the email address of the team manager?',
        name: 'email',
        validate: (response) => {
            if (!response) {
                return console.log('This response is required.')
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        message: 'What is the office number for the team manager?',
        name: 'office',
        validate: (response) => {
            if (!response) {
                return console.log('This response is required.')
            } else {
                return true
            }
        }
    },
    
]

const engineerQs = [
    {
        type: 'input',
        message: 'What is the name of the engineer?',
        name: 'name',
        validate: (response) => {
            if (!response) {
                return console.log('This response is required.')
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        message: 'What is the ID of the engineer?',
        name: 'id',
        validate: (response) => {
            if (!response) {
                return console.log('This response is required.')
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        message: 'What is the email address of the engineer?',
        name: 'email',
        validate: (response) => {
            if (!response) {
                return console.log('This response is required.')
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        message: "What is the engineer's GitHub?",
        name: 'github',
        validate: (response) => {
            if (!response) {
                return console.log('This response is required.')
            } else {
                return true
            }
        }
    }
]

const internQs = [
    {
        type: 'input',
        message: 'What is the name of the engineer?',
        name: 'name',
        validate: (response) => {
            if (!response) {
                return console.log('This response is required.')
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        message: 'What is the ID of the engineer?',
        name: 'id',
        validate: (response) => {
            if (!response) {
                return console.log('This response is required.')
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        message: 'What is the email address of the engineer?',
        name: 'email',
        validate: (response) => {
            if (!response) {
                return console.log('This response is required.')
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        message: 'What school does the intern attend?',
        name: 'school',
        validate: (response) => {
            if (!response) {
                return console.log('This response is required.')
            } else {
                return true
            }
        }
    }
]

const addAnother = () => {
    inquirer.prompt([
        {
            type: 'confirm',
            message: 'Would you like to add another team member?',
            name: 'addQuery',
        },
    ]).then((response) => {
        console.log(response)
        if(response.addQuery == true){
            employeeType()
        }else{
            writeToFile()
        }
    }

    )
}

const writeToFile = () => {
    console.log(team)
}

const employeeType = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What kind of employee is this?',
            choices: ['Engineer', 'Intern', 'Cancel'],
            name: 'type',

        }
    ]).then((response) => {
        if(response.type === 'Engineer'){
            engineerQuestions()
        }else if(response.type === 'Intern'){
            internQuestions()
        }else{
            writeToFile()
        }
    }
    )
}

const engineerQuestions = () => {
    inquirer.prompt(engineerQs).then((answers) => {
        var engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        team.push(engineer)
        addAnother()
    })
}

const internQuestions = () => {
    inquirer.prompt(internQs).then((answers) => {
        var intern = new Intern(answers.name, answers.id, answers.email, answers.school)
    })
}

const managerQuestions = () => {
    inquirer.prompt(managerQs).then((answers) => {
        var manager = new Manager(answers.name, answers.id, answers.email, answers.office)
        team.push(manager)
        addAnother()
    })
}

function init() {
    managerQuestions()
}

init()


// when: (answers) => answers.employeeType === Employee.Intern,