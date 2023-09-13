// 1. prendo i miei elementi per renderli dinamici: immagini e bottoni

const images = [
 '../img/01.webp',
 "../img/02.webp",
 "../img/03.webp",
 "../img/04.webp",
 "../img/05.webp",
]

console.log(images);

const containerSlider = document.querySelector(".container");

containerSlider = " ";

const buttonTop = document.querySelector("button-top");
const buttonBottom = document.querySelector("button-bottom");

// 3 creo un contatore perché ad ogni passaggio la classe hide andrà tolta dall'immagine, inserisco una classe item all'immagine



let counter = 0;

// 2. creo un ciclo che ad ogni interazione mostri un'immagine

for(i = 0; i < images.length; i++) {
  let image = images[i];

  containerSlider.innerHTML += `<img src="${image} class="w-100 h-100 object-fit-contain img-fluid item hide">`
  console.log(image);


}

// 4. salvo le immagini in un array

const imagesCollection = document.getElementsByClassName("item");
console.log(imagesCollection[0]);

imagesCollection[counter].classList.remove("hide");