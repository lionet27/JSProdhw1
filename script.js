// 1. Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.
// Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:
// { title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска" }
// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)
const albums=[
    {title:"Осень", artist: "Лицей", year: "1998"},
    {title:"Зима", artist: "Школа", year: "1999"},
    {title:"Весна", artist: "Детский сад", year: "2000"}
];
const musicCollection={
    albums:[...albums],
    [Symbol.iterator]:function () {
        let index=0;
        return{
            next:()=>{
                if (index<this.albums.length){
                    return{value:this.albums[index++],done:false};
                }else{
                    return{done:true};
                }
            }
        }
    }
};

for (const album of musicCollection) {
    console.log(album.title,album.artist,album.year);
    
}

// 2. Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.
// Необходимо создать систему управления этими заказами, которая позволит:
// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.
// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.
// Блюда и их повара:

// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

// Заказы:
// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.
 let cooks=new Map();
 let victor={firstname:"Виктор"};
 let vistorDishes=new Set();
 vistorDishes.add("Пицца Маргарита");
 vistorDishes.add("Пицца Пепперони");
 cooks.set(victor,vistorDishes);
 let olga={firstname:"Ольга"};
 let olgaDishes=new Set();
 olgaDishes.add("Суши Калифорния");
 olgaDishes.add("Суши Филадельфия");
 cooks.set(olga,olgaDishes);
 let dima={firstname:"Дмитрий"};
 let dimaDishes=new Set();
 dimaDishes.add("Тирамису");
 dimaDishes.add("Чизкейк");
 cooks.set(dima,dimaDishes);


let ordes=new Map();
let alex={firstname:"Алексей"};
let alexOrder=new Set();
alexOrder.add("Пицца Пепперони");
alexOrder.add("Тирамису");
let mary={firstname:"Мария"};
let maryOrder=new Set();
maryOrder.add("Суши Калифорния");
maryOrder.add("Пицца Маргарита");
let ira={firstname:"Ирина"};
let iraOrder=new Set();
iraOrder.add("Чизкейк");
ordes.set(alex,alexOrder);
ordes.set(mary,maryOrder);
ordes.set(ira,iraOrder);

console.log(`Ольга готовит следующие блюда: ${[...cooks.get(olga)]}`);
console.log(`Алексей заказал: ${[...ordes.get(alex)]}`);