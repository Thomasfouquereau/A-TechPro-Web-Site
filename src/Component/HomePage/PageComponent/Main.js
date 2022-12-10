import React from "react";
import Styled from "styled-components";
import ImgMobile from "../../.././Img/undraw_develop_app_re_bi4i.svg";
import ImgDesktop from "../../.././Img/undraw_in_sync_re_jlqd.svg";
import ImgAccessiblity from "../../.././Img/undraw_web_browsing_p-77-h.svg";
import ImgCoupure from "../../.././Img/StopViolet.svg";
import ImgCoupure1 from "../../.././Img/StopJ.svg";

const MainWrapper = Styled.main`
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;fd
    width:100%;
`;

const ContainerStyle = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around; 
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    margin: 0 1rem;
    margin-top: 1.5rem;
`;

const TextStyle = Styled.p`
    font-size: 1.2rem;
    color: #080C21;
    text-decoration: none;
    padding: 0 1rem;
    width: 50%;
    margin: 0 1rem;
    text-align: left;
`;

const ImgUndraw = Styled.img`
    width: 30%;
    margin: 0 1rem;
    margin-top: 1.5rem;
`

const ImgMobileStyle = Styled.img`
    width: 20%;
    margin: 0 1rem;
    margin-top: 1.5rem;
`

const ImgStop = Styled.div`
    background-image: url(${ImgCoupure});
    background-repeat: no-repeat;
    width: 101.1%;
    height: 300px;
    transform: translate(-15px,0px);
`

const ImgStop1 = Styled.div`
    background-image: url(${ImgCoupure1});
    background-repeat: no-repeat;
    width: 101.1%;
    height: 300px;
    margin: 0;
    transform: translate(-15px,70px);
`

export default function Main() {
    return (
        <MainWrapper id= "about">
            <ContainerStyle>
                <ImgMobileStyle src={ImgMobile} alt="imgMobile" />
                <TextStyle>
                    La création d'un site web pour mobile est une étape importante pour les entreprises
                    qui souhaitent étendre leur présence sur le Web. En effet, le nombre de personnes
                    utilisant leur téléphone mobile pour naviguer sur Internet ne cesse de croître,
                    ce qui signifie qu'il est essentiel que les entreprises soient présentes sur
                    le Web mobile.
                </TextStyle>
            </ContainerStyle>
            <ImgStop />
            <ContainerStyle>
                <TextStyle>
                    Le développement d'un site web pour tablette et PC nécessite une bonne compréhension
                    des caractéristiques et des fonctionnalités de chaque plateforme. Pour les tablettes,
                    le site web doit être spécialement conçu pour s'adapter à la taille plus grande des
                    écrans et à la navigation tactile. Pour les ordinateurs, le site web doit
                    capable de s'adapter à différentes résolutions d'écran et doit offrir une
                    expérience optimale sur tous les navigateurs.
                </TextStyle>
                <ImgUndraw src={ImgDesktop} alt="imgMobile" />
            </ContainerStyle>
            <ImgStop1 />
            <ContainerStyle>
                <ImgUndraw src={ImgAccessiblity} alt="imgMobile" />
                <TextStyle>
                    L'accessibilité des sites web est extrêmement importante car elle garantit que
                    les utilisateurs de tous les niveaux de capacités et de mobilité puissent naviguer
                    et interagir avec un site web. Cela signifie que les sites web doivent être conçus
                    avec des technologies et des conceptions accessibles, et qu'ils doivent offrir des
                    alternatives adéquates aux utilisateurs qui n'ont pas accès aux fonctionnalités
                    principales du site web.
                </TextStyle>
            </ContainerStyle>
        </MainWrapper>
    );
}