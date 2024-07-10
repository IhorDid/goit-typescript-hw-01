// todo Завдання 3

// У вас є функція merge, яка поєднує два об'єкти.
// Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.

// function merge(objA, objB) {
//   return Object.assign(objA, objB);
// }

// **************************
function merge<T extends object, U extends object>(objA: T, objB: U): object {
  return Object.assign(objA, objB);
}