let username = prompt("Enter your name?");
let age = prompt("Enter your age");
let email = prompt("Enter your Email address");
if (age< "12 years old"){
    alert(`Hi ${username}, you are ${age} years old and you are too young to register. Sorry 😔😔 `);
} else if (12 < "age years old" < 18){
    alert(`Hi ${username}, you are ${age} years old and you have limited options to register for. We will keep in touch via email: ${email} 👋🏽👋🏽 .`);
} else if ("age years old" > 18){
    alert(`Hi ${username}, you are ${age} years old and you can register for any option of your choosing. We will keep in touch via email: ${email} 👋🏽👋🏽  .`);
}else {
    alert("Please enter a valid age.");
}