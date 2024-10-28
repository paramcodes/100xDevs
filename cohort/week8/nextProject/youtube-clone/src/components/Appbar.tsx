import {SearchBar} from "@/components/SearchBar";

export const AppBar = (props: any) => {
    return (
        <div className={"flex justify-between bg-gray-700"}>
            <div>
                <img className={"size-16"} src={"https://www.svgrepo.com/show/293041/youtube.svg"} alt={"youtubeImage"}/>
            </div>
            <div>
                <SearchBar/>
            </div>
            <div>
                Sign in
            </div>
        </div>
    )
}