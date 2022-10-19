import { ContainerPage, Header, DivUserInfos, MainTechs, DivTechLevelDeletBtn, DivTechHeader } from "./style";
import Logo from "../../assets/Logo.png"
import { Navigate, useNavigate } from "react-router-dom";
import AddTechs from "../../assets/btnadd.png"
import deletTech from "../../assets/delet.png"
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import ModalTech from "../../components/ModalTech";
import api from "../../services/api";

function Home () {

    const {user, techs, setTechs, isLoged, setIsLoged} = useContext(UserContext)

    const navigate = useNavigate()

    const name = (user.name)
    const module = (user.course_module)


    
    const [isModalOpen, setIsModalOpen] = useState(false)


    function LogOut () {
        window.localStorage.clear()
        navigate("/")
    }

    async function handleTech (id) {
        const token = localStorage.getItem("@TOKEN")
        if (token) {
    
            try {
                api.defaults.headers.authorization = `Bearer ${token}`
                await api.delete(`/users/techs/${id}`)
            } catch (error) {
                console.error(error)
            }
    
        }

        const newTechs = techs.filter((elem) => {
            return elem.id !== id
        })
        setTechs(newTechs)
    }

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN")
        if (token) {
            setIsLoged(true)
            navigate("/home")
        }
    }, []);

    return (
        <>
            {
            isLoged ?
                (<ContainerPage>
                    {
                        isModalOpen &&
                            <ModalTech  
                                setModalState={setIsModalOpen}
                                techs={techs}
                                setTechs={setTechs}
                            >

                            </ModalTech>
                    }
                    <Header>
                        <div>
                            <img src={Logo} alt="Logo kenziehub" />
                            <button onClick={() => LogOut()}>Sair</button>
                        </div>
                    </Header>
                    <DivUserInfos>
                        <div>
                            <h2>Olá, {name}</h2>
                            <p>{module}</p>
                        </div>
                    </DivUserInfos>
                    <MainTechs>
                        <DivTechHeader>
                            <h2>Tecnologias</h2>
                            <img 
                                src={AddTechs} 
                                alt="Imagem de botão de mais" 
                                onClick={() => setIsModalOpen(true)}
                            />
                        </DivTechHeader>
                        <ul>
                            {
                                techs?.map((elem) => {
                                    return (
                                        <li key={elem.id}>
                                            <h3>
                                                {elem.title}
                                            </h3>
                                            <DivTechLevelDeletBtn>
                                                <p>
                                                    {elem.status}
                                                </p>
                                                <img 
                                                    src={deletTech} 
                                                    alt="Imagem de lixeira" 
                                                    onClick={() => handleTech(elem.id)} 
                                                />
                                            </DivTechLevelDeletBtn>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </MainTechs>
                </ContainerPage>)
            : < Navigate to="/" replace />
            }
        </>
    )
}

export default Home;