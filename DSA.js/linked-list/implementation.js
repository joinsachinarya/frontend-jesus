class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    add(data) {
        const node = new Node(data);
        let current = this.head;
        if (this.head !== null) {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        } else {
            this.head = node;
        }
        this.size++;
    }

    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            console.log("Invalid index");
        } else {
            const node = new Node(data);
            if (index === 0) {
                node.next = this.head
                this.head = node
            } else {
                let curr, prev, currPosition = 0;
                curr = this.head;
                prev = null

                while (currPosition < index) {
                    prev = curr;
                    curr = curr.next;
                    currPosition++;
                }

                node.next = curr
                prev.next = node
            }
            this.size++;
        }

    }

    removeFrom(index) {
        if (index < 0 || index > this.size) {
            return 'Invalid index'
        } else {
            let curr = this.head, prev = null, currPosition = 0;
            if (index === 0) {
                this.head = curr.next;
            } else {
                while (currPosition < index) {
                    prev = curr;
                    curr = curr.next
                    currPosition++;
                }
                prev.next = curr.next
            }
            this.size--;
        }

    }

    removeElement(value) {
        let curr = this.head, prev = null;
        while (curr !== null) {
            if (curr.value === value) {
                if (prev === null) {
                    this.head = curr.next;
                } else {
                    prev.next = curr.next;
                }
                this.size--;
                return curr;
            } else {
                prev = curr
                curr = curr.next;
            }
        }
        return -1;
    }
}



const list = new LinkedList()
list.add(20)
list.insertAt(1, 0)
list.insertAt(2, 1)
list.insertAt(3, 2)
list.removeFrom(1)
list.removeElement(3)

console.log(list)