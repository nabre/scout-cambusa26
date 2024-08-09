import { LANDING_PAGE } from '#/constants/pathPages';
import { useAuthContext } from '#/contexts/AuthContexts';
import React from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
    children: React.ReactNode;
}

const GuestGuard: React.FC<Props> = ({ children }) => {
    const { isAuthenticated } = useAuthContext();

    if (isAuthenticated) {
        return <Navigate to={LANDING_PAGE} replace />;
    }

    return <>{children}</>;
};

export default GuestGuard;