import React from 'react'

export default function AddNote({ addNote, noteText, handleNoteText}) {
    
  return (
    <div className='note new-note'>
        <textarea onChange={(e) => handleNoteText(e.target.value)} value={noteText} name="" id="" cols="30" rows="10" maxLength={250} placeholder="Type something here....."></textarea>

        <div className="note-footer">
        <small className='remaining'>Remaining: {250 - noteText.length}</small>
            <button onClick={addNote} className="add-btn">Add</button>
        </div>
    </div>
  )
}
