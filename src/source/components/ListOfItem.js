import { observer } from "mobx-react";
import React from "react"
import { StoreTodo } from "../stores/NoteStore"
import ToDoItem from "./ToDoItem";

const ListOfItems = observer(() => {
    return(
        <div className="ContainerList"> 
            <div className="Note">
                {StoreTodo.listOfItems.map(item => {
                    return(
                        <ToDoItem 
                            item={item}
                            />
                    )
                })}
            </div>   
        </div>
    )
})

export default ListOfItems;