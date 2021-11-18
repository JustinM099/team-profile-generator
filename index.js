const fs = require('fs')
const inquirer = require('inquirer')
// const generateHTML = require('./dist/generateHTML.js')
const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')
const Employee = require('./lib/Employee.js')

let team = []
let cardString = ''
let memberRole = ''

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
        message: 'What is the name of the intern?',
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
        message: 'What is the ID of the intern?',
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
        message: 'What is the email address of the intern?',
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
        if (response.addQuery == true) {
            employeeType()
        } else {
            console.log(team)
            createCards(team)
            writeToFile('yourHTML.html', generateHtml(cardString))
        }
    }

    )
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
        if (response.type === 'Engineer') {
            engineerQuestions()
        } else if (response.type === 'Intern') {
            internQuestions()
        } else {
            console.log(team)
            createCards(team)
            writeToFile('yourHTML.html', generateHtml(cardString))
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
        team.push(intern)
        addAnother()
    })
}

const managerQuestions = () => {
    inquirer.prompt(managerQs).then((answers) => {
        var manager = new Manager(answers.name, answers.id, answers.email, answers.office)
        team.push(manager)
        addAnother()
    })
}

const createCards = (team) => {
    let cards = []
    team.forEach((member) => {
        console.log(member.getRole())
        switch(member.getRole()){
            case 'Manager':
                memberRole = `Office ${member.office}`
                break
            case 'Engineer':
                memberRole = `Github: ${member.github}`
                break
            case 'Intern':
                memberRole = `School: ${member.school}`
                break
        }
        let memberCard = `<div class='card'><h1>${member.name}</h1><h3>${member.getRole()}</h3><h3>${member.id}</h3><h3>${member.email}</h3><h3>${memberRole}`
        cards.push(memberCard)
        })
    cardString = cards.join("")
    console.log(cardString) 
    return cardString
}

// const showCards = (createCards) => {
//     let cardsArray = []
//     createCards.forEach((card) => {
//         cardsArray.push(card)
//     })
//     return cardsArray.join("")
// }

const writeToFile = (fileName, data) => {

    fs.writeFile(`${fileName}`, data, (err) =>
    err ? console.error('Error! : ' + err) : console.log('Your HTML has been successfully generated!'))
}

function generateHtml(cards) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" 
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Team Profile Generator</title>
</head>
<body>
    <div class="container">
        
    ${cards}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" 
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>`
}

function init() {
    managerQuestions()
}

init()


// function generateHtml(team) {
//     // var cards = []
//     // for (let i = 0; i < team.length; i++) {
//     //     var card = ``
//     //     cards.push(card)
//     // }
//     return `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" 
//     integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
//     <title>Team Profile Generator</title>
// </head>
// <body>
//     <div class="container">
        
//     ${showCards(team)}
//     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" 
//     integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
// </body>
// </html>`
// }


// when: (answers) => answers.employeeType === Employee.Intern,

// function writeToFile(fileName, data) {
//     fs.writeFile(`${fileName}`, data, (err) =>
//         err ? console.error('Error! : ' + err) : console.log('Your README has been successfully generated!'))
// }

// function init() {
//     inquirer.prompt(questions).then((data) => writeToFile('yourREADME.md', generateMarkdown(data)))