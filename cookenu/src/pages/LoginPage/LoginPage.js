import React from "react";
import { ScreenContainer, LogoImagem,SignUpButtonContainer } from "./styled";
import LoginForm from "./LoginForm";
import logo from "../../assets/logo.png"
import Button from '@material-ui/core/Button'
import { useHistory } from "react-router";
import {goToSignUp} from "../../routes/coordinator"
import useUnprotectedPage from "../../hooks/useUnprotectedPage";


const LoginPage = ({ setRightButtonText}) => {
    useUnprotectedPage()
    const history = useHistory()
    return (
        <ScreenContainer>
            <LogoImagem src={logo} />
            <LoginForm  setRightButtonText={setRightButtonText}/>
            <SignUpButtonContainer>
            <Button
                        onClick={() => goToSignUp(history)}
                        type={"submit"}
                        variant="text"
                        fullWidth
                        margin={"normal"}
                    >
                        Não possui conta? Cadastre-se
                    </Button>

            </SignUpButtonContainer>
        </ScreenContainer>
    )
}

export default LoginPage