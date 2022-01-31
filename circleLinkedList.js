class DoublyLinkedList {
	constructor(){
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	addToList(val){
		if (this.head === null) {
			let newNode = {
				value: val,
				next: null,
				prev: null,
			};
			this.head = newNode;
			this.length++;
			return this;
		}
		let head = this.head;
		let count = 0;
		while (head.next && count <= this.length) {
			head = head.next;
			count++;
		}
		let newNode = {
			value: val,
		};
		head.next = newNode;

		newNode.prev = head;
		this.tail = newNode;
		newNode.next = this.head;
		this.head.prev = newNode;
		this.length++;
		return this;
	}
	findItem(val) {
		if (!this.head) {
			console.warn("Nothing is found in the list");
			return false;
		}
		if (this.head.value === val) {
			return this.head;
		}
		let head = this.head;
		while (head.next) {
			if (head.next.value === val) {
				return head.next;
			}
			head = head.next;
		}
		return false;
	}
	deleteItem(val) {
		if (this.head.value === val) {
			this.head = this.head.next;
			this.length--;
			return this;
		}
		let head = this.head;
		while (head.next) {
			if (head.next.value === val) {
				head.next = head.next.next;
				this.length--;
				return this;
			}
			head = head.next;
		}
		return false;
	}
}
let cLikeList = new DoublyLinkedList();
