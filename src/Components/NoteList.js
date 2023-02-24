import React from 'react'
import Note from './Note'
import {nanoid} from 'nanoid'
import AddNote from './AddNote'

//destructuring kar liya notes ko
export default function ({notes, noteText,addNote, handleNoteText, handleDeleteNote}) {
    
  return (
    <div className='notes-container'>
        <AddNote noteText={noteText} handleNoteText={handleNoteText} addNote={addNote}/>
        {   //javaScript
            notes.map(note => <Note handleDeleteNote={handleDeleteNote} key={note.id} note={note}/>)   
        }
    </div>
  )
}
