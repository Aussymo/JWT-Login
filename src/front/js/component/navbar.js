import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory("");
	const logout = () => {
		sessionStorage.clear();
		history.push("/demo")
		location.reload();
		// setStore({ token: null })
	}
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					{!store.user ? (
						<Link to="/login">
							<button className="btn btn-primary">Login</button>
						</Link>
					) : (
						<button onClick={() => logout()} className="btn btn-primary">Logout</button>
					)}
				</div>
			</div>
		</nav>
	);
};
