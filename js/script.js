// 1. prendo i miei elementi per renderli dinamici: immagini e bottoni

const images = [
  "img/01.webp",
  "img/02.webp",
  "img/03.webp",
  "img/04.webp",
  "img/05.webp",
  "img/06.webp",

]

const containerSlider = document.querySelector(".container");

const buttonTop = document.querySelector("button-top");
const buttonBottom = document.querySelector("button-bottom");

// 2. creo un ciclo che ad ogni interazione mostri un'immagine

for(i = 0; i < images.length; i++) {
  let image = images[i];


  containerSlider.innerHTML += `<img src="{$(image)}" class="w-100 h-100 object-fit-cover img-fluid hide">`
  console.log(image);

}