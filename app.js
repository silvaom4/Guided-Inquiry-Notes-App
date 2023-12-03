//const utils = require('./utils.js') same as below
//const name = require('./utils.js')

//const add = require('./utils.js')
//const sum = add(4,-2);


//const name = 'Oscar';


//console.log(utils); same as below
//console.log(name);
//console.log(add);
//console.log(sum);


// ** Challenge Two**
// 1. create a new file called notes.js
// 2. create getNotes function that returns 'Your notes...'
// 3. export getNotes function
// 4. from app.js, load in and call the function printing message 
//  to the console

// const validator =  require('validator')
// const fs = require('fs');
//fs.writeFileSync('notes.js', 'Welcome to New file')

// const getNotes = require('./notes.js')

// const msg = getNotes()

// console.log(msg);

// console.log(validator.isEmail('eexample.com'));

// console.log(validator.isURL('wwgoo,com'));
// console.log(validator.isURL('www.goo.com'));

//***Challenge 3 - Use the chalk library in your project*** 

// 1. intall newest version of chalk
// 2. load chalk into app.js
// 3.use it to print the string 'Success!' to the console in green
// 4. test your work 
// const chalk = require('chalk')

// console.log(chalk.green('Sucess!'));
// console.log(chalk.red('error!'));
// console.log(chalk.inverse.red('hello world'));
// console.log(chalk.bold.italic.inverse.magenta('Try again'));
// console.log(chalk.italic.inverse.magenta('Try again'));
//console.log(process.argv);
// console.log(process.argv[2]);// skips first two auto included strings

// const fs = require('fs');
// const yargs = require('yargs')
// const chalk = require('chalk')
// const getNotes = require('./notes.js');
// const { argv } = require('process');

//const command = process.argv[2]

// if the user who is running the app provided add
// runn the code necessary to add a note 
// if(command === 'add') {
//     console.log('adding note!');
// } else if(command === 'remove') {
//     console.log('Removing note!');
// }

//console.log(process.argv);

//Customize yargs version
// yargs.version('1.1.0')

// add, remove, read, list

//CREATE ADD COMMAND 

//** CHALLENGE - ADD AN OPTION TO YARGS */

// 1. setup a body optioon for the add command
// 2. configure a description, make it required, and for it to be a string 
// 3. load the boody valye in the handler function
// 4. test your work

const fs = require('fs');
const yargs = require('yargs')
const chalk = require('chalk')
const notes = require('./notes.js');
const { argv } = require('process');
yargs.version('1.1.0')

// GOAL: Refactor all functions 
// 1. if function is a METHODS, use ES6 method definition syntax
// 2. Otherwise, use the most concise arrow function possible
// 3. test your work

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
         title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
         },
         body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
         }
    },
    // arrow version ◊◊◊◊◊
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
    // handler: function (argv) {
    //     // console.log('Title: ' + argv.title); original
    //     // console.log('Body: ' + argv.body);
    //     notes.addNote(argv.title, argv.body)
    // }
})

yargs.command({
    command: 'soccer',
    describe: 'Notes regarding soccer',
    handler: function () {
        console.log('Adding a soccer note');
    }
})
yargs.command({
    command: 'yeti',
    describe: 'Notes for Yeti cups',
    handler: function () {
        console.log('Adding a Yeti cup note');
    }
})

// add, remove, read, list
// CHALLENGE: Setup command option and functioon 

// 1. setup the remove command to take a required "--title" option √√√
// 2. create and export a removeNote function from notes.js -- takes in title
// 3. have removeNote log the title of the note be be removed 
// 4. test your work using: node app.js remove --title="some title"

//CREATE REMOVE COMMAND 
yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    builder: {
        title: {
            describe: 'Removing note title',
            demandOption: true,
            type: 'string',
        }
    },
    // arrow version ◊◊◊◊
    handler(argv) {
        notes.removeNote(argv.title)
    }
    // handler: function(argv) {
    //     //console.log('Removing the note '); original
    //     notes.removeNote(argv.title)
    // }

})


// GOAL: Wire up list command 

// 1. Create and export listNotes from notes.js
//     --"Your notes" using chalk 
//     -- print note title for each note 
// 2. call listNotes from command handler 
// 3. test your work 

// CREATE LIST COMMAND 
yargs.command( {
    command: 'list',
    describe: 'List your notes',

    // arrow version ◊◊◊◊
    handler() {
        console.log(chalk.magenta('Listing out all notes'))
        notes.listNotes()
        
        // const listNotes = 
        // const listNotes = notes.listNotes.forEach(title => console.log(title.title))
        // notes.listNotes(argv.title)
    }


    // handler: function (){
    //     console.log('Listing out all notes');
    // }
})




// GOAL: Wire up read command 

// 1. setup --title option for read command 
// 2. create readNote in notes.js
//     - search for note by title
//     - find note and print title (styled) and body (plain)
//     - no note found - print error in red 
// 3. have your command handler call the function 
// 4. test your work by running a couple commands 


// CREATE READ COMMAND
yargs.command ({
    command: 'read',
    describe: 'Read a notes',
    builder: {
        title: {
            describe: 'Reading note title',
            demandOption: true,
            type: 'string',
        }
    },

    //arrow version 
    handler(argv) {
        //console.log('Reading a note');
        notes.readNote(argv.title)
    }

    // handler: function (){
    //     console.log('Reading a note');
    // }
})

// add, remove, read, list
// add, remove, read, list

yargs.parse()
//console.log(yargs.argv);