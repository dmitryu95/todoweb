import { Network } from "../components/Network";
import {action, makeObservable, observable} from 'mobx';
import { store } from "./AuthStore";

class NoteStore {
    constructor() {
        this.title = '';
        this.listOfItems = ["TEST"];
        this.statusItem = false;
        
            makeObservable(this, {
                title: observable,
                statusItem: observable,
                listOfItems: observable,
                addNewNote: action.bound,
                setTitle: action.bound, 
                setListOfItems: action.bound,
                changeStatus: action.bound,
                editItem: action.bound,
                delete: action.bound,
            })
    }
 
    setListOfItems() {
        Network('tasks?access_token=', store.token, 'GET')
        .then(result => {
            this.listOfItems = result
            console.log("проверка", this.listOfItems.map(item => item.title));
          })
    }

    setTitle(text) {
        this.title = text.target.value; 
    }

    addNewNote() {
        console.log("содержание в поле title", this.title);
    
        if(!this.title || this.title == '' || this.title == ' ') {
            // this.setListOfItems()
            alert("Поле с заметкой пустое")
        } else {
            Network('tasks?access_token=', store.token, 'POST', {title: this.title});
            setTimeout(this.setListOfItems, 200);
            this.title = ''
        }  
    }

    changeStatus(item) {
        if(item.done == true) {
            Network('tasks?access_token=', store.token, 'PUT', {
                title: item.title,
                id: item.id,
                done: false
            })
        } else {
            Network('tasks?access_token=', store.token, 'PUT', {
                title: item.title,
                id: item.id,
                done: true
            })
        }
        setTimeout(this.setListOfItems, 200);
        this.setListOfItems();
    }

    editItem(item) {
        this.title = prompt("Edit Note", item.title)
        Network('tasks?access_token=', store.token, 'PUT', {
            id: item.id,
            done: item.done,
            title: this.title})
        setTimeout(this.setListOfItems, 200);
        this.setListOfItems();
        this.title = ''
    }

    delete(id) {
        Network(`tasks/${id}?access_token=`, store.token, 'DELETE');
		setTimeout(this.setListOfItems, 200);
        this.setListOfItems()
    }
}

export const StoreTodo = new NoteStore();