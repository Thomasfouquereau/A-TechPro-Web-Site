import React from "react";
import Header from "./PageComponent/Header";
import PopUp from "../../../src/Component/PopUp/PopUp";
import Main from "./PageComponent/Main";

export default function Home() {
    return (
        <div>
            <Header />
            <PopUp />
            <Main />
        </div>
    );
}