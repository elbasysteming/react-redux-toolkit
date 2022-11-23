import React, { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Modal } from "./components/Modal";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
    return (
        <Fragment>
            <ToastContainer autoClose={3000} hideProgressBar={true} />
            <Modal />
            <GlobalStyle />
            <Navbar />
            <Home />
        </Fragment>
    );
};
