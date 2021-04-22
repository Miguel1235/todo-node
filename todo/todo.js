const { writeFile, readFile } = require("fs");

let todo_list = [];

const load = () => {
    try {
        todo_list = require("../db/data.json");
    } catch {
        todo_list = [];
    }
};

const save = () => {
    const data = JSON.stringify(todo_list);
    writeFile("db/data.json", data, (err) =>
        err ?
        console.log("Ups there was en error...", err) :
        console.log("Saved correctly")
    );
};

const create = (description) => {
    const todo = {
        description,
        completed: "false",
    };
    load();
    todo_list.push(todo);
    save();
    return todo;
};

const showTasks = (completed) => {
    load();
    if (completed === "true" || completed === "false") {
        const filtered_todo = todo_list.filter(
            (task) => task.completed === completed
        );
        return filtered_todo;
    } else {
        console.log("Only true and false options are valid for completed argument");
        return todo_list;
    }
};

const update = (description, completed) => {
    if (completed === "true" || completed === "false") {
        load();
        let updated = false;
        const task = todo_list.map((task) => {
            if (task.description.includes(description)) {
                task.completed = completed;
                updated = true;
            }
            return task;
        });
        if (updated) {
            todo_list = task;
            save();
            return true;
        } else {
            return false;
        }
    } else {
        console.log("Please insert a valid value for que task (true or false)");
    }
};

const deleteTask = (description) => {
    load();
    const new_todo_list = todo_list.filter(
        (task) => !task.description.includes(description)
    );
    if (todo_list.length > new_todo_list.length) {
        todo_list = new_todo_list;
        save();
        return true;
    } else {
        return false;
    }
};

module.exports = { create, showTasks, update, deleteTask };