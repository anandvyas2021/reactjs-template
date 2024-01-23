import React from "react";
import NavbarContent from "./NavbarContent";

const Navbar = (props) => {
    return (
        <header className="">
            <NavbarContent {...props} />
        </header>
    );
};

export default Navbar;
