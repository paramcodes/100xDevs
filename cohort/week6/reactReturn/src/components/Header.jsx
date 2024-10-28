import React,{memo} from "react";

export const Header = memo((props) => {
    return (
        <div>{props.title}</div>
    )
    })