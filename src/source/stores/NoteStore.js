import { Network } from "../components/Network";
import { action, makeObservable, observable } from "mobx";
import { store } from "./AuthStore";

class NoteStore {
  constructor() {
    this.title = "";
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
    });
  }

  async setListOfItems() {
    this.listOfItems = await Network("tasks?access_token=", store.token, "GET");
    console.log(
      "проверка",
      this.listOfItems.map((item) => item.title)
    );
  }

  setTitle(text) {
    this.title = text.target.value;
  }

  async addNewNote() {
    if (!this.title || this.title == "" || this.title == " ") {
      alert("Поле с заметкой пустое");
    } else {
      await Network("tasks?access_token=", store.token, "POST", {
        title: this.title,
      });
	  await this.setListOfItems();
      this.title = "";
    }
  }

  async changeStatus(item) {
    if (item.done == true) {
      await Network("tasks?access_token=", store.token, "PUT", {
        title: item.title,
        id: item.id,
        done: false,
      });
    } else {
      await Network("tasks?access_token=", store.token, "PUT", {
        title: item.title,
        id: item.id,
        done: true,
      });
    }
    await this.setListOfItems();
  }

  editItem(item) {
    this.title = prompt("Edit Note", item.title);
    Network("tasks?access_token=", store.token, "PUT", {
      id: item.id,
      done: item.done,
      title: this.title,
    });
    setTimeout(this.setListOfItems, 200);
    this.setListOfItems();
    this.title = "";
  }

  async delete(id) {
    await Network(`tasks/${id}?access_token=`, store.token, "DELETE");
    await this.setListOfItems();
  }
}

export const StoreTodo = new NoteStore();
