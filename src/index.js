import przegladarka from './images/przegladarka.jpg';

const img = document.createElement('img');
img.src = przegladarka;
img.alt = 'Opis obrazka';
img.classList.add('about__picture');

// Dodajesz obrazek do HTML:
document.querySelector('.about').appendChild(img);




// Test import of a JavaScript module
import { example } from '@/js/example'

// Test import of an asset
import webpackLogo from '@/images/webpack-logo.svg'

// Test import of styles
import '@/styles/index.scss'

// Appending to the DOM
const logo = document.createElement('img')
logo.src = webpackLogo

const heading = document.createElement('h1')
heading.textContent = example()

// Test a background image url in CSS
const imageBackground = document.createElement('div')
imageBackground.classList.add('image')

// Test a public folder asset
const imagePublic = document.createElement('img')
imagePublic.src = '/assets/example.png'

const app = document.querySelector('#root')



const firstName = "Daniel";
const age = 34;

console.log(firstName);
console.log(age);
console.log(`Siema, nazywam się ${firstName} i mam ${age} lata`);

const deathStar = {
  diameter: 120000,
  fire: (target) => {
    console.log(`${target} destroyed`);
  },
  isOperating: true,
  levels: 357,
  name: "Death Star",
  population: 10000,
  isLightOn: true,
  commander: {
    name: "Darth Vader",
    age: 44,
  },
};
console.log(deathStar.name);
console.log(deathStar.commander);
deathStar.fire("Rebel Ship");

const humanOne = {
  name: "Daniel",
  age: 34,
  address: {
    street: "Warszawska",
    city: "Białystok",
  },
};

const humanTwo = {
  name: "DaZenek",
  age: 34,
  address: humanOne.address.city,
};

humanTwo.age = 40;
console.log(humanTwo);
console.log(humanOne);

// Poprawione porównanie
if (humanOne.age > humanTwo.age) {
  console.log("Human 1 jest starszy");
}
if (humanOne.age < humanTwo.age) {
  console.log("Human 2 jest starszy");
}

if (humanOne.age === humanTwo.age) {
  console.log("Tyle samo lat");
}

if ("Java" !== "JavaScript") {
  console.log("Java to nie JavaScript"); // Poprawiony warunek i tekst
}

console.log(typeof 2);
console.log(typeof "2");

if (2 == "2") {
  console.log("True");
}

if (humanOne.age === 34 && humanTwo.address) {
  console.log("Zgadza sie!!!");
}

const myNumber = 7;
switch (myNumber) {
  case 7:
    console.log("jestem siódemką");
    break;
  case 9:
    console.log("jestem dziewiątką");
    break;
  default:
    console.log("jestem czymś innym");
}


