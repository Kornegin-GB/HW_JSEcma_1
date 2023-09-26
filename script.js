//Задание 1
const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));
console.log("");

// Задание 2
const createCounter = () => {
   let count = 0;
   return {
      increment: () => ++count,
      decrement: () => --count,
   }
}
const counter1 = createCounter();
console.log(counter1.increment());
console.log(counter1.increment());
console.log(counter1.increment());

const counter2 = createCounter();
console.log(counter2.decrement());
console.log(counter2.decrement());
console.log(counter2.decrement());

console.log('');
// Задание 3
function findElementByClass(rootEl, classEl) {
   for (let index = 0; index < rootEl.childElementCount; index++) {
      rootEl = rootEl.children[index];
      if (rootEl.className === classEl) {
         return rootEl;
      }
      findElementByClass(rootEl, classEl);
   }
}

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);
