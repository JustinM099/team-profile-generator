const fs = require('fs')
const inquirer = require('inquirer')
const generateHTML = require('./dist/generateHTML.js')

const questions = [
    {
        type: 'input',
        message: 'What is the the name of the team manager?',
        name: 'manager-name',
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
        name: 'manager-id',
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
        name: 'manager-email',
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
        name: 'manager-office-number',
        validate: (response) => {
            if (!response) {
                return console.log('This response is required.')
            } else {
                return true
            }
        }
    },
    {
        type: 'confirm',
        message: 'Would you like to add another team member',
        name: 'add-query',
        validate: (response) => {
            if (response === true) {
                //run add new employee questions here
            } else {
                //end the inquirer, generate HTML
            }
        }
    },
]

function init(){

}

init()