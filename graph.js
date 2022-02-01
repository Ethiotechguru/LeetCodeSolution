const depthFirstIterative = (graph, source) => {
	const stack = [source];
	while (stack.length > 0) {
		const current = stack.pop();
		console.log(current);
		for (let neighbor of graph[current]) {
			stack.push(neighbor); //[]
		}
	}
};

const depthFirstRecursive = (graph, source) => {
	console.log(source);
	for (let neighbor of graph[source]) {
		depthFirstRecursive(graph, neighbor);
	}
};
const graph = {
	a: ["b", "c"], 
	b: ["d", "e"],
	c: ["f", "g"],
	d: [],
	e: [],
	f: [],
	g: [],
};
// console.log("Recursive solution");
// depthFirstRecursive(graph, "a");
// console.log("************************");
// console.log("Interative solution");
// depthFirstIterative(graph, "a");

const breadthFirstIterative = (graph, source) => {
	let queue = [source];
	while (queue.length > 0) {
		let current = queue.shift();
		for (let neighbor of graph[current]) {
			queue.push(neighbor);
		}
		console.log(queue);
	}
};
breadthFirstIterative(graph,'a')

//? How queue is processed
//* [b,c]=>[c,d,e]=>[d,e,f,g]=>[e,f,g]=>[f, g]=>[g]=>[]
const breadthFirstRecursive = (graph, source) => {
    let queue = [source];
	function inner() {
        if(queue.length <= 0){
            return;
        }
        let current = queue.shift();
        for (let neighbor of graph[current]) {
            queue.push(neighbor);
        }
        console.log(queue);
        inner();
    }
    inner();
};
breadthFirstRecursive(graph, "a");

