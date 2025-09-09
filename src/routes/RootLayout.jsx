import React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../components/Shared/MainHeader";
import Footer from "../components/Shared/Footer";

const RootLayout = () => {
    return (
        <div>
            <MainHeader />
            <Outlet />
            <Footer />
        </div>
    );
};

export default RootLayout;