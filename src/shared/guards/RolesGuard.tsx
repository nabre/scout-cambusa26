import { useAuthContext } from '#/contexts/AuthContexts';
import {User} from '#/types/authTypes';
import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthGuard from './AuthGuard';
import { arrayIntersect } from '#/utils';

interface Props {
    children: React.ReactNode;
    requiredRole?: string[];
}

const RolesGuard: React.FC<Props> = ({ children, requiredRole }) => {
    const { user  } = useAuthContext();
    
    if (requiredRole && user?.roles && !!requiredRole.length && !arrayIntersect(user?.roles, requiredRole).length) {
        return <Navigate to="/" replace />;
    }

    return <AuthGuard>{children}</AuthGuard>;
};

export default RolesGuard;