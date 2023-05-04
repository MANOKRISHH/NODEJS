const bcrypt = require("bcryptjs");

let userDetails = {
    name:'raju',
    email:'raj123@gmail.com',
    password:'Psa12345678',
};

let newPassword = bcrypt.hashSync(userDetails.password, 10);
console.log(newPassword);

userDetails = {...userDetails, password: newPassword};
console.log(userDetails);

//compare the passwords

if(bcrypt.compareSync("PSA123", userDetails.password)) {
console.log("Password - Matched");
}else {
    console.log("password - not Matched")
}