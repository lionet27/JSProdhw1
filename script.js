// Задание 1: ""Управление персоналом компании"". Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:
// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя).
// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:
// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).

class Employee{
  constructor(name){
    this.name=name;
  }
  displayInfo(){
    console.log(`Name: ${this.name}`);
  }
}
class Manager extends Employee{
  constructor (name, department){
    super(name);
    this.department=department;
  }
  displayInfo(){
    console.log(
    `Name: ${this.name}
Department:${this.department}`);
  }
}
// Пример использования классов
const employee = new Employee("John Smith");
employee.displayInfo();
// Вывод:  Name: John Smith
const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();
// Вывод:  Name: Jane Doe
//         Department: Sales

// 2.""Управление списком заказов"". Реализуйте класс Order (заказ), который имеет следующие свойства и методы:
// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.
// Пример использования класса
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}
class Order{
  constructor(orderNumber){
    this.orderNumber=orderNumber;
    this.products=[];
  }
  addProduct(product){
    this.products.push(product);
  }
  getTotalPrice(){
    let totalPrise=0;
    this.products.forEach(element => {
      totalPrise+=element.price;
    });
    return totalPrise;
  }
}

const order = new Order(12345);
const product1 = new Product("Phone", 500);
order.addProduct(product1);
const product2 = new Product("Headphones", 100);
order.addProduct(product2);

console.log(order.getTotalPrice()); // Вывод: 600
console.log(order);

// 3. Создать класс "Товар" с приватными полями "название", "цена" и "количество". Класс должен иметь публичные методы "изменить цену", "изменить количество" и "получить стоимость", которые будут изменять соответствующие поля объекта и возвращать стоимость товара соответственно. Также класс должен иметь статическое поле "максимальное количество", которое будет задавать максимально допустимое количество товара для всех создаваемых объектов.
class Product2{
  #name;
  #price;
  #quantity;
  static #maxQuantity=4000;

  constructor(name,price,quantity){
    if (quantity > Product2.#maxQuantity) {
              throw new Error('Quantity is too high');
    }
    this.#name=name;
    this.#price=price;
    this.#quantity=quantity;
  }
  getName(){
    return this.#name;
  }
  getPrice(){
    return this.#price;
  }
  getQuantity(){
    return this.#quantity;
  }
  setName(name){
    this.#name=name;
  }
  setPrice(price){
    this.#price=price;
  }
  setQuantity(quantity){
    this.#quantity=quantity;
  }

  getCost(){
    return this.#price*this.#quantity;
  }
}

// Пример работы кода:
const product11 = new Product2('Тетрадь', 50, 200);
console.log(product11);
console.log(product11.getName()); // "Тетрадь"
console.log(product11.getPrice()); // 50
console.log(product11.getQuantity()); // 200
console.log(product11.getCost()); // 10000
product11.setName('дневник');
product11.setPrice(100);
product11.setQuantity(300);
console.log(product11);

// const product22 = new Product2('Ручка', 10, 5000); // выбросится ошибка "Quantity is too high"

// 2 Создать класс "Пользователь" с приватными полями "имя", "возраст" и "электронная почта". Класс должен иметь публичные методы "изменить имя", "изменить возраст" и "изменить электронную почту", которые будут изменять соответствующие поля объекта. Также класс должен иметь статическое поле "максимальный возраст", которое будет задавать максимально допустимый возраст для всех создаваемых объектов.
class User{
  #name;
  #age;
  #email;
  static #maxAge=120;

  constructor(name,age,email){
    if (age > User.#maxAge) {
              throw new Error('Age is too high');
    }
    this.#name=name;
    this.#age=age;
    this.#email=email;
  }
  getName(){
    return this.#name;
  }
  getAge(){
    return this.#age;
  }
  getEmail(){
    return this.#email;
  }
  getMaxAge(){
    return User.#maxAge;
  }
  setName(name){
    this.#name=name;
  }
  setAge(age){
    this.#age=age;
  }
  setEmail(email){
    this.#email=email;
  }

  
}

const user1 = new User('John', 30);
console.log(user1.getName()); // "John"
user1.setName('Mike');
console.log(user1.getName()); // "Mike"
console.log(user1.getMaxAge()); // 120

const user2 = new User('Jane', 150); // Error: Age is too high

