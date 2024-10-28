import './App.css'
import {useState} from "react";
import {RecoilRoot, useRecoilState, useRecoilValue} from "recoil";
import {jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector} from "./atoms.js";

function App() {
  // const [myNetworkCount, setMyNetworkCount] = useState(0);
  // const [jobsCount, setJobsCount] = useState(0);
  // const [messagingCount, setMessagingCount] = useState(0);
  // const [notificationCount, setNotificationCount] = useState(0);

  return (
    <>
        <RecoilRoot>
            <MainApp/>
        </RecoilRoot>
    </>
  )
}

const MainApp = ()=>{
    const networkNotificationCount = useRecoilValue(networkAtom);
    const jobsCount = useRecoilValue(jobsAtom);
    const [messagingCount,setMessagingCount] = useRecoilState(messagingAtom);
    const notificationCount = useRecoilValue(notificationAtom);
    // const totalCount = networkNotificationCount + jobsCount + messagingCount + notificationCount;
    const totalCount = useRecoilValue(totalNotificationSelector);
    return (
        <div>
            <button>Home</button>

                <button>My Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
                <button>Jobs ({jobsCount === 0 ? "" : (jobsCount)})</button>
                <button>Messaging ({messagingCount === 0 ? "" : (messagingCount)})</button>
                <button>Notifications ({notificationCount})</button>

            <button onClick={()=>setMessagingCount(messagingCount+1)}>Me ({totalCount})</button>
        </div>
    )
}

export default App;
