import { observer } from "mobx-react-lite";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/RegistrationPage.css";
import { store } from "../stores/AuthStore";

const Registration = observer(() => {
	const navigate = useNavigate();

	return (
		<form>
		<div className="RegistrationPage">
			<div className="RegistrationHeader">
			<p>Регистрация</p>
			</div>
			<div className="MainWindowRegistration">
			<div>
				<p>Enter your Email:</p>
				<input
				className="Input"
				type="text"
				value={store.email}
				onChange={store.setEmail}
				placeholder="Enter email..."
				/>
			</div>
			<div>
				<p>Enter your Password:</p>
				<input
				className="Input"
				type="text"
				value={store.password}
				onChange={store.setPassword}
				placeholder="Enter password..."
				/>
			</div>
			<button
				type="button"
				onClick={ async () => {
					const authResult = await store.sendAuthDate("Users", "POST", "registration")
					if (authResult) navigate("/ListPage");
            		else navigate("/errorPage");}
				}>
				Accept
			</button>
			
			<Link to="/">
				<button type="button">Back to login</button>
			</Link>
			</div>
		</div>
		</form>
	);
	});

export { Registration };
