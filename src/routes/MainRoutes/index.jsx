import React from "react";
import { useRoutes, Outlet } from "react-router-dom";

export default function MainRoutes(props) {
    const routes = useRoutes([Outlet]);
    return <div className="">dd{routes}</div>;
}
