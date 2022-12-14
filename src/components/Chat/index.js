import React from "react";
import ChatHeader from '../ChatHeader'
import ChatFooter from '../ChatFooter'
import ChatBody from '../ChatBody'
import Default from "../Default";

import * as C from './style'

export default function Chat({ userChat }) {
    if(!userChat) return <Default />
    
    return (
        <C.Container>
            <ChatHeader photoURL={userChat?.photoURL} name={userChat?.name} />
            <ChatBody chatId={userChat?.chatId} />
            <ChatFooter chatId={userChat?.chatId} />
        </C.Container>
    )
}