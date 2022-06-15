import DoublyLinkedList, { Node } from './DoublyLinkedList';

class LRUCache {
  #capacity;
  #valueMap = {};
  #list = new DoublyLinkedList();
  #size = 0;
  constructor(capacity) {
    this.#capacity = capacity;
  }

  get(key) {
    if (!this.#valueMap[key]) {
      return -1;
    }

    const node = this.#valueMap[key];
    this.#list.moveToFront(node);
    return node.value;
  }

  put(key, value) {
    let node = this.#valueMap[key];
    if (node) {
      node.value = value;
      console.log(node);
      this.#list.moveToFront(node);
      return;
    }

    node = new Node(key, value);
    if (this.#size === this.#capacity) {
      const removedNode = this.#list.removeFromEnd();
      delete this.#valueMap[removedNode.key];
      this.#size = this.#size - 1;
    }

    this.#list.add(node);
    console.log('added node', node);
    this.#valueMap[key] = node;
    this.#size = this.#size + 1;

    this.#list.print();
  }

  size() {
    return this.#size;
  }

  print() {
    console.log(
      Object.entries(this.#valueMap).map((x) => `${x[0]}, ${x[1].value}`)
    );
  }
}

export default LRUCache;
