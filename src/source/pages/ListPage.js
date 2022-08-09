import { observer } from "mobx-react";
import React from "react"
import "../../styles/ListPage.css"
import { StoreTodo } from "../stores/NoteStore"
import { store } from "../stores/AuthStore"
import { Link } from "react-router-dom";
import ListOfItems from "../components/ListOfItem";

const ListPage = observer(() => {
	return(
		<div className="Container"> 
			<div className="Header">
				<p>
					Заметки
				</p>
			</div>
			<div className="AddNewNote">
				<input className="InputNewNote"
					type="text"
					value={StoreTodo.title}
					onChange={StoreTodo.setTitle}
					placeholder="Enter New Note"
				/>
				<button className="AddNoteButton"
					type="button" 
					onClick={() => StoreTodo.addNewNote()}> 
					Add
				</button>
			</div>
			<ListOfItems/>
				<Link to="/">
					<button 
						className="Logout"
						type="button"
						onClick={() => {
							store.sendAuthDate('Users/logout?', 'POST', '')}
						}>Logout
					</button> 
				</Link>
			</div>
		)
	})

export default ListPage;