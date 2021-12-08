import React from "react";
import { InputsContainer } from "./styled";
import useForm from "../../hooks/useForm";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router-dom";
import { signUp } from "../../services/user";



const SignUpForm = ({setRightButtonText}) => {
    const history = useHistory()
    const [form, onChange, clear] = useForm({ name: "", email: "", password: "" })

    const onSubmitForm = (event) => {
        signUp(form, clear, history, setRightButtonText)
        event.preventDefault()

    }

    return (
        <form onSubmit={onSubmitForm}>
            <InputsContainer>
                <TextField
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    label={"Nome"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    autoFocus
                />

                <TextField
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label={"E-mail"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"email"}
                />
                <TextField
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label={"Senha"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"password"}

                />

                <Button
                    type={"submit"}
                    variant="contained"
                    fullWidth
                    margin={"normal"}
                >
                    Fazer Cadastro
                </Button>


            </InputsContainer>
        </form>


    )
}

export default SignUpForm