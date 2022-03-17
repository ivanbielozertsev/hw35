// Task 1
// const ul = document.body.childNodes[1];
// console.log(ul);
// let arrayValue = [];
// for(let attr of ul.attributes) {
//     arrayValue.push(attr.value)
//     }
// console.log(arrayValue);
// let arrayName = [];
// for(let attr of ul.attributes) {
//     arrayName.push(attr.name)
//     }
// console.log(arrayName);

// const liLast = document.body.firstElementChild.lastElementChild;
// liLast.innerHTML = 'Привет меня зовут John';

// const liFirst = document.body.firstElementChild.firstElementChild;
// liFirst.setAttribute('data-my-name', 'John');
// console.log(liFirst.getAttribute('data-my-name'));
// console.log(liFirst);

// ul.removeAttribute('data-dog-tail');
// console.log(ul);


// // Task 2
// // let generateList = function generateList(ary) {
// //     let ul = document.createElement('ul');
   
// //     ary.forEach(function(el) {
// //       let li = document.createElement('li');
// //       let childElement;
   
// //       if (Array.isArray(el)) {
// //         childElement = generateList(el);
// //       } else {
// //         childElement = document.createTextNode(el)
// //       }
   
// //       li.appendChild(childElement);
// //       ul.appendChild(li);
// //     })
   
// //     return ul;
// //   }
   
// //   document.body.appendChild(generateList([1, 2, 3]))
// //   document.body.appendChild(generateList([1, 2, [1.1, 1.2, ['1.2.1', '1.2.2'], 1.3], 3]))



// // Task 3
// const size = 10;
// let array = new Array(size);

// fillMatrix();
// console.log(array);
// showMatrix();

// function fillMatrix() {
//     for (let i = 0; i < size; ++i) {
//         array[i] = new Array(size);
//         for (let j = 0; j < size; ++j) {
//             array[i][j] = i * 10 + j + 1;
//         }
//     }
// }
// function showMatrix() {
//     for (let i = 0; i < size; ++i) {
//         for (let j = 0; j < size; ++j) {
//             document.write(array[i][j] +" ");
//         }
//         document.write("<br />");
//     }
// }
