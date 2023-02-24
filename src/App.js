import { useState } from "react";
import NoteList from "./Components/NoteList";
import {nanoid} from 'nanoid'
import Search from "./Components/Search";
import Header from "./Components/Header";

function App() {
	const [noteText, setNoteText] = useState('');
	const [searchText, setSearchText] = useState('');
	// const [darkMode, setDarkMode] = useState(false);
	const [notes, setNote] = useState([
		// {
		// 	text: "This is text 1",
		// 	date: "13/01/2023",
		// 	id: nanoid()
		// }
	])
	

	function addNote(){
		// trim func space ni count krega starting ke
		if(noteText.trim().length > 0){

			const date = new Date().toDateString();
			
			setNoteText('');
			const newNote = {
				text: noteText,
				date: date,
				id: nanoid()
			}
			const updatedNotes = [...notes, newNote]
			setNote(updatedNotes)
		}
		else{
			alert('Add some text')
			setNoteText('');
		}
	}
	function handleNoteText(text){
		setNoteText(text);
	}
	function handleDeleteNote(id){
		// console.log(id);
		const updatedNotes = notes.filter(note => note.id != id)
		setNote(updatedNotes)
	}
	function handleSearchText(text){
		setSearchText(text);
		// console.log('Seach Text changed')
	}

	return (
		<div>
			<Header/>
			<Search searchText={searchText} handleSearchText={handleSearchText}/>
			<NoteList handleDeleteNote={handleDeleteNote} addNote={addNote} noteText={noteText} notes={notes.filter(note => note.text.includes(searchText))} handleNoteText={handleNoteText}/>
		</div>
	);
}

export default App;
