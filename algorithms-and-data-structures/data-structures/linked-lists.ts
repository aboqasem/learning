class ListNode<V> {
  value: V;
  next: ListNode<V> | null;

  constructor(value: V, next: ListNode<V> | null = null) {
    this.value = value;
    this.next = next;
  }
}

class SinglyLinkedList<T> {
  public head: ListNode<T> | null = null;

  public tail: ListNode<T> | null = null;

  public length = 0;

  constructor(...items: T[]) {
    items.map((item) => this.push(item));
  }

  public push(value: T): ListNode<T> | null {
    const newNode = new ListNode(value);

    if (++this.length === 1) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = this.tail!.next;
    }

    return newNode;
  }

  public pop(): ListNode<T> | null {
    if (this.length === 0) {
      return null;
    }

    const popped = this.tail!;

    if (--this.length === 0) {
      this.tail = null;
      this.head = null;
    } else {
      let newTail = this.head!;

      for (let i = 1; i < this.length; ++i) {
        newTail = newTail.next!;
      }

      newTail.next = null;
      this.tail = newTail;
    }

    return popped;
  }

  public unshift(value: T): ListNode<T> | null {
    const newNode = new ListNode(value, this.head);

    this.head = newNode;

    if (++this.length === 1) {
      this.tail = newNode;
    }

    return newNode;
  }

  public shift(): ListNode<T> | null {
    if (this.length === 0) {
      return null;
    }

    const shifted = this.head!;

    this.head = this.head!.next;

    if (--this.length === 0) {
      this.tail = null;
    }

    return shifted;
  }

  public getAt(idx: number): ListNode<T> | null {
    if (idx < 0) {
      idx = idx + this.length;
    }

    if (idx >= this.length || idx < 0) {
      return null;
    }

    let item = this.head!;

    for (let i = 1; i <= idx; ++i) {
      item = item.next!;
    }

    return item;
  }

  public setAt(idx: number, value: T): ListNode<T> | null {
    const item = this.getAt(idx);

    if (item) {
      item.value = value;
    }

    return item;
  }

  public insertAt(idx: number, value: T): ListNode<T> | null {
    if (idx === 0 || idx === -(this.length + 1)) {
      return this.unshift(value);
    }

    if (idx === this.length || idx === -1) {
      return this.push(value);
    }

    const prev = this.getAt(idx < 0 ? idx : idx - 1);
    if (!prev) {
      return null;
    }

    const newNode = new ListNode(value, prev.next);
    prev.next = newNode;

    ++this.length;
    return newNode;
  }

  public removeAt(idx: number): ListNode<T> | null {
    if (idx === 0 || idx === -this.length) {
      return this.shift();
    }

    if (idx === this.length - 1 || idx === -1) {
      return this.pop();
    }

    const prev = this.getAt(idx - 1);
    if (!prev?.next) {
      return null;
    }

    const removed = prev.next!;
    prev.next = removed.next;

    --this.length;
    return removed;
  }

  public reverse() {
    if (this.length === 0 || this.length === 1) {
      return this;
    }

    let curr = this.head!;
    this.head = this.tail!;
    this.tail = curr;

    let next: ListNode<T> | null;
    let prev: ListNode<T> | null = null;

    for (let i = 0; i < this.length; ++i) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next!;
    }

    return this;
  }

  public toString() {
    let next = this.head;
    let str = `[ ${next?.value ?? ''}`;

    if (this.length === 0) {
      return `${str} ]`;
    }

    for (let i = 1; i < this.length; ++i) {
      next = next!.next!;
      str += ` -> ${next.value}`;
    }

    return `${str} ]`;
  }
}

const s = new SinglyLinkedList(1, 2, 3);

s.pop();
s.push(3);

s.shift();
s.unshift(1);

s.removeAt(-2);
s.insertAt(-2, 2);

s.reverse().reverse();

console.log(s.head);
console.log(s.tail);
console.log(s.length);
console.log(`${s}`);
