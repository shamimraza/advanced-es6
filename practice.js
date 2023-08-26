// problem - 1

const array = [1, 3, 5, 7, 9];
const even = array.map((n) => n + 1);
// console.log(even);

// problem - 2

const newArray = [33, 50, 79, 78, 90, 101, 30];

// const filter = newArray.filter((a) => a % 10 === 0);
const filter = newArray.find((a) => a > 10);
// console.log(filter);

const instructor = [
  { name: "Nodi", age: 28, position: "Senior" },
  { name: "Akil", age: 26, position: "junior" },
  { name: "Shobuj", age: 30, position: "Senior" },
];

const seniorInstructor = instructor.find((i) => i.position === "Senior");
// console.log(seniorInstructor);

// problem 3

// const people = [
//   { name: "Mena", age: 20 },
//   { name: "Rina", age: 15 },
//   { name: "Suchorita", age: 22 },
// ];

// let totalAge = 0;
// for (let i = 0; i < people.length; i++) {
//   totalAge += people[i].age;
// }

// console.log("Total sum of ages:", totalAge);

// reduce

const people1 = [
  { name: "Mena", age: 20 },
  { name: "Rina", age: 15 },
  { name: "Suchorita", age: 22 },
];

const totalAge1 = people1.reduce((sum, person) => sum + person.age, 0);

// console.log("Total sum of ages:", totalAge1);
// const { x, y, z } = { x: 1, y1: 2, z: 3 };
// console.log(y);

// const nums = [1, 2, 3, 4, 5];
// let output = nums.filter((n) => n % 2);
// console.log(output);

// const friends = ["Moushumi", "Misha", "Manna", "mimi", "mahiya"];
// const allFriend = friends.find((friend) => friend.length === 5);
// console.log(allFriend);

const product = {
  name: "Laptop",
  model: "Yoga 3",
  price: 49000,
  dusk: "512SSD",
};

const all = ({ price } = product.price);
// console.log(all);

const [a, b] = [1, 2, 3, 4, 45, 5];
// console.log(a + b);
