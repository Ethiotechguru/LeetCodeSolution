// const fs = require('node:fs')
let l1 = { val: 2, next: { val: 4, next: { val: 3, next: null } } };
let l2 = { val: 5, next: { val: 6, next: { val: 4, next: null } } };
let outPut = { val: 7, next: { val: 0, next: { val: 8, next: null } } };
class SumList {
	constructor() {
		this.head = null;
		// this.tail = this.head;
		// this.length=0;
	}
	addSumList(val) {
		if (!val) {
			val = 0;
		}
		if (this.head === null) {
			let newNode = {
				value: val,
				next: null,
			};
			this.head = newNode;
			// this.tail = this.head;
			// this.length++;
			return this;
		}
		let head = this.head;
		while (head.next) {
			head = head.next;
		}
		let newNode = {
			value: val,
			next: null,
		};
		head.next = newNode;
		this.tail = newNode;
		// this.length++;
	}
}

var addTwoNumbers = function (l1, l2) {
	let trNum = 0;
	let l1Head = l1;
	let l2Head = l2;
	let outPut = [];
	let newList = new SumList();
	while (l1Head.next && l2Head.next) {
		let sum = l1Head.val + l2Head.val + trNum;
		if (sum > 9) {
			sum = sum.toString();
			let strNum = sum.split("");
			trNum = +strNum[0];
			outPut.push(+strNum[1]);
			newList.addSumList(+strNum[1]);
		} else {
			outPut.push(sum);
			newList.addSumList(sum);
			trNum = 0;
		}
		l1Head = l1Head.next;
		l2Head = l2Head.next;
	}
	let sum = l1Head.val + l2Head.val + trNum;
	newList.addSumList(sum);
	outPut.push(sum);
	while (l1Head.next) {
		newList.addSumList(l1Head.next.val);
		outPut.push(l1Head.next.val);
		l1Head = l1Head.next;
	}
	//     newList.addSumList(l1Head.val);
	while (l2Head.next) {
		newList.addSumList(l2Head.next.val);
		outPut.push(l2Head.next.val);
		l2Head = l2Head.next;
	}
	console.log(outPut);
	return newList;
};
// let listOutPut = addTwoNumbers(l1, l2);

let nightModeBtn = document.getElementById("nightModeBtn");
nightModeBtn.addEventListener('click',()=>{
	let label = document.querySelector(".night-mode-lable");
	if(nightModeBtn.className === 'night_mode-on'){
		nightModeBtn.className = 'night_mode-off'
		nightModeBtn.textContent='Off'
		document.body.style.backgroundColor = 'black';
		label.style.color = 'white';
	}else{
		nightModeBtn.className = "night_mode-on";
		nightModeBtn.textContent= 'On';
		document.body.style.backgroundColor = "white";
		label.style.color = "black";
	}
})
