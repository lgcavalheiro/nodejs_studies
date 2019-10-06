const name = require("./utils.js")
const chalk = require("chalk")
const validator = require("validator")
const notes = require("./notes.js")
const fs = require("fs")

fs.writeFileSync("Notes.txt", "Another text\n")
fs.appendFileSync("Notes.txt", "Yet some other string\n" 
                    + name + "\n")
const sum = name(4, 2)
console.log(sum)

console.log(notes)

console.log(validator.isEmail("name@exmp"))
console.log(validator.isURL("example.com.ca"))

console.log(chalk.green.bold.underline.inverse("Success!"))
console.log(chalk.red("Test red"))