import { action, makeObservable, observable } from "mobx";
import { Network } from "../components/Network";
import { StoreTodo } from "./NoteStore";

class AuthStore {
	constructor() {
		this.email = "";
		this.password = "";
		this.response = "";
		this.token = "";
		this.id = "";
		makeObservable(this, {
			response: observable,
			email: observable,
			password: observable,
			token: observable,
			id: observable,
			setEmail: action.bound,
			setPassword: action.bound,
			delEmail: action.bound,
			delPassword: action.bound,
			delToken: action.bound,
			sendAuthDate: action.bound,
		});
	}

	setEmail(e) {
		this.email = e.target.value;
		console.log("email", this.email);
	}

	setPassword(e) {
		this.password = e.target.value;
		console.log("password", this.password);
	}

	delEmail() {
		this.email = "";
	}

	delPassword() {
		this.password = "";
	}

	delToken() {
		this.token = "";
	}

	async sendAuthDate(url, method, status) {
		if (this.email && this.password !== "") {
			try {
				const response = await Network(url, " ", method, {
					email: this.email,
					password: this.password,
					});
				if (response.id) {
					if ((status == "registration")) {
						this.response = await Network("Users/login", " ", "POST", {
						email: this.email,
						password: this.password,
						});
						this.token = this.response.id;
						this.id = this.response.userId;
					} else {
						this.response = response;
						this.token = response.id;
						this.id = response.userId;
					}
					StoreTodo.setListOfItems();
					alert("Пользователь авторизован: " + this.id);
					this.delEmail();
					this.delPassword();
					return "/ListPage";
				} else {
					alert("Ошибка, попробуте ввести повторно данные");
					return "/errorPage";
				}
			} catch (err) {
				console.log(err);
				return "/errorPage";
			}
		}
		if (url == "Users/logout?") {
			Network(url, "access_token=" + this.token, method);
			this.delToken();
		}
		return "/errorPage";
	}
}

export const store = new AuthStore();
