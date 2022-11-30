
//function add (num1: number, num2: number) : number {
//    return num1 + num2;
//}

    // const sub = (num1: number, num2: number) : number => num1 - num2;

    // console.log(sub(5, 3));

// const mult = function(num1: number, num2: number) : number {
//     return num1 * num2;
// }
// console.log(mult(5, 3));

// function add (num1: number, num2: number, num3?: number) : number {
//     return num3 ? num1 + num2 + num3 : num1 + num2;
// }

// console.log(add(5, 3));
// console.log(add(5, 3, 4));

// function add2 (num1: number, num2: number, num3: number = 10) : number {
//     return num1 + num2 + num3;
// }

// console.log(add2(5, 3));
// console.log(add2(5, 3, 4));


// function add3 (num1: number, num2: number, ...num3: number[]): number {
//     return num1 + num2 + num3.reduce((a,b) => a + b, 0);
// }

// let numbers = [1,2,2,4,5];
// console.log(add3(2,3, ...numbers));
// console.log(add3(2,3, ...[5,6,7]));
// console.log(add3(2,3,5,8,9,4));

function getItems<Type>(items: Type[]): Type[] {
    return new Array<Type>().concat(items);
}

let concatResult = getItems<number>([2,3,5,8,9,4]);
let concatString = getItems<String>(['a', 'b']);

console.log(concatResult);
console.log(concatString);