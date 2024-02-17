///task 1


const user = {
  Name: 'Mango',
  Age: 20,
  hobby: 'html',
  premium: true,
};


user.mood = 'happy';

user.hobby = 'skydiving';


user.premium = 'false';




const { Name, Age, hobby, premium, mood } = user;



//// TASK 2


const countProps = function(obj) {
  return Object.keys(obj).length;
};


console.log(countProps({})); 

console.log(countProps({ name: 'Mango', age: 2 })); 

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); 


const {name, age, mail, isOnline, score } = countProps

///task3




const findBestEmployee = function(employees) {
  let maxTasks = 0;
  let bestEmployee = '';

 for (const [employee, tasks] of Object.entries(employees)) { 
    if (tasks > maxTasks) {
      maxTasks = tasks;
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

const countTotalSalary = function (employees) {
    const arrOfValues = Object.values(employees);
    let start = 0;
    for (let i = 0; i < arrOfValues.length; i++) {
        const element = arrOfValues[i];
        start += element;
        
    }
    return start
};


console.log(countTotalSalary({})); 

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); 

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); 

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

const { naame, price, quantity } = product;

console.log(calculateTotalPrice(product, 'Радар')); 
console.log(calculateTotalPrice(product, 'Дроїд')); 



/// task 6


const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроїд', price: 400, quantity: 7 },
  { name: 'Захоплення', price: 1200, quantity: 2 },
];


const pricecc = function (allProdcuts, productName) {


    for (let i = 0; i < allProdcuts.length; i++) {
        const element = allProdcuts[i];
        if (element.name === productName){
            return element.price * element.quantity 
        }
    }    
    return "такого значення немає"

};


console.log(calculateTotalPrice(products, 'Радар')); 

console.log(calculateTotalPrice(products, 'Дроїд')); 


/// task 7


const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    return {
      id: this.transactions.length + 1,
      type,
      amount,
    };
  },

  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
    this.balance += amount;
    console.log(`Депозит ${amount} у ваш обліковий запис.`);
  },

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds. Withdrawal failed.");
      return;
    }
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
    this.balance -= amount;
    console.log(`Вилучено ${amount} з вашого акаунту.`);
  },

  getBalance() {
    return `Ваш поточний баланс становить ${this.balance}`;
  },

  getTransactionDetails(id) {
    const transaction = this.transactions.find(transaction => transaction.id === id);
    return transaction ? transaction : "Transaction not found.";
  },

  getTransactionTotal(type) {
    const totalAmount = this.transactions.reduce((total, transaction) => {
      return transaction.type === type ? total + transaction.amount : total;
    }, 0);
    return `Загалом ${type} операції: ${totalAmount}`;
  },
};

// Приклад використання методів об'єкта account
account.deposit(1488);
account.withdraw(530);
console.log(account.getBalance());
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionDetails(1));
