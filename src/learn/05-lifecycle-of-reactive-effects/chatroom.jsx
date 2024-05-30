import { useState, useEffect } from 'react';
import { createConnection } from './chat.jsx';

const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId }) {
    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return () => connection.disconnect();
    }, [roomId]);

    return <h1>欢迎来到 {roomId} 房间！</h1>;
}

export default function App() {
    const [roomId, setRoomId] = useState('general');
    return (
        <>
            <label>
                选择聊天室：{' '}
                <select
                    value={roomId}
                    onChange={e => setRoomId(e.target.value)}
                >
                    <option value="general">所有</option>
                    <option value="travel">旅游</option>
                    <option value="music">音乐</option>
                </select>
            </label>
            <hr />
            <ChatRoom roomId={roomId} />
        </>
    );
}

