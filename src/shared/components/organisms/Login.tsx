import React, { useState, FormEvent } from 'react';
import { useAuthContext } from '#/contexts/AuthContexts';
import { useStoreValue } from '#/store/hooks/useStoreValue';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, logout } = useAuthContext();
    const { isAuthenticated } = useStoreValue('account');

    const handleSubmit = () => {
        const credentials = { email, password };
        login(credentials);
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