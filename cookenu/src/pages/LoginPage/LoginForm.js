import React from "react";
import {InputsContainer}  from "./styled";
import useForm from "../../hooks/useForm";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {login} from "../../services/user";
import {useHistory} from "react-router-dom";



const LoginForm = ({setRightButtonText}) => {
    const [form, onChange, clear] = useForm({ email: "", password: "" })
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history, setRightButtonText)
    }

  

    return (
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
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
                        Fazer login
                    </Button>
                </form>

            </InputsContainer>
          
       
    )
}

export default LoginForm