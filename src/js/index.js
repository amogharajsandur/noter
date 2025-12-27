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

const newNote = document.getElementById("new-note");
const saveNote = document.getElementById("save-note");
let notesList = document.getElementById("notes-list");

saveNote.addEventListener("click", newNoteAppend);

function newNoteAppend() {
    let entity =  newNote.value;
    // This if conditional checks if there's anything in the note to save.
    if (entity) {
        savedNotes.push(entity);
        notesRenderer();
    }
}

function notesRenderer() {
    if (savedNotes && savedNotes.length > 0) {
        notesList.innerHTML = savedNotes.map(note => {
            return (
                `<li id=${savedNotes.indexOf(note)} >
                    <article>
                        <small>#${savedNotes.indexOf(note)}</small>
                        <p>${note}</p>
                        <small>Date Created. ${Date()}</small>
                    </article>
                </li>`
                // `<li id=${savedNotes.indexOf(note)} >${note}</li>`
            );
        }).join("");
    } else {
        notesList.innerHTML = (
            `<p>Your notes is empty.</p>`
        );
    }

    newNote.value = "";
}

notesRenderer();