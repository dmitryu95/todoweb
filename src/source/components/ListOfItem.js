import { observer } from "mobx-react";
import React from "react"
import { StoreTodo } from "../stores/NoteStore"
import ToDoItem from "./ToDoItem";

const ListOfItems = observer(() => {
    return(
        // Общий контейнер (для определения ограничения расположения всех заметок)
        <div className="ContainerList"> 
        {/* Опрделение разположения по вертикали полей с заметками и кнопками */}
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
        // <div className="ContainerList">
        //         
        //  </div>
    )
})

export default ListOfItems;