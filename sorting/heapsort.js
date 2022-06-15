import Heap from '../ds/heap';

const heapSort = (arr) => {
  const heap = new Heap((a, b) => a - b, arr);
  return Array.from({ length: heap.size() }, () => heap.extract());
};

export default heapSort;
