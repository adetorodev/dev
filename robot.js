const roads = [
  "Alice's house-Bob's house",
  "Alice's house-Post office",
  "Alice's house-Cabin",
  "Cabin-Post office",
  "Bob's house-Town Hall",
  "Bob's house-Grace's house",
  "Daria's house-Ernie's house",
  "Daria's house-Town Hall",
  "Ernie's house-Marketplace",
  "Marketplace-Grace's house",
  "Grace's house-Post office",
];

function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (let [from, to] of edges.map((r) => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}

const roadGraph = buildGraph(roads);
// console.log(roadGraph)


class VillageState {
    constructor(place, parcels){
        this.place = place
        this.parcels = parcels
    }

    move(destination){
        if(!roadGraph[this.place].includes(destination)){
            return this
        } else {
            let parcels = this.parcels.map( p => {
                if(p.place != this.place) return p;
                return {place: destination, address: p.address};
            }).filter(p => p.place != p.address);
            return new VillageState(destination, parcels)
        }
    }
}

let first = new VillageState(
    "Post office", [{place: "Post office", address: "Alice's house"}]
)

let next = first.move("Alice house")

console.log(next.place)
console.log(next.parcels)
console.log(first.place)