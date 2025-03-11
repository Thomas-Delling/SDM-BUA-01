let numeros = [10 , 20 , 30 , 40 , 50]     //array para listas 
console.log(numeros[2])   

let frutas = ["maca" , "pera" , "melancia" , "bagaco de jaca" , "laranja"]


//adiconando elementos 

frutas.forEach((fruta, index) =>{ //listar os elementos com numeracao
    console.log(`${index}: ${fruta}`);
});


frutas.push("uva") //adicona elementos no FIM
frutas.unshift("Melao") //adiciona elementos no COMECO


frutas.pop(); //remove o ultimo elemento
frutas.shift(); //remove o primeiro elemento

frutas.splice(2,1); //remove um elemento espcificamente

console.log(frutas)

let mapa = new Map() //criar um metodo
mapa.set("nome" , "Thomas") //dar elementos a variavel
mapa.set("idade" , 21 )

//acessar valores

console.log(mapa.get("nome"))

console.log(mapa.get("idade"))