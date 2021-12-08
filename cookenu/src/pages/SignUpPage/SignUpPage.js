import React from "react";
import {ScreenContainer, LogoImagem} from "./styled";
import logo from "../../assets/logo.png";
import SignUpForm from "./SignUpForm"
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const SignUpPage = ({setRightButtonText}) => {
    useUnprotectedPage()
    return (
        <div>
             <ScreenContainer>
            <LogoImagem src={logo}/>
            <SignUpForm setRightButtonText={setRightButtonText}/>
            </ScreenContainer>
        </div>
    )
}

export default SignUpPage