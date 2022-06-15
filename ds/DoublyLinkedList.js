export class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  #head = new Node();
  #tail = new Node();
  constructor() {
    this.#connectNodes(this.#head, this.#tail);
  }

  add(node) {
    console.log('adding node to front', node);
    this.#connectNodes(node, this.#head.next);
    this.#head.next = node;
    node.prev = this.#head;
  }

  removeFromEnd() {
    const lastNode = this.#tail.prev;
    this.delete(lastNode);
    return lastNode;
  }

  moveToFront(node) {
    this.delete(node);
    this.add(node);
  }

  #connectNodes(nodeA, nodeB) {
    console.log('connecting', nodeA, nodeB);
    nodeA.next = nodeB;
    nodeB.prev = nodeA;
  }

  delete(node) {
    this.#connectNodes(node.prev, node.next);
  }

  print() {
    let root = this.#head.next;
    const a = [];
    while (root.next !== null) {
      a.push(root);
      root = root.next;
    }
    console.log(a.map((x) => x.key + ',' + x.value).join('-->'));
  }
}

export default DoublyLinkedList;
