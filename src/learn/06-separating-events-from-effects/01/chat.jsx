export function sendMessage(message) {
    console.log('🔵 You sent: ' + message);
}

export function createConnection(serverUrl, roomId) {
    // 真正的实现实际上会连接到服务器
    return {
        connect() {
            console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
        },
        disconnect() {
            console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
        }
    };
}

