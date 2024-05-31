import { useState } from 'react';
import { useChatRoom } from './useChatRoom.jsx'
import { showNotification } from './notifications';

export default function ChatRoom({ roomId }) {
    const [serverUrl, setServerUrl] = useState('https://localhost:1234');

    console.log("chatroom")
    useChatRoom({
        serverUrl: serverUrl,
        roomId: roomId,
        onReceiveMessage(msg) {
            showNotification('new message: ' + msg)
        }
    })

    return (
        <>
            <label>
                Server URL:
                <input value={serverUrl} onChange={e => setServerUrl(e.target.value)} />
            </label>
            <h1>Welcome to the {roomId} room!</h1>
        </>
    );
}

