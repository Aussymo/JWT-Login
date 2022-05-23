import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useHistory } from "react-router-dom";


export const Login = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory("");

    const handleClick = (e) => {
        actions.login(email, password)
        e.preventDefault();
    };

    // if (store.token && store.token != "" && store.token != undefined) history.push("/");

    return (
        <div className="text-center mt-5">
            <h1>Login</h1>
            <div onSubmit={handleClick}>
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                <button onClick={handleClick}>Login</button>
                <button onClick={handleClick}>Register</button>
            </div>
        </div>
    );
};
