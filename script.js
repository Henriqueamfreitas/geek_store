////////// PENSANDO NA MARCAÇÃO //////////
// Criando os elementos e atribuindo-os às variáveis
let nav = document.createElement("nav")
let logoSite = document.createElement("img")
let div = document.createElement("div")
let buttonProducts = document.createElement("button")
let buttonContacts = document.createElement("button")
let main = document.createElement("main")
let sectionPaintings = document.createElement("section")
let titlePaintings = document.createElement("h1")
let sectionActionFigures = document.createElement("section")
let titleActionFigures = document.createElement("h1")


// Atribuindo valor aos elementos
logoSite.src = "./logo.svg" 
buttonProducts.innerText = "Products"
buttonContacts.innerText = "Contacts"
titlePaintings.innerText = "Paintings"
titleActionFigures.innerText = "Action Figures"


// Atribuindo classes aos elementos
logoSite.className = "logo"
buttonProducts.className = "botao1"
buttonContacts.className = "botao2"
main.className = "container"
sectionPaintings.className = "secao-list-Frames"
sectionActionFigures.className = "secao-list-Figure"


// Determinando a hierarquia dos elementos
document.querySelector('body').appendChild(nav)
document.querySelector('body').appendChild(main)
nav.appendChild(logoSite)
nav.appendChild(div)
div.appendChild(buttonProducts)
div.appendChild(buttonContacts)
main.appendChild(sectionPaintings)
main.appendChild(sectionActionFigures)
sectionPaintings.appendChild(titlePaintings)
sectionActionFigures.appendChild(titleActionFigures)



////////// PENSANDO NAS FUNCIONALIDADES //////////
// Criando Lista itens
let itens = [
    produto1 = {
        image: './assets/img/painting/clock.jpg',
        name: 'Smartwatch',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto2 = {
        image: './assets/img/painting/gamepad.jpg',
        name: 'Controle Playstation',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto3 = {
        image: './assets/img/painting/personagem.jpg',
        name: 'Robot',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto4 = {
        image: './assets/img/actions/animewoman.jpg',
        name: 'Anime Woman',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto5 = {
        image: './assets/img/actions/dragonballpersonagem.jpg',
        name: 'Goku Super Saiyajin',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto6 = {
        image: './assets/img/actions/starwarspersonagem.jpg',
        name: 'Sr Yoda',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto1 = {
        image: './assets/img/painting/clock.jpg',
        name: 'Smartwatch',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto2 = {
        image: './assets/img/painting/gamepad.jpg',
        name: 'Controle Playstation',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto3 = {
        image: './assets/img/painting/personagem.jpg',
        name: 'Robot',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto4 = {
        image: './assets/img/actions/animewoman.jpg',
        name: 'Anime Woman',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto5 = {
        image: './assets/img/actions/dragonballpersonagem.jpg',
        name: 'Goku Super Saiyajin',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto6 = {
        image: './assets/img/actions/starwarspersonagem.jpg',
        name: 'Sr Yoda',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto1 = {
        image: './assets/img/painting/clock.jpg',
        name: 'Smartwatch',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto2 = {
        image: './assets/img/painting/gamepad.jpg',
        name: 'Controle Playstation',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto3 = {
        image: './assets/img/painting/personagem.jpg',
        name: 'Robot',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto4 = {
        image: './assets/img/actions/animewoman.jpg',
        name: 'Anime Woman',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto5 = {
        image: './assets/img/actions/dragonballpersonagem.jpg',
        name: 'Goku Super Saiyajin',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto6 = {
        image: './assets/img/actions/starwarspersonagem.jpg',
        name: 'Sr Yoda',
        price: 'R$100,00',
        type: 'Action Figures'
    },
];


// Criando listas listFigures e listFrames
let listFrames = []
let listFigures = []


// Criando função separaItens
function separaItens(list){
    for (let i=0;i<list.length;i+=1){
        if(list[i].type == "Painting"){
            listFrames.push(list[i])
        } else if(list[i].type == "Action Figures")
        listFigures.push(list[i])
    }
}
separaItens(itens)

let secaolistFigure = document.getElementsByClassName('secao-list-Figure')[0]
let secaolistFrames = document.getElementsByClassName('secao-list-Frames')[0]



////////// PENSANDO NA SOLUÇÃO //////////
// Função
function adicionaListaNasSecoes(list, section){
    // Criando a Lista
    let lista = document.createElement('ul')
    lista.className = "lista" 
    for(let i = 0; i < list.length; i++){
        // Criando o elemento de lista
            let elementoLista0 = document.createElement('li')
            elementoLista0.className = "elementoDaLista"
        // Criando um elemento do tipo span para renderizar o nome
            let image = document.createElement('img')
            let nome = document.createElement('h2')
            let price = document.createElement('p')
        // Atribuindo classes aos elementos
            image.className = "imagemDoItem"
            nome.className = "nomeDoItem"
            price.className = "precoDoItem"
        // Inserindo um valor ao nosso span, usando o valor nome do nosso objeto. 
            image.src = `${list[i].image}`
            nome.innerText = `${list[i].name}`
            price.innerText = `${list[i].price}`
        // Inserimos no nosso elemento de lista, o elemento span//já com o valor nome do nosso objeto.  
            elementoLista0.appendChild(image)
            elementoLista0.appendChild(nome)
            elementoLista0.appendChild(price)
        // Inserimos o nosso elemento de lista, já com o nosso elemento//span a nossa secao de produtos 'secao-list-figures'. 
            lista.appendChild(elementoLista0)
        }        
        section.appendChild(lista)
}
adicionaListaNasSecoes(listFrames, secaolistFrames)
adicionaListaNasSecoes(listFigures, secaolistFigure)



