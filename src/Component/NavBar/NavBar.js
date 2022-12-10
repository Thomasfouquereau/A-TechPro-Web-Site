import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";

const NavWrapper = Styled.nav`
    position : absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
    z-index: 100;
`;

const NavLinks = Styled(Link) `
    color: #fff;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    margin: 0 1rem;
    margin-top: 3rem;
    font-size: 1.2rem;
    font-weight: bold;
`;

export default function NavBar() {
    return (
        <NavWrapper>
            <NavLinks to="/">Acceuil</NavLinks>
            <NavLinks to="/creation">Creation</NavLinks>
            <NavLinks to="/contact">Contact</NavLinks>
        </NavWrapper>
    );
}