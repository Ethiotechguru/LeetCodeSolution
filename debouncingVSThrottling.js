function wrapperFunc(){
    let timer;
    return debouncingFun = ()=>{
        const cbFunc = ()=>{
            console.log(`Timer is done ${timer}`);
        }
        clearTimeout(timer)
        timer = setTimeout(cbFunc, 2000);
    }
}
let funcReturned = wrapperFunc();
// funcReturned()
function throttlingFunc(cb, t) {
	let flag = false;
	let timer;
	return () => {
		if (flag) {
			cb();
			flag = !flag;
		}
		clearTimeout(timer);
		timer = setTimeout(() => {
			console.log(flag);
			flag = !flag;
			console.log(flag);
		}, t);
	};
}
function callMeBack(){
    console.log('Throttling Function is called after 2 second')
}
let throttleFunc = throttlingFunc(callMeBack, 2000);

class Debouncer {
	constructor() {}
	debounceFunc(time) {
		let timer;
		return function () {
			function cbFun() {
				console.log("Called After Timer is over");
			}

			clearTimeout(timer);
			timer = setTimeout(cbFun, time);
		};
	}
}

let ct = new Debouncer();

let returnedFunc = ct.debounceFunc(3000);


