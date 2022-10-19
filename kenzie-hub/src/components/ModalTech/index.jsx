import { ModalDiv, DivHeaderForm, ModalPage, DivForm } from "./style.js"
import X from "../../assets/X.png"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import api from "../../services/api.js";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext.js";


function ModalTech ({setModalState}) {

    const { loadUser } = useContext(UserContext)


    const onSubmitFunction = (data) => {
        creatTech(data)
        setModalState(false)
        loadUser()
        reset()
        
    }
    
    async  function creatTech (data) {
        
        const token = localStorage.getItem("@TOKEN")
        if (token) {
    
            try {
                api.defaults.headers.authorization = `Bearer ${token}`
                const res = await api.post('/users/techs', data)
                console.log(res)
            } catch (error) {
                console.error(error)
            }
    
        }
    }
    
    const formSchema = yup.object().shape({
        title: yup
            .string()
            .required("Nome da tecnologia obrigatorio"),
    })

    const { register, handleSubmit, formState:{ errors }, reset} = useForm({
        resolver: yupResolver(formSchema)
    })


    return(
        <ModalPage>
            <ModalDiv>
                <DivHeaderForm>
                    <h2>Cadastrar Tecnologia</h2>
                    <img 
                        src={X} 
                        alt="Imagem de X" 
                        onClick={() => setModalState(false)}
                    />
                </DivHeaderForm>
                <DivForm>
                    <form onSubmit={handleSubmit(onSubmitFunction)}>
                        <div>
                            <p>Nome</p>
                            <input type="text" {...register("title")}/>
                            {errors.title?.message}
                        </div>
                        <div>
                            <p>Selecionar Status</p>
                            <select {...register("status")}>
                                <option value="Iniciante">Iniciante</option>
                                <option value="Intermediário">Intermediário</option>
                                <option value="Avançado">Avançado</option>
                            </select>
                        </div>
                        <button type="submit">Cadastrar Tecnologia</button>
                    </form>
                </DivForm>
            </ModalDiv>
        </ModalPage>
    )
}

export default ModalTech;