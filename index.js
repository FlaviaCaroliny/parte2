function mostrarSoma(){
    let divs=document.createElement("div")
    let inputSoma=document.querySelector("#nome")
    let textos= document.createTextNode('O esultado é ' +inputSoma.value)
    divs.appendChild(textos)
    document.body.appendChild(divs)
}
let botaosoma=document.querySelector("#bs")
botaosoma.onclick=mostrarSoma;
