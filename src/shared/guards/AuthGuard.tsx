import { LOGIN_PAGE } from '#/constants/pathPages';
import { useAuthContext } from '#/contexts/AuthContexts';
import React from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
    children: React.ReactNode;
    requiredRole?: string[];
}

const AuthGuard: React.FC<Props> = ({ children, requiredRole }) => {
    const { isAuthenticated } = useAuthContext();

    if (!isAuthenticated) {
        return <Navigate to={LOGIN_PAGE} replace />;
    }

    return <>{children}</>;
};

export default AuthGuard;