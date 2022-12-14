import React from "react";
import * as C from './style'
import { MdMessage } from 'react-icons/md'

export default function Default() {

    return(
        <C.Container>
            <MdMessage />
            <C.Title>Chat App</C.Title>
            <C.Info>
                Agora você pode enviar e receber mensagens sem precisar manter seu celular conectado á internet.
            </C.Info>
        </C.Container>
    )
    
}