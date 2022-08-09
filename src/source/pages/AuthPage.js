import { observer } from "mobx-react";
import React from "react";
import "../../styles/RegistrationPage.css";
import { store } from "../stores/AuthStore";
import { Link, useNavigate } from "react-router-dom";

const Auth = observer(() => {
	const navigate = useNavigate();

	const onClick = async () => {
		const page = await store.sendAuthDate(
			"Users/login",
			"POST",
			"")
			navigate(page)
	}
	return (
		<form>
			<div className="RegistrationPage">
				<div className="RegistrationHeader">
					<p>Авторизация</p>
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
						onClick={onClick}
						>
						Accept
					</button>
					<Link to="/registration">
						<button type="button">Registration</button>
					</Link>
				</div>
			</div>
		</form>
	);
});

export default Auth;
