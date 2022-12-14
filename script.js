/* Exercise
Data una lista della spesa (inventatela), stampare in pagina gli elementi della lista individualmente con un ciclo while. 
(anche brutalmente, basta che si vedano)
*/

// DOM's elements
const resultElement = document.getElementById('result');
console.log(resultElement);

// shopping list
const shoppingList = ['pane', 'latte', 'uova', 'carote', 'carne'];

let list = '<ul>';
let i = 0;
while(i < shoppingList.length) {
    list += `<li>${shoppingList[i]}</li>`;
    console.log(shoppingList[i]);
    i++
}

 list += '</ul>';
 console.log(list);
 resultElement.innerHTML = list;