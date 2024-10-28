// @ts-ignore
export const VideoCard = ({name,imageUrl,thumbUrl,title,views,time}) => {
    return (
        <div>
            {/*Hii from HTML Video component*/}
            <div className={"p-3"}>
                <img  className={"rounded-xl"} src={thumbUrl} alt={"sudocode"}/>
                <div className={"grid grid-cols-12 bg-gray-500 rounded-lg"}>
                    <div className={"col-span-1"}>
                        <img className={"rounded-full size-16"} src={imageUrl} alt={"hiteshChoudhary"}/>
                    </div>
                    <div className={"col-span-11 text-black"}>
                        <h2>{title}</h2>
                        <div className={"col-span-11 text-black"}>
                            <h3>{name}</h3>
                        </div>
                        <div className={"col-span-6 text-gray-800 text-sm"}>{views}</div>
                        <div className={"col-span-6 text-gray-800 text-sm"}>{time}</div>
                    </div>
                </div>
            </div>
            <span>

            </span>
            {/*<VideoCard2/>*/}
        </div>
    )
}

const VideoCard2 = () =>{
    return (
        <div>
            <h2>Hii there from video card 2</h2>
        </div>
    )
}