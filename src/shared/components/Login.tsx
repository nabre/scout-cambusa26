import React, { useState, FormEvent } from 'react';
import { useAuthContext } from '../contexts/AuthContexts';

const Login: React.FC = () => {
    const [email, setEmail] = useState('michel.brenna@edu.ti.ch');
    const [password, setPassword] = useState('N@bre86L');
    const { login,logout } = useAuthContext();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const success = await login({ email, password });
        if (success) {
            //   const { from } = location.state || { from: { pathname: "/" } };
            //history.replace(from);
        } else {
            alert('Login fallito. Riprova.');
        }
    };

    const handleLogout = () => {
        logout();
    };  

    return (<>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <button type="submit">Login</button>
        </form>
        <button onClick={handleLogout}>LOGOUT</button>
    </>

    );
};

export default Login;