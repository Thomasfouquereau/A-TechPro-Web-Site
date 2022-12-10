import React from "react";
import Background from "../.././Img/HeaderBG.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CreationHeader = styled.header`
    background-image: url(${Background});
    height: 200px;
    width: 100%;
    margin: 0;
`

const MainStyle = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    margin: 0 1rem;
    height: calc(100vh - 200px - 374px);
    font-family: 'Poppins', sans-serif;
`
const Button = styled(Link)`
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

const CreationPage = () => {
    return (
        <div>
            <CreationHeader>
            </CreationHeader>
            <MainStyle>
            <h1>Désolé, mais cette page web est en travaux.</h1>
            <p>Veuillez revenir plus tard pour voir les nouveaux changements. Nous vous remercions de votre patience.</p>
            <Button to="/" > Acceuil </Button>
            </MainStyle>
        </div>
    );
}

export default CreationPage;