import React from 'react'
import { auth, provider } from '../../services/firebase'
import * as C from './style'
import Image from '../../images/2991148.png'

export default function Login() {

    function handleSignin() {
        auth.signInWithPopup(provider).catch(alert)
    }

    return (
        <C.Container>
            <C.Background>
                <C.Login><h2>Login</h2></C.Login>
                <C.Mid>
                    <C.Image className='image' src={Image} width='35px' />
                    <C.Button onClick={handleSignin}>
                        <span>Logar com o Google</span>
                    </C.Button>
                </C.Mid>
                <C.Footer><strong><small>React chat app</small></strong></C.Footer>
            </C.Background>
        </C.Container>
    )

}