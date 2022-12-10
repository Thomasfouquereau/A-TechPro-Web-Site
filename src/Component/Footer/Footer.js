import React from "react";
import Styled from "styled-components";
import FooterBG from "../.././Img/FooterBG.svg";

const FooterWrapper = Styled.footer`
    background-image: url(${FooterBG});
    height: 350px;
    margin-top:20px;
    font-family: 'Poppins', sans-serif;
`

const Container = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-decoration: none;
    margin-top: 1.5rem;
    transform: translate(0px, 135px);
`

const Lien = Styled.a`
    text-decoration: none;
    color: #080C21;
    font-size: 1rem;
    &:hover {
        color: #F5F5F5;
    }
`

const ListItems = Styled.li`
    list-style-type: none;
`
const List = Styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`

const Titre = Styled.h4`
    font-size: 1.2rem;
    color: #F5F5F5;
    text-decoration: none;
`

const Pargraphe = Styled.p`
    font-size: 1rem;
    text-decoration: none;
    padding: 0;
    margin: 0;
`

const ContainerStyle = Styled.div`
    margin: 0 1rem;
`

export default function Footer() {
    return (
        <FooterWrapper>
            <Container>
                <ContainerStyle>
                    <Titre>A-TechPro</Titre>
                    <Pargraphe>
                        Nous sommes une entreprise spécialisée dans la creation et la vente de site et app web de qualité.
                        <br />
                        Nous proposons une large gamme de creation de site pour tous les goûts et budgets.
                    </Pargraphe>
                </ContainerStyle>
                <ContainerStyle>
                    <Titre>Informations de contact</Titre>
                    <Pargraphe>Téléphone : 07 82 88 52 27</Pargraphe>
                    <Pargraphe>Email : a.techpro72@gmail.com</Pargraphe>
                </ContainerStyle>
                <ContainerStyle>
                    <Titre>Liens utiles</Titre>
                    <List>
                        <ListItems><Lien href="#">Conditions générales de vente</Lien></ListItems>
                        <ListItems><Lien href="#">Mentions légales</Lien></ListItems>
                    </List>
                </ContainerStyle>
                <ContainerStyle>
                    <Titre>Suivez-nous</Titre>
                    <List>
                        <ListItems><Lien href="https://www.facebook.com/profile.php?id=100086856986475">Facebook</Lien></ListItems>
                        <ListItems><Lien href="https://www.instagram.com/atechpro72/">Instagram</Lien></ListItems>
                    </List>
                </ContainerStyle>
            </Container>
        </FooterWrapper>
    );
}