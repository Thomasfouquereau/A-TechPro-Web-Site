import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import HeaderBG from "../.././Img/HeaderBG.svg";

//cette partie est le code qui permet de styliser le code

const DefiHeader = Styled.header`
    font-family: 'Poppins', sans-serif;
    background-image: url(${HeaderBG});
    height: 400px;
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Titre = Styled.h1`
   font-family: 'Rubik 80s Fade', cursive;
    font-size: 4rem;
    margin-bottom: 0.5rem,
    color: #080C21;
`;

const Description = Styled.p`
    font-size: 1rem;
    width: 30%;
    text-align: center;
    color: #080C21;
`

const MainStyle = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    margin: 0 1rem;
    height: calc(100vh - 400px - 374px);
`;

const Form = Styled.form`
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    margin: 0 1rem;
    width: 100%;
`;

const Label = Styled.label`
    font-size: 1.2rem;
    color: #080C21;
    text-decoration: none;
    padding: 0 1rem;
    margin: 0 1rem;
    margin-bottom: 0.6rem;
    text-align: left;
    display: flex;
    flex-direction: column;
`;

const Input = Styled.input`
    font-size: 1.2rem;
    color: #080C21;
    padding: 0 1rem;
    text-decoration: none;
    width: 300px;
    height: 40px;
    border-radius: 20px;
    margin: 0 1rem;
    margin-bottom: 0.6rem;
    text-align: left;
    display: flex;
    flex-direction: column;
`;

const NameOfInput = Styled.h2`
    font-size: 0.9rem;
    color: #080C21;
    background-color: #fff;
    transform: translate(35px, 20px);
    width: 150px;
    text-align: center;
`;

const Button = Styled.button`
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
    transition: all 0.2s ease-in-out;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #080C21;
    }
`;

//cette partie est le code qui permet de créer le formulaire

export default function Defi() {

    const [userName, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");

    const userNameChange = (e) => {
        setUserName(e.target.value);
    }
    const passwordChange = (e) => {
        setPassword(e.target.value);
    }

    //cette partie est le code qui permet de vérifier si les informations de connexion sont correctes

    function test() {
        if (userName === "A-TechPro" && password === "Admin123") {
            alert("Bravo vous avez réussi le défi");
        } else {
            alert("Vous n'avez pas réussi le défi");
        }
    }

    return (
        <div>
            <DefiHeader>
                <Titre>Testez la sécurité de ce formulaire</Titre>
                <Description>
                    Pour cela vous avez l'inspecteur d'element en appuyant sur F12 ensuite
                    cherchez le nom d’utilisateur et le mot de pass dans les fichiers pour
                    cela chercher un fichier [. Js] et regardez si les informations sont la.
                </Description>
            </DefiHeader>
            <MainStyle>
                <Form>
                    <Label>
                        <NameOfInput>Nom d'utilisateur</NameOfInput>
                        <Input type="text" name="name" onChange={userNameChange} />
                    </Label>
                    <Label>
                    <NameOfInput>Mot de passe</NameOfInput>
                        <Input type="password" name="name" onChange={passwordChange} />
                    </Label>
                    <Link to="/defi">
                        <Button type="submit" onClick={test}>
                            Valider
                        </Button>
                    </Link>
                </Form>
            </MainStyle>
        </div>
    );
}