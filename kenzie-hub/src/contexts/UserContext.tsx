import React, { createContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';
import api from "../services/api";
import { useNavigate } from "react-router-dom";

interface iUserContextProps {
    children: React.ReactNode;
}

interface iUserTechs {
    id?: string, 
    title: string,
    status: string   
}

interface iUserGetProfile {
    id: string | number,
    name: string,
    email: string,
    course_module: string,
    bio: string,
    contact: string | number,
    techs: iUserTechs[],
    works: [],
    created_at: string,
    updated_at: string,
    avatar_url: null
}

interface iUserLoginResponse {
    user: {
      id: string,
      name: string,
      email: string,
      course_module: string,
      bio: string,
      contact: string,
      created_at: string,
      updated_at: string,
      techs: [],
      works: [],
      avatar_url: null
    },
    token: string
  }

interface iUserLogin {
    email: string,
    password: string | number
}

interface iUserRegister {
    email: string,
    password: string | number,
    confirmpassword: string | number,
    name: string,
    bio: string,
    contact: string | number,
    course_module: string
}

interface iUserContext {
    user: iUserGetProfile | null;
    setUser: React.Dispatch<React.SetStateAction<iUserGetProfile | null>>;
    techs: iUserTechs[];
    setTechs: React.Dispatch<React.SetStateAction<iUserTechs[]>>;
    isLoged: boolean;
    setIsLoged: React.Dispatch<React.SetStateAction<boolean>>;
    Login: (data: iUserLogin) => void;
    Register: (data: iUserRegister) => void;
    loadUser: () => void;
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

export const UserProvider = ({children}: iUserContextProps) => {

    const navigate = useNavigate()
    
    const [user, setUser] = useState < iUserGetProfile | null >(null)

    const [techs, setTechs] = useState < iUserTechs[]> ([])

    const [isLoged, setIsLoged] = useState(false)

    async function loadUser () {
        const token = localStorage.getItem("@TOKEN")
        if (token) {
            try {
                api.defaults.headers.authorization = `Bearer ${token}`
                const { data } = await api.get<iUserGetProfile>('/profile')
                setUser(data)
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
                const { data } = await api.get<iUserGetProfile>('/profile')
                setUser(data)
                setTechs(data.techs)
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

    async function Login (data: iUserLogin) {
        await api 
        .post<iUserLoginResponse>("/sessions", data)
        .then((res) => {
            window.localStorage.clear()
            window.localStorage.setItem("@TOKEN", res.data.token)
            window.localStorage.setItem("@USERID", res.data.user.id)
            setUser(res.data.user)
            setTechs(res.data.user.techs)
            setIsLoged(true)
            toast("Sucesso total campeão!")
            navigate("./home")
        })
        .catch((err) => toast(err.response.data.message))
    }

    function Register (data: iUserRegister) {
        api
        .post<iUserRegister>("/users", data)
        .then((res) => {
            toast("Conta criada com sucesso!")
            navigate("/")
        })
        .catch((err) => toast(err.response.data.message[0]))
    }

    return (
        <UserContext.Provider value={{Login, user, setUser, Register, loadUser, techs, setTechs, isLoged, setIsLoged}}>
            {children}
        </UserContext.Provider>
    )

}