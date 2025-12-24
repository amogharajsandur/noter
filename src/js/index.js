import "./../style.scss";

import Header from '../components/Header/Header';
import Main from '../components/Main/Main';

import savedNotes from "./../data/NotesData";

document.querySelector('#app').innerHTML = (
    `
        ${Header()}
        ${Main()}
    `
);

const newNote = document.getElementById("newNote");
const saveNote = document.getElementById("saveNote");
let notesList = document.getElementById("notesList");

saveNote.addEventListener("click", newNoteAppend);

function newNoteAppend() {
    console.log(newNote.value)
    savedNotes.push(newNote.value);
    notesRenderer();
}

function notesRenderer() {
    notesList.innerHTML += (
        `<li>${newNote.value}</li>`
    );
}