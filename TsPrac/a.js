"use strict";
// TypeScript adds type safety to JavaScript code
// let x: number = 121;
// console.log(x);
;
function isLegal(user) {
    if (user.age > 18) {
        console.log(`${user.firstName} ${user.lastName} is eligible!`);
    }
    else {
        console.log(`${user.firstName} ${user.lastName} is not eligible!`);
    }
}
isLegal({
    firstName: "Andrew",
    lastName: "Hembrom",
    age: 12
});
