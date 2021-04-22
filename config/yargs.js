const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const detail = {
    alias: "d",
    demand: "true",
    desc: "Pequeña descripcion de la terea a realizar",
};
const completed = {
    alias: "c",
    default: "true",
};
const argv = yargs(hideBin(process.argv))
    .command("create", "Agregar una tarea al todo", {
        detail,
    })
    .command("show", "Mostrar todas las tareas del todo", { completed })
    .command("update", "Actualizar el estado de una tarea", {
        detail,
        completed,
    })
    .command("delete", "Borrar una tarea de la lista de tareas...", {
        detail,
    })
    .help().argv;

module.exports = { argv };