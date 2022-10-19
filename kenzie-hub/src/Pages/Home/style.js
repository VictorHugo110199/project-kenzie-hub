import styled from "styled-components";

export const ContainerPage = styled.div`

`

export const Header = styled.div`
    border-bottom: 1px solid #212529;
    height: 73px;
    display: flex;
    justify-content: center;

    div {
        width: 90%;
        height: 100%;
        max-width: 750px;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    img {
        width: 35%;
        max-width: 145px;
        max-height: 20px;
    }

    button {
        background-color: #212529;
        color: white;
        font-size: 12px;
        width: 55.49px;
        height: 32px;
        border-radius: 4px;
        border: none;
    }
`

export const DivUserInfos = styled.div`
    border-bottom: 1px solid #212529;
    display: flex;
    justify-content: center;

    div {
        width: 90%;
        height: 100%;
        max-width: 750px;
    }

    h2 {
        color: #F8F9FA;
        font-weight: 700;
        font-size: 20px;
    }

    p {
        color: #868E96;
        font-weight: 400;
        font-size: 14px;
    }

    @media (min-width: 768px) {

        div {
            display: flex;
            justify-content: space-between;
        }
    }
`

export const MainTechs = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        cursor: pointer;
    }

    ul {
        list-style: none;
        padding-left: 0;
        display: flex;
        width: 90%;
        height: 100%;
        max-width: 750px;
        align-items: center;
        background: #212529;
        border-radius: 4px;
        justify-content: center;
        padding: 1rem 0;
        flex-direction: column;
        gap: 1rem;
    }

    li {
        width: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 48px;
        background-color: #121214;
        border-radius: 4px;
        padding: 0 12px;
        
        h3 {
            font-weight: 700;
            font-size: 14.21px;
        }

        p {
            color: #868E96;
            font-size: 10px;
        }

        :hover {
            background-color: #343B41;

            p {
                color: #F8F9FA;
            }
            
        }
    }

    @media (min-width: 768px) {
        li{
            width: 90%;
            padding: 0 16px;

            p {
                font-size: 12px;
            }
        }
    }

`

export const DivTechLevelDeletBtn = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const DivTechHeader = styled.div`
    display: flex;
    width: 90%;
    height: 100%;
    max-width: 750px;
    align-items: center;
    justify-content: space-between;
`