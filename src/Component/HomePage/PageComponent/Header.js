import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import Anchor from "./Anchor";
import Background from "../../.././Img/HeaderBG.svg";

const HeaderWrapper = Styled.header`
    background-image: url(${Background});
    height: 861px;
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins', sans-serif;
`;

const TextWrapper = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    margin: 0 1rem;
    width: 40%;
`;

const Titre = Styled.h1`
    font-size: 3rem;
    color: #080C21;
    text-decoration: none;
    font-weight: bold;
    padding: 0 1rem;
    height: 100%;
    margin: 0 1rem;
    margin-bottom: 0.6rem;
    text-align: center;
`;

const Description = Styled.p`
    font-size: 1.2rem;
    color: #080C21;
    text-decoration: none;
    padding: 0 1rem;
    width: 70%;
    margin: 0 1rem;
    text-align: center;
    font-weight: 300;
`;

const LinkWrapper = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    margin: 0 1rem;
    margin-top: 1.5rem;
`;

const Button = Styled(Link)`
    background-color: #080C21;
    color: #fff;
    text-decoration: none;
    padding: 10px 20px;
    margin: 0 1rem;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    &:hover {
        transition: all 0.4s ease-in-out;
        background: #fff;
        color: #080C21;
    }
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <TextWrapper>
                <Titre>Votre site a votre image </Titre>
                <Description>
                    Découvrez des sites Web à la pointe de la technologie pour améliorer votre entreprise.
                    Faites votre choix parmi notre large sélection de sites web professionnels!
                </Description>
            </TextWrapper>
            <LinkWrapper>
                <Button to="/contact">Contactez-nous</Button>
                <Anchor />
            </LinkWrapper>
        </HeaderWrapper>
    );
}

export default Header;