class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}
let head = new Node(2);

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

function reversNode(node) {
	let newNode;
	let current = node;
	while (current) {
		let temp = {
			val: current.val,
		};
		if (!newNode) {
			temp.next = null;
			newNode = temp;
		} else {
			temp.next = newNode;
			newNode = temp;
		}
		current = current.next;
	}
	console.log(newNode);
}

reversNode(head)