import { useEffect } from 'react';
import { createConnection } from './chat.jsx';

export function useChatRoom({ serverUrl, roomId, onReceiveMessage }) {
    console.log("useChatRoom")
    useEffect(() => {
        console.log("useeffect")
        const options = {
            serverUrl: serverUrl,
            roomId: roomId
        };
        const connection = createConnection(options);
        connection.connect();
        connection.on('message', (msg) => {
            onReceiveMessage(msg)
        });
        return () => connection.disconnect();
    }, [roomId, serverUrl]);
}

