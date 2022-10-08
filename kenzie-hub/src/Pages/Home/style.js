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