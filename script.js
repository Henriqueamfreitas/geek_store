////////// PENSANDO NA MARCAÇÃO //////////
// Criando os elementos e atribuindo-os às variáveis
let nav = document.createElement("nav")
let logoSite = document.createElement("img")
let buttonProducts = document.createElement("button")
let buttonContacts = document.createElement("button")

let main = document.createElement("main")
let sectionPaintings = document.createElement("section")
let titlePaintings = document.createElement("h1")
// let paintingsList = document.createElement("ul")
// let item_1 = document.createElement("li")
// let imagemItem_1 = document.createElement("img")
// let nomeItem_1 = document.createElement("p")
// let valorItem_1 = document.createElement("p")
// let item_2 = document.createElement("li")
// let imagemItem_2 = document.createElement("img")
// let nomeItem_2 = document.createElement("p")
// let valorItem_2 = document.createElement("p")
// let item_3 = document.createElement("li")
// let imagemItem_3 = document.createElement("img")
// let nomeItem_3 = document.createElement("p")
// let valorItem_3 = document.createElement("p")

let sectionActionFigures = document.createElement("section")
let titleActionFigures = document.createElement("h1")
// let actionFiguresList = document.createElement("ul")
// let item_4 = document.createElement("li")
// let imagemItem_4 = document.createElement("img")
// let nomeItem_4 = document.createElement("p")
// let valorItem_4 = document.createElement("p")
// let item_5 = document.createElement("li")
// let imagemItem_5 = document.createElement("img")
// let nomeItem_5 = document.createElement("p")
// let valorItem_5 = document.createElement("p")
// let item_6 = document.createElement("li")
// let imagemItem_6 = document.createElement("img")
// let nomeItem_6 = document.createElement("p")
// let valorItem_6 = document.createElement("p")


// Atribuindo valor aos elementos
logoSite.src = "./logo.svg" 
buttonProducts.innerText = "Products"
buttonContacts.innerText = "Contacts"

titlePaintings.innerText = "Paintings"
// imagemItem_1.src = "./assets/img/painting/clock.jpg"
// nomeItem_1.innerText = "SmartWatch"
// valorItem_1.innerText = "R$100,00"
// imagemItem_2.src = "./assets/img/painting/gamepad.jpg"
// nomeItem_2.innerText = "Controle Playstation"
// valorItem_2.innerText = "R$100,00"
// imagemItem_3.src = "./assets/img/painting/personagem.jpg"
// nomeItem_3.innerText = "Robot"
// valorItem_3.innerText = "R$100,00"

titleActionFigures.innerText = "Action Figures"
// imagemItem_4.src = "./assets/img/actions/animewoman.jpg"
// nomeItem_4.innerText = "Anime Woman"
// valorItem_4.innerText = "R$100,00"
// imagemItem_5.src = "./assets/img/actions/dragonballpersonagem.jpg"
// nomeItem_5.innerText = "Goku Super Saiyajin"
// valorItem_5.innerText = "R$100,00"
// imagemItem_6.src = "./assets/img/actions/starwarspersonagem.jpg"
// nomeItem_6.innerText = "Sr Yoda"
// valorItem_6.innerText = "R$100,00"


// Atribuindo classes aos elementos
logoSite.className = "logo"
buttonProducts.className = "botao"
buttonContacts.className = "botao"

main.className = "container"
sectionActionFigures.className = "secao-list-Frames"
// titlePaintings.className = "tituloSecao"
// paintingsList.className = "lista"
// item_1.className = "item"
// imagemItem_1.className = "imagemItem"
// nomeItem_1.className = "nomeItem"
// valorItem_1.className = "precoItem"
// item_2.className = "item"
// imagemItem_2.className ="imagemItem"
// nomeItem_2.className = "nomeItem"
// valorItem_2.className = "precoItem"
// item_3.className = "item"
// imagemItem_3.className = "imagemItem"
// nomeItem_3.className = "nomeItem"
// valorItem_3.className = "precoItem"

sectionActionFigures.className = "secao-list-Figure"
// titleActionFigures.className = "tituloSecao"
// actionFiguresList.className = "lista"
// item_4.className = "item"
// imagemItem_4.className = "imagemItem"
// nomeItem_4.className = "nomeItem"
// valorItem_4.className =
// item_5.className = "item"
// imagemItem_5.className = "imagemItem"
// nomeItem_5.className = "nomeItem"
// valorItem_5.className =
// item_6.className = "item"
// imagemItem_6.className = "imagemItem"
// nomeItem_6.className = "nomeItem"
// valorItem_6.className = "precoItem"



