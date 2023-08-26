// data access

const data = [
  {
    id: 1,
    name: "abul",
    address: "kochu khet",
  },
];
// console.log(data[0].address);

const products = {
  count: 5000,
  data: [
    { id: 1, name: "lenovo laptop", price: 7000 },
    { id: 2, name: "i phone", price: 30000 },
  ],
};
// console.log(products.data[1].price);

const users = {
  id: 50001,
  name: "soriful alom",
  address: {
    street: {
      first: "54/1 uttor side",
      second: "porobag er goli",
      third: "nowakhali",
    },
    city: "dhaka",
  },
};
// console.log(users.address.street.second);

const user = {
  id: 50004,
  name: "pori bibi bazar",
  address: {
    city: "dhaka bangladesh",
    country: "bangladesh dhaka",
  },
};
console.log(user.address.country);
