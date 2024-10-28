import {useMemo, useState} from "react";

export const Assignment3 = () => {
    const [items, setItems] = useState([{
        name:'Chocolate',value:10
    },{
        name:'Chips',value:20
    },{
        name:'Onion',value:30
    },{
        name:'Tomato',value:40
    },]);

    const totalValue = useMemo(()=>{
        let ans = 0;
        items.forEach(item=>ans += item.value);
        return ans;
    },[items]);

    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} - Price: ${item.value}</li>
                ))}
            </ul>
            <p>Total Value: ${totalValue}</p>
        </div>
    )
}