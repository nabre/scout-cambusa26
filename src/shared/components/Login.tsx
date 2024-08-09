import React, { useState, FormEvent } from 'react';
import { useAuthContext } from '../contexts/AuthContexts';
import { useStoreValue } from '#/store/hooks/useStoreValue';

const Login: React.FC = () => {
    const [email, setEmail] = useState('michel.brenna@edu.ti.ch');
    const [password, setPassword] = useState('N@bre86L');
    const { login, logout } = useAuthContext();
    const { isAuthenticated } = useStoreValue('account');

    const handleSubmit = () => {
        const credentials = { email, password };
        login(credentials);
        if (true) {
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
        {
            isAuthenticated ? <button onClick={handleLogout}>LOGOUT</button> : (<div>
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
                <button onClick={handleSubmit}>Login</button>
            </div>)
        }
    </>
    );
};

export default Login;