const firstName = "JUN-O";
const lastName = "JANG";

function getFullName(first, last){
    return `${first} ${last}`;
}

function greet(name = "Guest"){
    console.log('Hello, ${name}!');
    
}
function greetAll(...names){
    names.forEach(name => greet(name));
}

console.log(getFullName(firstName, lastName));
greet();
greet("Ricky");