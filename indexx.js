///task 1


const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};


user.mood = 'happy';

user.hobby = 'skydiving';


user.premium = 'folse';


const keys = Object.keys(user);
for (const key of keys) {
  console.log(`${key}: ${user[key]}`);
}  




//// TASK 2


const countProps = function(obj) {
  return Object.keys(obj).length;
};


console.log(countProps({})); 

console.log(countProps({ name: 'Mango', age: 2 })); 

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); 




///task3




const findBestEmployee = function(employees) {
  let maxTasks = 0;
  let bestEmployee = '';

  for (const employee in employees) {
    if (employees[employee] > maxTasks) {
      maxTasks = employees[employee];
      bestEmployee = employee;
    }
  }

  return bestEmployee;
};


console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); 

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
);

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); 




/// task 4



/// task 5


const product = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроїд', price: 400, quantity: 7 },
  { name: 'Захоплення', price: 1200, quantity: 2 },
];




const calculateTotalPrice = function (allProducts, productName) {
  let totalPrice = 0;
  for (const product of allProducts) {
    if (product.name === productName) {
      totalPrice = product.price * product.quantity;
      break;
    }
  }
  return totalPrice;
};


console.log(calculateTotalPrice(product, 'Радар')); // 5200
console.log(calculateTotalPrice(product, 'Дроїд')); // 2800


/// task 6





