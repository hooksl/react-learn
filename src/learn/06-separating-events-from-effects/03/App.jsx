import { useState, useEffect } from 'react';
import { createConnection, sendMessage } from './chat.jsx';
import { showNotification } from './notifications.jsx';
// import { experimental_useEffectEvent as useEffectEvent } from 'react';

const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId, theme }) {
    // const onConnected = useEffectEvent(() => {
    //     showNotification('Connected!', theme);
    // });
    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.on('connected', () => {
            // onConnected()
            showNotification('Connected!', theme);
        });
        connection.connect();
        return () => connection.disconnect();
        // }, [roomId, theme]);  //由于 theme 也是一个依赖项,聊天 也会重连。这不是很好！
    }, [roomId]);

    return <h1>Welcome to the {roomId} room!</h1>
}

export default function App() {
    const [roomId, setRoomId] = useState('general');
    const [isDark, setIsDark] = useState(false);
    return (
        <>
            <label>
                Choose the chat room:{' '}
                <select
                    value={roomId}
                    onChange={e => setRoomId(e.target.value)}
                >
                    <option value="general">general</option>
                    <option value="travel">travel</option>
                    <option value="music">music</option>
                </select>
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={isDark}
                    onChange={e => setIsDark(e.target.checked)}
                />
                Use dark theme
            </label>
            <hr />
            <ChatRoom
                roomId={roomId}
                theme={isDark ? 'dark' : 'light'}
            />
        </>
    );
}

