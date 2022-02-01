const graphOne = {
	i: ["j", "k"],
	j: ["i", "k"],
	k: ["i", "m", "l", "j"],
	m: ["k"],
	l: ["k"],
	o: ["n"],
	n: ["o"],
};

// const undirectedGraph = (graph, source, destination)=>{
//     let visited = {

//     }
//     let queue = [source];

//     while(queue.length>0){
//         let current = queue.shift();
//         if(visited[current]){
//             continue;
//         }
//         for(let neighbor of graph[current]){
//             if(source === destination){
//                 return true;
//             }
//             if(!visited[current]){
//                 visited[current] = current;
//             }
//             queue.push(neighbor);
//         }
//     }
// }

const adjacencyListToGraph = (arr)=>{
    let graph = {

    }
    for(let ele of arr){
        let [a,b] = ele;
        if(!graph[a]) graph[a] = [];
        if(!graph[b]) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
    console.log(graph);
    return graph;
}
let adList = [
    ['i','j'],['k','i'],['m','k'],['k','l'],['o','l']
]
adjacencyListToGraph(adList);

