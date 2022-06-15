class Heap {
  #values = [];
  #length = 0;
  #comparator;
  constructor(comparator, initialValues) {
    this.#comparator = comparator;
    if (initialValues && initialValues.length > 0) {
      initialValues.forEach((val) => {
        this.insert(val);
      });
    }
  }
  insert(value) {
    if (this.#values.length <= this.#length) {
      this.#values.length = Math.max(1, this.#values.length * 2);
    }
    this.#values[this.#length] = value;
    this.#length++;
    this.#heapifyUp();
  }
  extract() {
    //console.log('heap', this.values, this.length);
    let node = null;
    if (this.#length > 0) {
      node = this.#values[0];
      this.#values[0] = this.#values[this.#length - 1];
      this.#values[this.#length - 1] = null;
      this.#length--;
      this.#heapifyDown();
    }
    return node;
  }
  #getParentIndex(index) {
    if (index > 0) {
      return Math.floor((index - 1) / 2);
    }
    return null;
  }
  #getLeftChild(index) {
    const child = index * 2 + 1;
    return child < this.#length ? child : null;
  }
  #getRightChild(index) {
    const child = index * 2 + 2;
    return child < this.#length ? child : null;
  }
  #heapifyUp() {
    let index = this.#length - 1;
    while (true) {
      const parent = this.#getParentIndex(index);
      if (
        parent !== null &&
        this.#comparator(this.#values[index], this.#values[parent]) < 0
      ) {
        let temp = this.#values[index];
        this.#values[index] = this.#values[parent];
        this.#values[parent] = temp;
        index = parent;
        continue;
      }
      return;
    }
  }
  #heapifyDown() {
    let index = 0;
    while (true) {
      const left = this.#getLeftChild(index);
      const right = this.#getRightChild(index);
      let swap = index;
      if (
        left !== null &&
        this.#comparator(this.#values[swap], this.#values[left]) > 0
      ) {
        swap = left;
      }
      if (
        right !== null &&
        this.#comparator(this.#values[swap], this.#values[right]) > 0
      ) {
        swap = right;
      }
      if (swap !== index) {
        let temp = this.#values[index];
        this.#values[index] = this.#values[swap];
        this.#values[swap] = temp;
        index = swap;
        continue;
      }
      return;
    }
  }
  print() {
    console.log(this.#values);
  }
  size() {
    return this.#length;
  }
}
export default Heap;
