class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}


class LL {
    constructor(node = null) {
        this.head = node;
    }

    findMiddle() {

        // first approach : find length and then find length/2th element

        // let size = this.size()
        // let middle = Math.floor(size / 2);
        // let current = this.head;
        // let i = 0;
        // while (i < middle) {
        //     current = current.next;
        //     i++;
        // }
        // return current


        // second approach : tortoise and heir ( slow , fast pointer)
        let slow = this.head;
        let fast = this.head;
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast  = fast.next.next;
        }
        return slow;
    }
    size() {
        let current = this.head;
        let size = 0;
        if (this.head === null) {
            return 0;
        } else {
            while (current !== null) {
                size++;
                current = current.next
            }
        }
        return size
    }

}

const node = new Node(5);
const node2 = new Node(20);
const node3 = new Node(200);

node.next = node2
node2.next = node3
const linkedList = new LL(node);
console.log(JSON.stringify(linkedList), linkedList.size(), linkedList.findMiddle())
