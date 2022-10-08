import { ContainerPage, Header, DivUserInfos } from "./style";
import Logo from "../../assets/Logo.png"
import { useNavigate } from "react-router-dom";

function Home ({user}) {

    const navigate = useNavigate()

    const name = (user.user.name)
    const module = (user.user.course_module)

    return (
        <ContainerPage>
            <Header>
                <div>
                    <img src={Logo} alt="Logo kenziehub" />
                    <button onClick={() =>  navigate("/")}>Sair</button>
                </div>
            </Header>
            <DivUserInfos>
                <div>
                    <h2>Olá, {name}</h2>
                    <p>{module}</p>
                </div>
            </DivUserInfos>
        </ContainerPage>
    )
}

export default Home;