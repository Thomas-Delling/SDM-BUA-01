let map = new Map() //de mapa
 
map.set("nome" , "Thomas") //de nome ao mapa
map.set("idade" , 21 )
map.set("altura")

console.log(map.get("nome")) //pega o nome do mapa e mostre-o
console.log(map.has("idade"))
console.log(map.size)

map.delete("idade");

//remove um elemento do map

map.forEach((valor, chave) => { //para cada valor, mostre-o
console.log(`${valor}: ${valor}`)
})

map.clear(); // remove todos os elementos do map
console.log(map.size) // mostra o tamanho do map


