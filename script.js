let nav = document.createElement('nav')
let logoSite = document.createElement('img')
let div = document.createElement('div')
let buttonProducts = document.createElement('button')
let buttonContacts = document.createElement('button')
let main = document.createElement('main')
let sectionPaintings = document.createElement('section')
let titlePaintings = document.createElement('h1')
let sectionActionFigures = document.createElement('section')
let titleActionFigures = document.createElement('h1')

logoSite.src = './logo.svg' 
buttonProducts.innerText = 'Products'
buttonContacts.innerText = 'Contacts'
titlePaintings.innerText = 'Paintings'
titleActionFigures.innerText = 'Action Figures'

logoSite.className = 'logo'
buttonProducts.className = 'button1'
buttonContacts.className = 'button2'
main.className = 'container'
sectionPaintings.className = 'section-list-Frames'
sectionActionFigures.className = 'section-list-Figure'

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

let itens = [
    product1 = {
        image: './assets/img/painting/clock.jpg',
        name: 'Smartwatch',
        price: 'R$100,00',
        type: 'Painting'
    },
    product2 = {
        image: './assets/img/painting/gamepad.jpg',
        name: 'Controle Playstation',
        price: 'R$100,00',
        type: 'Painting'
    },
    product3 = {
        image: './assets/img/painting/personagem.jpg',
        name: 'Robot',
        price: 'R$100,00',
        type: 'Painting'
    },
    product4 = {
        image: './assets/img/actions/animewoman.jpg',
        name: 'Anime Woman',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    product5 = {
        image: './assets/img/actions/dragonballpersonagem.jpg',
        name: 'Goku Super Saiyajin',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    product6 = {
        image: './assets/img/actions/starwarspersonagem.jpg',
        name: 'Sr Yoda',
        price: 'R$100,00',
        type: 'Action Figures'
    },
];

let listFrames = []
let listFigures = []

function separateItens(list){
    for (let i=0;i<list.length;i+=1){
        if(list[i].type === 'Painting'){
            listFrames.push(list[i])
        } else if(list[i].type === 'Action Figures')
        listFigures.push(list[i])
    }
}
separateItens(itens)

let sectionlistFigure = document.getElementsByClassName('section-list-Figure')[0]
let sectionlistFrames = document.getElementsByClassName('section-list-Frames')[0]

function addListIntoSection(list, section){
    let ul = document.createElement('ul')
    ul.className = 'ul' 
    for(let i = 0; i < list.length; i++){
        let elementList = document.createElement('li')
        elementList.className = 'elementList'
        let image = document.createElement('img')
        let itemName = document.createElement('h2')
        let price = document.createElement('p')
        image.className = 'itemImage'
        itemName.className = 'itemName'
        price.className = 'itemPrice'
        
        image.src = `${list[i].image}`
        itemName.innerText = `${list[i].name}`
        price.innerText = `${list[i].price}`

        elementList.appendChild(image)
        elementList.appendChild(itemName)
        elementList.appendChild(price)

        ul.appendChild(elementList)
    }        
    section.appendChild(ul)
}

addListIntoSection(listFrames, sectionlistFrames)
addListIntoSection(listFigures, sectionlistFigure)



