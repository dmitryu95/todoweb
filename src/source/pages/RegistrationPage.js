import { observer } from "mobx-react-lite";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/RegistrationPage.css";
import { store } from "../stores/AuthStore";

const Registration = observer(() => {
	const navigate = useNavigate();

	const onClick = async () => {
		const page = await store.sendAuthDate(
			"Users", 
			"POST", 
			"registration")
			navigate(page)
	}
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
						onClick={onClick}
						>
						Accept
					</button>
					<Link to="/">
						<button type="button">Back to login</button>
					</Link>
				</div>
			</div>
		</form>
	)
	});

export { Registration };
