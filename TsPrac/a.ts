
// TypeScript adds type safety to JavaScript code
// let x: number = 121;
// console.log(x);


// Types - number, string, boolean, null, undefined, any
// function greet(firstName: string) { 
//     console.log(`Hello ${firstName}`);
// }

// greet("Andrew");

interface User {
    firstName: string;
    lastName: string;
    age: number;
};

function isLegal(user: User) { 
    if (user.age > 18) {
        console.log(`${user.firstName} ${user.lastName} is eligible!`);
    } else { 
        console.log(`${user.firstName} ${user.lastName} is not eligible!`);
    }
}

isLegal({
    firstName: "Andrew",
    lastName: "Hembrom",
    age: 12
})