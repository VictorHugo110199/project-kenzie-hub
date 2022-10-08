import Logo from "../../assets/Logo.png"
import { ContainerDiv, DivForm, BtnCadastrar, BtnLogin} from "./style";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


function Login ({setUser}) {

    const navigate = useNavigate()

    const onSubmitFunction = (data) => {
        reset()
        axios
        .post("https://kenziehub.herokuapp.com/sessions", data)
        .then((res) => {
            setUser(res.data)
            window.localStorage.clear()
            window.localStorage.setItem("@TOKEN", res.data.token)
            window.localStorage.setItem("@USERID", res.data.user.id)
            toast("Sucesso total campeão!")
            navigate("./home")
        })
        .catch((err) => toast(err.response.data.message))
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

    const { register, handleSubmit, formState:{ errors }, reset } = useForm({
        resolver: yupResolver(formSchema)
    })

    return (
        <ContainerDiv>
            <img src={Logo} alt="Logo Kenzie Hub" />
            <DivForm>
                <form onSubmit={handleSubmit(onSubmitFunction)}>
                    <h2>Login</h2>
                    <div>
                        <p>E-mail</p>
                        <input type="text" placeholder='Digite seu email' {...register("email")}/>
                        {errors.email?.message}
                    </div>
                    <div>
                        <p>Senha</p>
                        <input type="text" placeholder='Digite sua senha' {...register("password")}/>
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