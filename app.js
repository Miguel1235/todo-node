const yargs = require("./config/yargs").argv;
const colors = require("colors");
const command = yargs._[0];
const { create, showTasks, update, deleteTask } = require("./todo/todo");

switch (command) {
    case "create":
        create(yargs.detail);
        break;
    case "update":
        update(yargs.detail, yargs.completed) ?
            console.log("Updated correctly") :
            console.log("Failed...probably the task doest exist");
        break;
    case "show":
        const tasks = showTasks(yargs.completed);
        console.log("====================TO-DO====================".green);
        for (const { completed, description }
            of tasks) {
            console.log(`${"Description:\t".bold} ${description}`);
            console.log(`${"Completed:\t".bold} ${completed}`);
        }
        console.log("=============================================".green);
        break;
    case "delete":
        deleteTask(yargs.detail);
        break;
    default:
        console.log("WTF");
        break;
}