import styled from "styled-components";

export const ModalPage = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalDiv = styled.div`
    width: 90%;
    max-width: 370px;
    align-items: center;

`

export const DivHeaderForm = styled.div`
    width: 100%;
    height: 50px;
    background-color: #343B41;
    border-radius: 4px 4px 0px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    
    h2 {
        font-weight: 700;
        font-size: 16px;
        color: #F8F9FA;
        margin-left: 5%;
    }

    img {
        margin-right: 5%;
        cursor: pointer;
    }
`

export const DivForm = styled.div`

    background-color: #212529;
    border-radius: 0 0 4px 4px;
    padding: 1rem;

    input {
        width: 100%;
        height: 40px;
        background-color: #343B41;
        border-radius: 4px;
        border: 1px solid white;
        color: white;
    }       

    select {
        width: 100%;
        height: 40px;
        background-color: #343B41;
        border-radius: 4px;
        border: 1px solid white;
        color: white;
    }

    button {
        width: 100%;
        height: 40px;
        background-color: #FF577F;
        border-radius: 4px;
        border: none;
        margin-top: 1rem;
        color:white;
        cursor: pointer;
    }

    p {
        color: #F8F9FA;
        font-weight: 400;
        font-size: 12.182px;
    }
`