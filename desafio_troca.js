let a = 7;
let b = 94;

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);

/*
UMA FORMA MAIS FÁCIL: !!!!!!!!!

[a, b] = [b, a]

*/