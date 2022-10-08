import Logo from "../../assets/Logo.png"
import { ContainerForm, DivHeader, DivForm, DivNameInput} from "./style";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function Register () {

    const navigate = useNavigate()

    const onSubmitFunction = (data) => {
        console.log(data)
        axios
        .post("https://kenziehub.herokuapp.com/users", data)
        .then((res) => {
            toast("Conta criada com sucesso!")
            navigate("/")
        })
        .catch((err) => toast(err.response.data.message[0]))
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

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(formSchema)
    })

    return (
        <ContainerForm>
            <DivHeader>
                <img src={Logo} alt="Imagem da Logo KenzieHub" />
                <button onClick={() => navigate("/")}>Voltar</button>
            </DivHeader>
            <DivForm onSubmit={handleSubmit(onSubmitFunction)}>
                <h1>Crie sua conta</h1>
                <h4>Rapido e grátis, vamos nessa</h4>
                <DivNameInput>
                    <p>Nome</p>
                    <input type="text" {...register("name")}/>
                    {errors.email?.message}
                </DivNameInput>
                <DivNameInput>
                    <p>Email</p>
                    <input type="text" {...register("email")}/>
                    {errors.email?.message}
                </DivNameInput>
                <DivNameInput>
                    <p>Senha</p>
                    <input type="text" {...register("password")}/>
                    {errors.email?.message}
                </DivNameInput>
                <DivNameInput>
                    <p>Confirmar sua senha</p>
                    <input type="text" {...register("confirmpassword")}/>
                    {errors.email?.message}
                </DivNameInput>
                <DivNameInput>
                    <p>Bio</p>
                    <input type="text" {...register("bio")}/>
                    {errors.email?.message}
                </DivNameInput>
                <DivNameInput>
                    <p>Contato</p>
                    <input type="text" {...register("contact")}/>
                    {errors.email?.message}
                </DivNameInput>
                <DivNameInput>
                    <p>Selecionar modulo</p>
                    <select {...register("course_module")}>
                        <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                        <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                        <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                        <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
                    </select>
                </DivNameInput>
                <button type="submit">Cadastrar</button>
            </DivForm>
        </ContainerForm>
    )
}

export default Register;