import {selector} from "recoil";
import {countAtom} from "./count.jsx";

export const evenSelector = selector({
    key:"evenSelector",
    get:({get})=> {
        const count = get(countAtom);
        return count % 2 === 0;
    }
})