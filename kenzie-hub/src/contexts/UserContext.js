import { createContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const UserProvider = ({children}) => {

    const navigate = useNavigate()
    
    const [user, setUser] = useState({})

    const [techs, setTechs] = useState(user.techs)

    const [isLoged, setIsLoged] = useState(false)

    async function loadUser () {
        const token = localStorage.getItem("@TOKEN")
        if (token) {
            try {
                api.defaults.headers.authorization = `Bearer ${token}`
                const { data } = await api.get('/profile')
                
                setTechs(data.techs)
            } catch (error) {
                console.error(error)
            }
        }
    }

    async function autoLogin () {
        const token = localStorage.getItem("@TOKEN")
        if (token) {
            try {
                api.defaults.headers.authorization = `Bearer ${token}`
                const { data } = await api.get('/profile')
                
                setUser(data)
            } catch (error) {
                console.error(error)
                navigate("/")
            }
        }
    }
    

    useEffect(() => {
        autoLogin()
    }, []);
    
    useEffect(() => {
        loadUser()
    }, [user]);

    async function Login (data) {
        await api
        .post("/sessions", data)
        .then((res) => {
            window.localStorage.clear()
            window.localStorage.setItem("@TOKEN", res.data.token)
            window.localStorage.setItem("@USERID", res.data.user.id)
            setUser(res.data.user)
            setIsLoged(true)
            toast("Sucesso total campeão!")
            navigate("./home")
        })
        .catch((err) => toast(err.response.data.message))
    }

    function Register (data) {
        api
        .post("/users", data)
        .then((res) => {
            toast("Conta criada com sucesso!")
            navigate("/")
        })
        .catch((err) => toast(err.response.data.message[0]))
    }

    return (
        <UserContext.Provider value={{Login, user, setUser, Register, loadUser, techs, setTechs, isLoged}}>
            {children}
        </UserContext.Provider>
    )

}