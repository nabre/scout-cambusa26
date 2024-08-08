import React from "react";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

interface MicroFrontendProps {
    path: string;
    label: string;
    exact: boolean | undefined;
    element: any;
}


const microFontendsProps: MicroFrontendProps[] = [
    /* {
         path: "/",
         label: "Home",
         exact: true,
         element: <></>//lazy(() => import('./routes.jsx')),
     }*/
]

export const microFrontendLinks = microFontendsProps.map(({ label, path }) => ({ path, label }))

export const RoutesApp: React.FC = () => (<Routes>{
    microFontendsProps.map(({ label, ...props }, index) => (
        <Route key={index} {...props} />
    ))
}

</Routes>)
