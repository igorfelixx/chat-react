import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../../services/firebase'
import * as C from './style'
import { useCollection } from 'react-firebase-hooks/firestore'
import SiderbarChatsItem from '../SiderbarChatsItem'

export default function SiderbarChat({ setUserChat, userChat }) {

    const [user] = useAuthState(auth)

    const refChat = db
        .collection("chats")
        .where("users", "array-contains", user.email);

    const [chatSnapshot] = useCollection(refChat);

    return (
        <C.Container>
            {chatSnapshot?.docs.map((item, index) => (
                <C.Content key={index}>
                    <SiderbarChatsItem
                        id={item.id} users={item.data().users}
                        user={user}
                        setUserChat={setUserChat}
                        active={userChat?.chatId === item.id ? "active" : ""}
                    />
                    <C.Divider />
                </C.Content>
            ))}
        </C.Container>
    )
}