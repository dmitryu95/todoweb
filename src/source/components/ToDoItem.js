import React from "react"
import { observer } from "mobx-react";
import { StoreTodo } from "../stores/NoteStore"

const ToDoItem  = observer(({item, key}) => {
    return(
		<div className="Item" style={{backgroundColor: item.done ? "hotpink" : "aquamarine"}}>
			<div className="TextItem" style={{resize: 'none'}}>
				{item.title}
			</div>
			<button 
				className="Button"
				type="button"
				onClick={() => StoreTodo.changeStatus(item)}
				>
				✓
				</button>
			<button 
				className="Button"
				type="button"
				onClick={() => StoreTodo.editItem(item)}
				>
				Edit
				</button>
			<button 
				className="Button"
				type="button" 
				onClick={() => StoreTodo.delete(item.id)}>
				X
			</button>
		</div>
    )
})

export default ToDoItem;