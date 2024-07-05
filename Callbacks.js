function square(n) { 
    return n * n;
}

function cube(n) { 
    return n * n * n;
}

function quad(n) { 
    return n * n * n * n;
}

function sumOfPower(a, b, fn) { 
    first = fn(a);
    second = fn(b);
    return first + second;
}

let ans = sumOfPower(1, 2, cube);
console.log(ans);