//console.log(document.querySelector("#div1 a").title)//imprime hola mundo
//console.log(document.querySelector("#div1 a")) 
//console.log(document.querySelector("#div1 >p").textContent)
//var titulo=document.querySelectorAll("#div1 [title]")
//console.log(titulo[2].text); //Hola de Nuevo
//console.log(document.querySelector("#div1 >p >a").title)

// Para realizar para 18_06
// buscar con el selector de clases un título que empiece con "adios"
console.log(document.querySelector(".normalLink[title^='adios']").title);

//buscar con el selector de clase un título siguiente al que empiece con "adios"
console.log(document.querySelector(".normalLink[title^='adios']+a").title)
//visualizar con forEach todos los título de la clase .normaLink
let elems = document.querySelectorAll(".normalLink")

elems.forEach(function(elem){ //imprime "hola mundo" y "adios mundo"
console.log(elem.title)
})
//visualizar todos los titulos que empiezan por "hola"
let elems2 = document.querySelectorAll("a[title^='hola']")
elems2.forEach(function(elem){ //imprime "hola mundo" y "hola de nuevo"
    console.log(elem.title)
})
//visualizar tosdos los hermanos de "a" cuyo titulo sea "hola mundo"

let elems3 = document.querySelectorAll("a[title='hola mundo']~a")
elems3.forEach(function(elem){ //imprime "adios mundo" y "hola de nuevo"
    console.log(elem.title)
})