import Logo from "../../assets/Logo.png"
import { ContainerForm, DivHeader, DivForm, DivNameInput} from "./style";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import  api  from "../../services/api"

function Register () {

    const navigate = useNavigate()

    const onSubmitFunction = (data) => {
        reset()

        api
        .post("/users", data)
        .then((res) => {
            console.log(res)
            toast("Conta criada com sucesso!")
            //navigate("/")
        })
        .catch((err) => toast(err.response.data.message[0]))
    }

    const formSchema = yup.object().shape({
        name: yup
            .string()
            .required("Nome Obrigatorio"),
        email: yup
            .string()
            .required("Email Obrigatorio")
            .email("Email invalido"),
        password: yup
            .string()
            .required("Senha obrigatoria")
            .matches(/(^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*_-])).{8,}$/, "Senha Invalida"),
        confirmpassword: yup
            .string()
            .oneOf([yup.ref('password')], 'Confirmação de senha errada'),
        bio: yup
            .string()
            .required("Bio Obrigatorio"),
        contact: yup
            .string()
            .required("Contato Obrigatorio"),
    })

    const { register, handleSubmit, formState:{ errors }, reset} = useForm({
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
                    <input type="text" id="name"{...register("name")}/>
                    {errors.name?.message}
                </DivNameInput>
                <DivNameInput>
                    <p>Email</p>
                    <input type="email" id="email"{...register("email")}/>
                    {errors.email?.message}
                </DivNameInput>
                <DivNameInput>
                    <p>Senha</p>
                    <input type="password" id="password" {...register("password")}/>
                    {errors.password?.message}
                </DivNameInput>
                <DivNameInput>
                    <p>Confirmar sua senha</p>
                    <input type="password" id="confirmpassword" {...register("confirmpassword")}/>
                    {errors.confirmpassword?.message}
                </DivNameInput>
                <DivNameInput>
                    <p>Bio</p>
                    <input type="text" id="bio" {...register("bio")}/>
                    {errors.bio?.message}
                </DivNameInput>
                <DivNameInput>
                    <p>Contato</p>
                    <input type="text" id="contact" {...register("contact")}/>
                    {errors.contact?.message}
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