import React from 'react'
import * as C from './style'
import SiderbarHeader from '../SiderBarHeader/index'
import SiderbarChat from '../SiderBarChats/index'

export default function SideBar({ setUserChat, userChat }) {

    return (
        <C.Container>
            <SiderbarHeader setUserChat={setUserChat} />
            <SiderbarChat setUserChat={setUserChat} userChat={userChat} />
        </C.Container>
    )

}