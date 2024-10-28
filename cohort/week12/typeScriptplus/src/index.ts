interface User{
    id:string;
    name: string;
    age: number;
    email:string;
    password:string;
}

// function sumOfAge(user1:User,user2:User){
//     return user1.age + user2.age;
// }
//
// const age = sumOfAge({name:"A",age:20},{name:"B",age:30});
// console.log(age);

// interface UpdateProps{
//     name:string;
//     age:number;
//     password:string;
// }

type UpdateProps = Pick<User,'name'|'age'|'password'>

interface Users{
    readonly id:string;
    readonly name:string;
}

interface Userr{
    name:string;
    age:string;
}

const someone:Readonly<Userr> = {
    name:"wow",
    age:"thirty-two"
}

type UpdatePropsOptional = Partial<UpdateProps>

function updateUser(updatedUser:UpdateProps){

}

type human = {
    id:string;
    username:string;
}

type humans =  {
    [key:string]:human
}

type Humans = Record<string, human>;

const some:humans = {
    "wow":{
        id:"wow",
        username:"wow",
    }
}

const anyone = new Map();
anyone.set("name","wow");