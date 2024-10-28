function isLegal(user) {
    return user.age >= 18;
}
var user = {
    firstname: "Alan",
    lastname: "Walker",
    email: "alan@gmail.com",
    age: 34
};
console.log(isLegal(user));
