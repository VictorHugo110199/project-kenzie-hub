import { ContainerDiv, DivForm, BtnCadastrar, BtnLogin} from "./style";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";

interface iLoginData {
    email: string,
    password: string | number
}

function Login () {

    const Logo = require("../../assets/Logo.png")

    const navigate = useNavigate()

    const {Login, setIsLoged} = useContext(UserContext)

    const onSubmitFunction = (data: iLoginData) => {
        reset()
        Login(data)
    }


    const formSchema = yup.object().shape({
        email: yup
            .string()
            .required("Email Obrigatorio")
            .email("Email invalido"),
        password: yup
            .string()
            .required("Senha obrigatoria"),
    })

    const { register, handleSubmit, formState:{ errors }, reset } = useForm<iLoginData>({
        resolver: yupResolver(formSchema)
    })

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN")
        if (token) {
            setIsLoged(true)
            navigate("/home")
        }
    }, []);

    return (
        <ContainerDiv>
            <img src={Logo} alt="Logo Kenzie Hub" />
            <DivForm>
                <form onSubmit={handleSubmit(onSubmitFunction)}>
                    <h2>Login</h2>
                    <div>
                        <p>E-mail</p>
                        <input type="email" placeholder='Digite seu email' {...register("email")}/>
                        {errors.email?.message}
                    </div>
                    <div>
                        <p>Senha</p>
                        <input type="password" placeholder='Digite sua senha' {...register("password")}/>
                        {errors.password?.message}
                    </div>
                    <BtnLogin type='submit'>Entrar</BtnLogin>
                </form>
                <p>Ainda não possui uma conta?</p>
                <BtnCadastrar onClick={() => navigate("./register")}>Cadastrar-se</BtnCadastrar>
            </DivForm>
        </ContainerDiv>
    )
}

export default Login;