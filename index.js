// Import stylesheets
import './style.css';
import quickSort from './sorting/quicksort';
import heapSort from './sorting/heapsort';

import DoublyLinkedList, { Node } from './ds/DoublyLinkedList';
import LRUCache from './ds/lru';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const arr = [6, 3, 4, 23, 3, 32, 3, 2, 4, 3, 4, 7, 5, 3, 6, 45];
console.log(arr);
quickSort(arr, 0, arr.length - 1);

console.log('sorted:', arr);

const arr2 = [6, 3, 4, 23, 3, 32, 3, 2, 4, 3, 4, 7, 5, 3, 6, 45];
console.log(heapSort(arr2));

// const DL = new DoublyLinkedList();
// arr2.map((x) => {
//   DL.add(new Node(x, x));
// });

// DL.print();

// const node = new Node(4, 5);
// DL.add(node);
// DL.print();

const lru = new LRUCache(3);
lru.print();

lru.put(1, 2);
lru.print();

lru.put(2, 3);
lru.print();

lru.put(2, 4);
lru.print();

lru.put(3, 4);
lru.print();

lru.put(4, 4);
lru.print();

lru.get(2);
lru.print();

lru.put(5, 6);
lru.print();
