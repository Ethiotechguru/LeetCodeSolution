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
// const acyclicGraph = {
// 	f:['g','i'],
// 	g:['h'],
// 	i:['k'],
// 	k:[],
// 	j:['i'],
// 	h:[],
// }
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
// breadthFirstIterative(graph,'a')

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
// breadthFirstRecursive(graph, "a");

//* Traveling from the source node to the given destination */
const acyclicGraph = {
	f: ["g", "i"],
	g: ["h"],
	i: ["k","g"],
	k: [],
	j: ["i"],
	h: [],
};
let visited ={}
const directedGraphRecursive = (s, d) => {
	//can the graph travel from source to destination?
	
	for (let neighbor of acyclicGraph[s]) {
		if (neighbor === d) {
			console.log(neighbor == d);
			console.log(neighbor, d);
			return true;
		}
		if(visited[neighbor]){
			console.log(visited[neighbor], 'is coming from here');
			continue;
		}
		console.log("where does continue goes?");
		visited[neighbor] = neighbor;
		console.log(visited);
		directedGraphRecursive(neighbor, d);
	}
	console.log(false);
	return false;
};
// directedGraph('j','g')
directedGraphRecursive('j','k')
const directedGraphIterative = (s, d) => {
	//can the graph travel from source to destination?
	let stack = [s];
	while (stack.length > 0) {
		let current = stack.pop();
		for (let neighbor of acyclicGraph[current]) {
			if (neighbor === d) {
				console.log(neighbor === d);
				return true;
			}
			stack.push(neighbor);
		}
	}
	console.log(false);
	return false;
};
