let lname: string;
lname = 'kumar'

console.log(lname.toUpperCase());

let age: number;

age = 20;
let dob = '25'

let result = parseInt(dob);

console.log(result);


let invalid: boolean;
invalid = false

console.log(invalid);


let emplist : string[];
let deplist: Array<string>;
let numlist: Array<number>;

deplist = ['raj', 'kumar'];
numlist = [1, 2, 3];

let results = numlist.filter((num) => num>2);
console.log(results)

const enum Color {
    Red,
    Green,
    Blue
}
let c: Color = Color.Blue;
