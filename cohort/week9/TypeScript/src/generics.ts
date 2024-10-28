// type Input = (number | string)[];
//
// function firstEl(arr:Input) {
//     return arr[0];
// }
//
// let value = firstEl(["harkirat","singh"]);
//
// console.log(value.toUpperCase());

function identity<T>(value:T):T{
    return value;
}

let output1 = identity<number>(0);

let output2 = identity<string>("hey");