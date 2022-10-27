import styled from "styled-components";

export const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    margin-top: 75px;
    color: white;

    img {
        width: 30%;
        max-width: 145px;
        margin-bottom: 1.5rem;
    }

    h1 {
        font-size: 15px;
        font-weight: 700;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 80%;
        align-items: center;
    }

    p {
        color: #F8F9FA;
        font-weight: 400;
        font-size: 12px;
    }

    input {
        width: 100%;
        height: 40px;
        border-radius: 3.20867px;
        background: #343B41;
        color: #868E96;
        border: none;

        :hover{border: 0.9772px solid #F8F9FA;}
    }

    form > div {
        width: 100%;
        display:flex;
        flex-direction: column;

    }

`

export const DivForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 369px;
    background-color: #212529;
    align-items: center;
    border-radius: 4px;
`

export const BtnCadastrar = styled.button`
    background: #868E96;
    border-radius: 4px;
    border: none;
    height: 40px;
    width: 80%;
    margin-bottom: 35px;
    color: white;
    font-weight: 500;
    font-size: 12.8347px;
    cursor: pointer;

    :hover {
        background-color: #343B41;
    }
`

export const BtnLogin = styled.button`
    background-color: #FF577F;
    border-radius: 4px;
    border: none;
    height: 40px;
    width: 100%;
    color: white;
    font-weight: 500;
    font-size: 12.8347px;
    margin-top: 1.5rem;
    margin-bottom:1rem;
    cursor: pointer;

    :hover {
        background-color: #59323F;
    }
`