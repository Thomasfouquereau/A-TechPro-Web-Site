import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import Close from "../../Img/CloseIcon.svg";

const PopUpWrapper = Styled.div`
    font-family: 'Poppins', sans-serif;
    position: fixed;
    top: 300px;
    left: 0;
    width: 600px;
    height: 200px;
    background: #1F0F85;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1000;
    border-radius: 0 10px 10px 0;
`;

const ButtonStyle = Styled.button`
    position: absolute;
    top: 4px;
    right: 4px;
    width: 50px;
    height: 50px;
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
`;

const Text = Styled.p`
    color: #fff;
    font-size: 1.2rem;
    margin-left: 1rem;
    margin-top: 0.5rem;
    width: 80%;
`;

const Button = Styled(Link)`
    font-family: 'Rubik 80s Fade', cursive;
    background-color: #fff;
    color: #080C21;
    width: 107px;
    text-decoration: none;
    padding: 10px 20px;
    margin: 0 1rem;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #080C21;
        color: #fff;
    }
`;


export default function PopUp() {
    const [show, setShow] = React.useState(true);
    function handleClick() {
        setShow(false);
    }
    return (
        <>
            {show ? (
                <PopUpWrapper >
                    <ButtonStyle onClick={handleClick} >
                        <img src={Close} alt="Close" />
                    </ButtonStyle>
                    <Text>À l’occasion des 40 ans de la mission locale un défi vous est proposé</Text>
                    <Button to="/defi">Participer</Button>
                </PopUpWrapper>
            ) : null}
        </>
    );
}