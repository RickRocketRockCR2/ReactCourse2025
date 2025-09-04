import React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../components/Shared/MainHeader";

const RootLayout = () => {
    return (
        <div>
            <MainHeader />
            <Outlet />
            {/* You can add a footer here */}
        </div>
    );
};

export default RootLayout;