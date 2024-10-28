import {useEffect, useState} from "react";

function useIsOnline(){
    const [isOnline, setIsOnline] = useState(window.navigator.onLine);
    useEffect(() => {
        window.addEventListener('online', () => {
            setIsOnline(true);
        })
        window.addEventListener('offline',()=>{
            setIsOnline(false);
        })
    }, []);
    return isOnline;
}

export function Online() {

    const isOnline = useIsOnline();

    if(isOnline){
        return (
            <>
                Yay!! you are online
            </>
        )
    }

    return (
        <>
            you are offline, Please connect to the internet.
        </>
    )
}