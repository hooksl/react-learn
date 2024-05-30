import { useState, useEffect } from 'react';
import { createConnection } from './createConnection.jsx';

export default function ChatRoom() {
    useEffect(() => {
        const connection = createConnection();
        connection.connect();
        return () => connection.disconnect();
    }, []);
    return <h1>欢迎前来聊天！</h1>;
}

