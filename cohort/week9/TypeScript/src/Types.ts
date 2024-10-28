type Users = {
    firstName: string,
    lastName: string,
    email: string,
    age:number
}

type GreetArg = number | string;

function greet(id:GreetArg){
    console.log(id);
}

greet(3);
greet("Me");

type Employee = {
    firstname:string;
    StartDate:Date;
}

interface Manager {
    firstname:string;
    department:string;
}

type TeamLead = Employee & Manager;

const teamlead: TeamLead = {
    firstname:"Dominic",
    StartDate:new Date(),
    department:"Cars"
}

console.log(teamlead);