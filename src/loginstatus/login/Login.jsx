import React, { useState, useContext } from 'react';
import { UserContext } from '../context/Context';

function Login() {
    const [inputEmail, setInputEmail] = useState('');
    const { updateEmail } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateEmail(inputEmail);
        setInputEmail("")
    };



    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
                placeholder="Email"
            />
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;
