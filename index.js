const fs = require('fs')
const inquirer = require('inquirer')
const generateHTML = require('./dist/generateHTML.js')

const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
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
        message: 'What is the title of your project?',
        name: 'title',
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
        message: 'What is the title of your project?',
        name: 'title',
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
        message: 'What is the title of your project?',
        name: 'title',
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
        message: 'What is the title of your project?',
        name: 'title',
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
        message: 'What is the title of your project?',
        name: 'title',
        validate: (response) => {
            if (!response) {
                return console.log('This response is required.')
            } else {
                return true
            }
        }
    },
]

function init(){

}

init()