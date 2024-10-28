function isLegal(user:User):boolean{
    return user.age >= 18;
}

const user:User = {
    firstname:"Alan",
    lastname:"Walker",
    email:"alan@gmail.com",
    age:34
}

interface User{
    firstname:string;
    lastname:string;
    email:string;
    age:number;
}

console.log(isLegal(user));