import {VideoCard} from "@/components/VideoCard";

const VIDEOS = [{
    name:"Harkirat Singh",
    imageUrl:"https://yt3.googleusercontent.com/1FEdfq3XpKE9UrkT4eOc5wLF2Bz-42sskTi0RkK4nPh4WqCbVmmrDZ5SVEV3WyvPdkfR8sw2=s160-c-k-c0x00ffffff-no-rj",
    thumbUrl:"https://i.ytimg.com/an_webp/RzAtVam9LqQ/mqdefault_6s.webp?du=3000&sqp=CPyznrcG&rs=AOn4CLCrgZGUvHisMGYstGeqJdfwibfZAw",
    title:"Javascript in 1 shot in Hindi | part 1",
    views:"100M views .",
    time:"13 hours ago"
},{
    name:"Harkirat Singh",
    imageUrl:"https://yt3.googleusercontent.com/1FEdfq3XpKE9UrkT4eOc5wLF2Bz-42sskTi0RkK4nPh4WqCbVmmrDZ5SVEV3WyvPdkfR8sw2=s160-c-k-c0x00ffffff-no-rj",
    thumbUrl:"https://i.ytimg.com/an_webp/b36dropRH2U/mqdefault_6s.webp?du=3000&sqp=CJTEnrcG&rs=AOn4CLDeWPOR9OjCxzwyKmh1X5qvCYwTzQ",
    title:"How to learn coding",
    views:"7M views .",
    time:"13 Days ago"
},{
    name:"Harkirat Singh",
    imageUrl:"https://yt3.googleusercontent.com/1FEdfq3XpKE9UrkT4eOc5wLF2Bz-42sskTi0RkK4nPh4WqCbVmmrDZ5SVEV3WyvPdkfR8sw2=s160-c-k-c0x00ffffff-no-rj",
    thumbUrl:"https://i.ytimg.com/an_webp/2hmBnU1I1Ew/mqdefault_6s.webp?du=3000&sqp=CIipnrcG&rs=AOn4CLC-KCeO8exKbz4YavXfJMig7LTA4Q",
    title:"How to learn Swimming",
    views:"96M views .",
    time:"3 Days ago"
},{
    name:"Harkirat Singh",
    imageUrl:"https://yt3.googleusercontent.com/1FEdfq3XpKE9UrkT4eOc5wLF2Bz-42sskTi0RkK4nPh4WqCbVmmrDZ5SVEV3WyvPdkfR8sw2=s160-c-k-c0x00ffffff-no-rj",
    thumbUrl:"https://i.ytimg.com/an_webp/6U_eKKgfo6c/mqdefault_6s.webp?du=3000&sqp=CMbanrcG&rs=AOn4CLBn73iWEVpjmsurcyJJwEvWRvoAXQ",
    title:"How to do what is impossible",
    views:"96M views .",
    time:"3 Days ago"
},{
    name:"Harkirat Singh",
    imageUrl:"https://i.ytimg.com/vi/jhm3H-TSkLA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB2yaoiOhEs7b0MN6fvoBGRiPIWEw",
    thumbUrl:"https://i.ytimg.com/an_webp/YMXdOl2Ets8/mqdefault_6s.webp?du=3000&sqp=CJvonrcG&rs=AOn4CLCJV8MjzjZqyS7MoBbnxuWKo2HZAw",
    title:"How to dance while Swimming",
    views:"96M views .",
    time:"3 Days ago"
},{
    name:"Harkirat Singh",
    imageUrl:"https://yt3.googleusercontent.com/1FEdfq3XpKE9UrkT4eOc5wLF2Bz-42sskTi0RkK4nPh4WqCbVmmrDZ5SVEV3WyvPdkfR8sw2=s160-c-k-c0x00ffffff-no-rj",
    thumbUrl:"https://i.ytimg.com/an_webp/UMwQjFzTQXw/mqdefault_6s.webp?du=3000&sqp=CNjFnrcG&rs=AOn4CLBFz-ZGpPX8cr0oDvn8hmwRecMuUA",
    title:"How to eat while Swimming",
    views:"96M views .",
    time:"3 Days ago"
}]

export const VideoGrid = () => {
    return (
        <div className={"grid grid-cols-1 sm:grid-cols-4 gap-2"}>
            {VIDEOS.map((attribute)=><VideoCard name={attribute.name} imageUrl={attribute.imageUrl} thumbUrl={attribute.thumbUrl} time={attribute.time} title={attribute.title} views={attribute.views}/>)}
        </div>
    )
}