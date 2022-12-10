import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import Style from "styled-components";
import Icon from "../../.././Img/ArrowIcon.svg";

const AnchorLink = Style(Link)`
    color: #080C21;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    margin: 0 1rem;
    margin-top: 3rem;
    font-size: 1.2rem;
    font-weight: bold;
`;

const IconStyle = Style.img`
    width: 20px;
    height: 20px;
    margin-left: 20px;
    padding-top : 5px;
`;

const Anchor = () => {
    return (
        <div>
            <AnchorLink to="/#about">
                En voir plus
                <IconStyle src={Icon} alt="Icon" />
            </AnchorLink>

        </div>
    );
}

export default Anchor;