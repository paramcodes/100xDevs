import {RevenueCard} from "./components/RevenueCard.jsx";

function App() {

  return (
    <div className="grid grid-cols-3 gap-4">
      <RevenueCard title={"Amount pending"} amount={93312} orderCount={13}/>
      <RevenueCard title={"Amount Processed"} amount={2392312}/>
    </div>
  )
}

export default App
