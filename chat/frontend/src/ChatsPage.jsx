/*
import { 
    MultiChatSocket, 
    MultiChatWindow, 
    useMultiChatLogic, 
    useSingleChatLogic } from 'react-chat-engine-advanced'




const ChatsPage = (props) => {
    const chatProps = 
    useMultiChatLogic(
        'f7a14044-4b1a-4df5-9a12-5fe70b4b7572',
        props.user.username, 
        props.user.secret
    );
    return (
        <div style={{height: '100vh'}}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{height: '100%'}} />

        </div>
    )
}

export default ChatsPage; 

*/

import { PrettyChatWindow } from 'react-chat-engine-pretty'




const ChatsPage = (props) => {
   
    return (
        <div style={{height: '100vh'}}>
            <PrettyChatWindow
                projectId='f7a14044-4b1a-4df5-9a12-5fe70b4b7572'
                username= {props.user.username}
                secret={props.user.secret}
                style={{height : '100%'}}
            />
        </div>
    )
}

export default ChatsPage; 