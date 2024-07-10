let age: number;
let userName: string;
let toggle: boolean;
let empty: null;
let callback = (a: number): number => {
  return 100 + a;
};

age = 50;
userName = "Max";
toggle = true;
empty = null;

callback(100);

console.log(age);
console.log(userName);
console.log(toggle);
console.log(empty);
