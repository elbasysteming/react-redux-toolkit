import React, { Fragment } from "react";
import { Nav, Titulo } from "./styles.js";
import { MdOutlineFormatListBulleted } from "../../components/Icons";

export const Navbar = () => {
    return (
        <Fragment>
            <Nav>
                <Titulo>
                    <MdOutlineFormatListBulleted size="30px" color="#db4c3f" />
                    Tudulist
                </Titulo>
            </Nav>
        </Fragment>
    );
};
