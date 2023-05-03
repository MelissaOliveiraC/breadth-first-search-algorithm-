//chave = nó's (cidade do grafo), associa então a lista de nó's adjacentes (das outras cidades próximas, parentes)
let possibilidades = {
    'Arad': ['Zerind', 'Sibiu', 'Timisoara'],
    'Pitesti': ['Rimnicu Vilcea', 'Craiova', 'Bucharest'],
    'Urziceni': ['Bucharest', 'Hirsova', 'Vaslui'],
    'Eforie': ['Hirsova'],
    'Lugoj': ['Timisoara', 'Mehadia'],
    'Oradea': ['Zerind', 'Sibiu'],
    'Neamt': ['Iasi'],
    'Bucharest': ['Fagaras', 'Pitesti', 'Giurgiu', 'Urziceni'],
    'Giurgiu': ['Bucharest'],
    'Zerind': ['Oradea', 'Arad'],
    'Sibiu': ['Oradea', 'Arad', 'Fagaras', 'Rimnicu Vilcea'],
    'Mehadia': ['Lugoj', 'Dobreta'],
    'Iasi': ['Vaslui', 'Neamt'],
    'Fagaras': ['Sibiu', 'Bucharest'],
    'Rimnicu Vilcea': ['Sibiu', 'Craiova', 'Pitesti'],
    'Timisoara': ['Arad', 'Lugoj'],
    'Dobreta': ['Mehadia', 'Craiova'],
    'Hirsova': ['Urziceni', 'Eforie'],
    'Craiova': ['Dobreta', 'Rimnicu Vilcea', 'Pitesti'],
    'Vaslui': ['Urziceni', 'Iasi']
};

function buscarCaminho(origem, destino, possibilidades) {
    const visitados = [origem];
    const fila = [origem];
    const parentes = {};
  
    while (fila.length) {
      const no = fila.shift();
      if (no === destino) {
        const caminho = [no];
        while (caminho[0] !== origem) {
          caminho.unshift(parentes[caminho[0]]);
        }
        return caminho;
      }
      //lista de vizinhos do nó-atual
      possibilidades[no]
        //para cada vizinho não visitado, includes testa se está no array, negando a lógica "!" -> filtra-se apenas vizinhos que não estão em visitados.  
        .filter(vizinho => !visitados.includes(vizinho))

        //adiciona na lista de visitados
        //na fila define nó-atual como parente desse vizinho.
        .forEach(vizinho => {
          visitados.push(vizinho);
          fila.push(vizinho);
          parentes[vizinho] = no;
        });
    }
    return null;
  }

let origem = 'Arad' // --> a cidade de origem (ponto de partida)
let destino = 'Bucharest' // --> a cidade final (objetivo)

    let caminho = buscarCaminho(origem, destino, possibilidades);
    console.log(`O caminho mais rápido entre ${origem} e ${destino} é > ${caminho.join(' --> ')}.`);
