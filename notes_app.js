//const name = require("./utils.js")
const chalk = require("chalk")
const validator = require("validator")
const notes = require("./notes.js")
const fs = require("fs")
const yargs = require("yargs")

yargs.version("1.2.3")

yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }, 
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string"
        }
    },
    handler: function (argv) {
        console.log("Added note", argv)
    }
})

yargs.command({
    command: "remove",
    describe: "Removes a note",
    handler: function () {
        console.log("Removed note")
    }
})

yargs.command({
    command: "list",
    describe: "Lists all notes",
    handler: function () {
        console.log("Listed notes")
    }
})

yargs.command({
    command: "read",
    describe: "Read a note",
    handler: function () {
        console.log("Reading note")
    }
})

yargs.parse()