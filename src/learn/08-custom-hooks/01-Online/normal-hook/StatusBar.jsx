import { useState, useEffect } from 'react';

export default function StatusBar() {
    const [isOnline, setIsOnline] = useState(true);
    console.log("statusbar start ...")
    useEffect(() => {
        console.log("useffect start ...")
        function handleOnline() {
            console.log("handleonline ...")
            setIsOnline(true);
        }
        function handleOffline() {
            console.log("handleoffline ...")
            setIsOnline(false);
        }
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        console.log("useffect end ...")
        return () => {
            console.log("useeffect return ...")
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);
    console.log("statusbar end ...")

    return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}

