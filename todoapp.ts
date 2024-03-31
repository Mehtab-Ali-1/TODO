#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;

while ( condition){
    let add = await inquirer.prompt([{
        name : `todos`,
        type : `input`,
        message : `What you want to add in your todays?`

    },{
        name: `addmore`,
        type: `confirm`,
        message: `Do you want to add more?`,
        default: `false`
    }
])
todos.push(add.todos);
condition= add.addmore
console.log(todos)
}