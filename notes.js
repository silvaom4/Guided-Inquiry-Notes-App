//Welcome to New file
const fs = require('fs')
const chalk = require('chalk')
const { title } = require('process')





// arrow version ◊◊◊◊
const getNotes = () => {
    'Your Notes...'
}
// const getNotes = function() {
//     return 'Your Notes..'
// }


// arrow version ◊◊◊◊
const addNote = (title,body) => {
    const notes = loadNotes();
    //const duplicateNotes = notes.filter(note => note.title === title)// this searches entire array then returns result
    const duplicateNote = notes.find(note => note.title === title)// this stops once it finds result

    //if (duplicateNotes.length === 0) { original
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body,
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'));
    } else {
        console.log(chalk.red.inverse('Note title taken!'));
    }
}


// const addNote = function(title, body) {
//     const notes = loadNotes();
//     const duplicateNotes = notes.filter(note => note.title === title)
//     //note.title is already stored  while not is the new argument 
//     // const duplicateNotes = notes.filter (function (note) {
//     //     return note.title === title
//     // })
//     if (duplicateNotes.length === 0) {
//         notes.push({
//             title: title,
//             body: body,  
//           })

//         saveNotes(notes)
//         console.log(chalk.green.inverse('New note added'));
//     }  else {
//         console.log(chalk.red.inverse('Note title taken!'));
//     }
    
//     // console.log(notes);
  
// }


// const saveNotes = function (notes) { // saves notes to notes.json

//     const dataJSON = JSON.stringify(notes)
//     fs.writeFileSync('notes.json', dataJSON)

// }

//arrow version ◊◊◊◊
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
//console.log(saveNotes);
 

//arrow version ◊◊◊◊
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch (e) {
        return []

    }
}

// const loadNotes = function() { // loads notes from notes.json
//     // from binary -> string->object
//     try{
//         const dataBuffer = fs.readFileSync('notes.json')
//         const dataJSON = dataBuffer.toString();
//         return JSON.parse(dataJSON)
//     } catch (e) {
//         return []
//     }   
// }

// console.log(loadNotes());
// Challenge: Wire up removedNote 
// 1. load existing notes
// 2. use array filter method to remove thee matching note (if any)
// 3. save the newly created array 
// 4. test your work with a title that existss and title that doesn't exist


//arrow version ◊◊◊◊
const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter(note => note.title !== title)

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'));
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'));
    }
}

 const listNotes = () => {
    const notes = loadNotes()
    const titles = notes.forEach(note => {
        console.log(note.title)
        
    });
    //console.log(chalk.orange('Your notes: ') + 
    return titles
 }

//console.log(listNotes());
// GOAL: Wire up read command 

// 1. setup --title option for read command 
// 2. create readNote in notes.js
//     - search for note by title
//     - find note and print title (styled) and body (plain)
//     - no note found - print error in red 
// 3. have your command handler call the function 
// 4. test your work by running a couple commands 

//debugger


const readNote = (title) => {
    const notes = loadNotes();

    const findNote = notes.find(note => note.title === title)
 //findNote.body
    if (findNote) {
        console.log('Title: ' + chalk.cyan(findNote.title) + ' ' + 'Body: ' + findNote.body )
    } else {
        console.log(chalk.red('No note found'));
    }
}



module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
}
// const removeNote = function(title) {
//     //console.log(title);
//     const notes = loadNotes();
//     //const removedNotes = notes.filter(note => note.title === note)
//     const notesToKeep = notes.filter(function (note) {
//         return note.title !== title // return the ones that don't match title arguement 
//     })
//     //console.log(notesToKeep);
    
    
//     if (notes.length > notesToKeep.length) {
//         console.log(chalk.green.inverse('Note removed!'))
//         saveNotes(notesToKeep);
//     } else {
//         console.log(chalk.red.inverse('No note found!'));
//     }
// }

    // if (notesToKeep === true) {
    //     );
    // } else {
    //     
    // } 



    // if(removedNotes === 0) {
    //     console.log('This note does not exist!');
    // } else {
    //     notes.pop(title) 
    //     console.log(notes.pop() + ' had been removed')
    // }



    //      if (note.title === note) {
    //     console.log(`this '${title}' title exists and will be removed`)
    // } else {
    //     console.log(`this '${title}' title no exist`);
    // }

    // })

   




//module.exports = getNotes - to export one function
