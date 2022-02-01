class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}
let head = new Node(2);
let head2 = new Node('a')
function addToList(node, val) {
	let newNode = {
		val: val,
		next: null,
	};
	if (!node.next) {
		node.next = newNode;
		return node;
	}
	let head = node;
	while (head.next) {
		head = head.next;
	}
	head.next = newNode;
	return head;
}
let a = new Node(3);
let b = new Node(4);
let c = new Node(5);
let d = new Node(6);
let e = new Node(7);
let f = new Node(8);
head.next = a;
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
let g = new Node('b');
let h = new Node('c');
let i = new Node('d');
head2.next = g;
g.next = h;
h.next = i;
const linkedListValues = (head) => {
	//return an array of linked list values
	let nodeValues = [];
	let current = head;
	while (current) {
		nodeValues.push(current.val);
		current = current.next;
	}
    console.log(nodeValues);
	return nodeValues;
};
// linkedListValues(head)

const sumList = (head) => {//returning the sum of all linked list values
	// todo
	let sum = 0;
	let current = head;
	while (current) {
		sum += current.val;
		current = current.next;
	}
    console.log(sum);
	return sum;
};
// sumList(head)

const linkedListFind = (head, target) => {//return true if the target is found in the linked list false if not
	// todo
	let current = head;
	while (current) {
		if (current.val === target) {
            console.log(current.val === target);
			return true;
		}
		current = current.next;
	}
    console.log(false);
	return false;
};

// linkedListFind(head, 8) //should return true
// linkedListFind(head, 9) //should return false

const getNodeValue = (head, index) => {
	// todo
	let i = 0;
	let current = head;
	while (index !== i && current) {
		current = current.next;
		i++;
	}
	if (current !== null) {
		console.log(current.val);
		return current.val;
	}
    console.log(null);
	return null;
};
// getNodeValue(head, 9)

const reverseList = (head) => {
	// todo
	let current = head;
	let temp;
	while (current) {
		let newNode = {
			val: current.val,
		};
		if (!temp) {
			newNode.next = null;
			temp = newNode;
		} else {
			newNode.next = temp;
			temp = newNode;
		}
		current = current.next;
	}
	console.log(temp);
	return temp;
};
// reverseList(head)
