import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '#/contexts/AuthContexts';
import { UNAUTHORIZED_PAGE } from '#/constants/pathPages';
import { arrayIntersect } from '#/utils';
import AuthGuard from './AuthGuard';

interface Props {
    children: React.ReactNode;
    requiredRoles?: string[];
}

const RolesGuard: React.FC<Props> = ({ children, requiredRoles }) => {
    const { user } = useAuthContext();

    if (requiredRoles && user?.roles && !!requiredRoles.length && !arrayIntersect(user?.roles, requiredRoles).length) {
        return <Navigate to={UNAUTHORIZED_PAGE} replace />;
    }

    return <AuthGuard>{children}</AuthGuard>;
};

export default RolesGuard;