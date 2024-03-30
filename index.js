#! usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
console.log("Welcome! Let's create your grocery list");
while (condition) {
    let Add = await inquirer.prompt([{ name: "todo", type: "input", message: "What you want add in your Grocery todos: " },
        { name: "confirm", type: "confirm", message: "Do you want to add more items: ", default: "false" },]);
    todos.push(Add.todo);
    condition = Add.confirm;
    console.log(todos);
}