// Determinando a hierarquia dos elementos
document.querySelector('body').appendChild(nav)
document.querySelector('body').appendChild(main)

nav.appendChild(logoSite)
nav.appendChild(buttonProducts)
nav.appendChild(buttonContacts)

main.appendChild(sectionPaintings)
main.appendChild(sectionActionFigures)

sectionPaintings.appendChild(titlePaintings)
// sectionPaintings.appendChild(paintingsList)
// paintingsList.appendChild(item_1)
// item_1.appendChild(imagemItem_1)
// item_1.appendChild(nomeItem_1)
// item_1.appendChild(valorItem_1)
// paintingsList.appendChild(item_2)
// item_2.appendChild(imagemItem_2)
// item_2.appendChild(nomeItem_2)
// item_2.appendChild(valorItem_2)
// paintingsList.appendChild(item_3)
// item_3.appendChild(imagemItem_3)
// item_3.appendChild(nomeItem_3)
// item_3.appendChild(valorItem_3)

sectionActionFigures.appendChild(titleActionFigures)
// sectionActionFigures.appendChild(actionFiguresList)
// actionFiguresList.appendChild(item_4)
// item_4.appendChild(imagemItem_4)
// item_4.appendChild(nomeItem_4)
// item_4.appendChild(valorItem_4)
// actionFiguresList.appendChild(item_5)
// item_5.appendChild(imagemItem_5)
// item_5.appendChild(nomeItem_5)
// item_5.appendChild(valorItem_5)
// actionFiguresList.appendChild(item_6)
// item_6.appendChild(imagemItem_6)
// item_6.appendChild(nomeItem_6)
// item_6.appendChild(valorItem_6)






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
    }
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
console.log(listFrames)
console.log(listFigures)
let secaolistFigure = document.getElementsByClassName('secao-list-Figure')[0]
let secaolistFrames = document.getElementsByClassName('secao-list-Frames')[0]
// console.log(secaolistFigure)






////////// PENSANDO NA SOLUÇÃO //////////
// listFrames
for(let i = 0; i < listFrames.length; i++){
// Criando o elemento de lista
    let elementoLista0 = document.createElement('li')
    let elementoLista1 = document.createElement('li')
    let elementoLista2 = document.createElement('li')
// Criando um elemento do tipo span para renderizar o nome
    let image = document.createElement('img')
    let nome = document.createElement('span')
    let price = document.createElement('span')
// Inserindo um valor ao nosso span, usando o valor nome do nosso objeto. 
    image.src = `${listFrames[i].image}`
    nome.innerText = `${listFrames[i].name}`
    price.innerText = `${listFrames[i].price}`
// Inserimos no nosso elemento de lista, o elemento span//já com o valor nome do nosso objeto.  
    elementoLista0.appendChild(image)
    elementoLista1.appendChild(nome)
    elementoLista2.appendChild(price)
// Inserimos o nosso elemento de lista, já com o nosso elemento//span a nossa secao de produtos 'secao-list-figures'. 
    secaolistFigure.appendChild(elementoLista0)
    secaolistFigure.appendChild(elementoLista1)
    secaolistFigure.appendChild(elementoLista2)
}


// listFigure
for(let i = 0; i < listFigures.length; i++){
    // Criando o elemento de lista
        let elementoLista0 = document.createElement('li')
        let elementoLista1 = document.createElement('li')
        let elementoLista2 = document.createElement('li')
    // Criando um elemento do tipo span para renderizar o nome
        let image = document.createElement('img')
        let nome = document.createElement('span')
        let price = document.createElement('span')
    // Inserindo um valor ao nosso span, usando o valor nome do nosso objeto. 
        image.src = `${listFigures[i].image}`
        nome.innerText = `${listFigures[i].name}`
        price.innerText = `${listFigures[i].price}`
    // Inserimos no nosso elemento de lista, o elemento span//já com o valor nome do nosso objeto.  
        elementoLista0.appendChild(image)
        elementoLista1.appendChild(nome)
        elementoLista2.appendChild(price)
    // Inserimos o nosso elemento de lista, já com o nosso elemento//span a nossa secao de produtos 'secao-list-figures'. 
        secaolistFigure.appendChild(elementoLista0)
        secaolistFigure.appendChild(elementoLista1)
        secaolistFigure.appendChild(elementoLista2)
    }
