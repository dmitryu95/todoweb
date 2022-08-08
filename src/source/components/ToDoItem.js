import React from "react"
import { observer } from "mobx-react";
import { StoreTodo } from "../stores/NoteStore"

const ToDoItem  = observer(({item, key}) => {
    // console.log(" Список", StoreTodo.listOfItems.map(item => item.title));
 
    return(
            <div className="Item" style={{backgroundColor: item.done ? "hotpink" : "aquamarine"}}>
                {/* Определение всей ширны полей (заметки + 2 кнопки) */}
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

// console.log("Опааааааааа", item)
//     return(
       
//         <div className="ContainerList">
//             <div className="Note">
            
//                 <button title="тестовая заметка" className="TextNote">
//                 {item}
                    
//                 </button>
                
//                 <button className="Edit">
//                     Edit
//                 </button>

//                 <button className="Delete">
//                     X
//                 </button>
//             </div>   
//         </div>
        
//     )