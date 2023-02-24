import React from 'react'
import {BsTrashFill} from 'react-icons/bs' //jo braces me first two char h wo hi ayenge / ke baad

export default function Note({note, handleDeleteNote}) {
  return (
    <div className='note'>
        <span>{note.text}</span>

        <div className="note-footer">
            <small className='date'>{note.date}</small>
            <button className="delete-btn" onClick={()=> handleDeleteNote(note.id)}>
                <BsTrashFill/> {/*react icons */}
            </button>
        </div>
    </div>
  )
}
