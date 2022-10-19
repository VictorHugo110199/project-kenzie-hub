import { ContainerPage, Header, DivUserInfos, MainTechs, DivTechLevelDeletBtn, DivTechHeader } from "./style";
import Logo from "../../assets/Logo.png"
import { Navigate, useNavigate } from "react-router-dom";
import AddTechs from "../../assets/btnadd.png"
import deletTech from "../../assets/delet.png"
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import ModalTech from "../../components/ModalTech";

function Home () {

    const {user, techs, setTechs} = useContext(UserContext)

    const navigate = useNavigate()

    const name = (user.name)
    const module = (user.course_module)


    
    const [isModalOpen, setIsModalOpen] = useState(false)


    function LogOut () {
        window.localStorage.clear()
        navigate("/")
    }

    function handleTech (title) {
        

        const newTechs = techs.filter((elem) => {
            return elem.title !== title
        })
        setTechs(newTechs)
    }

    return (
        <>
            {
            user ?
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
                                                    onClick={() => handleTech(elem.title)} 
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