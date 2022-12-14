import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
`;

export const Background = styled.div`
    display: flex;
    height: 50vh;
    width: 20vw;
    flex-direction: column;

    justify-content: space-between;
    border-radius: 50px;
    background: #e0e0e0;
    box-shadow:  10px 10px 7px #bebebe,
                 -10px -10px 7px #ffffff;
`;

export const Login = styled.div`
    display: flex;
    width: 100%;
    background-color: #4285F4;
    color: white;
    border-radius: 50px 50px 0px 0px;
    padding: 25px;
    justify-content: center;
    letter-spacing: 0.1rem;
`;

export const Mid = styled.div`

width: 100%;
text-align: center;
display: flex;
align-items: center;
justify-content: center;

`;

export const Footer = styled.div`

text-align: center;
width: 100%;
margin-top: 1%;
background-color: gray;
border-radius: 50px;
padding: 25px;
border-radius: 0px 0px 50px 50px;
font-size: .7rem;

`;


export const Image = styled.img`

    background-color: #e0e0e0;
    border: 1px solid gray;
    border-radius: 5px 0px 0px 5px;
    width: 15%;
    padding: 10px;

`;


export const Button = styled.button`
    outline: none;
    border: none;
    border-radius: 0px 5px 5px 0px;
    font-size: 10px;
    padding: 14px 18px;
    width: 75%;
    cursor: pointer;
    background-color: #4285F4;
    color: white;
    text-transform: uppercase;
    font-weight: bolder;
    white-space: nowrap;
`;

