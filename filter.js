const players = [76, 65, 46, 43, 64, 76, 41];
const man = players.filter((n) => n > 40);
// console.log(man);
// 1 dila bejor number and 0 dila jor number diba
const person = players.filter((p) => p % 2 === 0);
// console.log(person);

const friends = ["tom", "abbas", "korim", "raza babu"];
const person1 = friends.filter((n) => n.length > 4);
// console.log(person1);
