import React from 'react'

export default function Header() {
  return (
    <div className='header'>
        <h1>React Notes App</h1>

        {/* universe io .com */}
        <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
        </label>
    </div>
  )
}
