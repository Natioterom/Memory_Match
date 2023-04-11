 
// return data.forEach(character => {
//   el.insertAdjacentHTML("beforeend", cards(character.image))});
//   .catch(console.error);

// import pokemon from '../data/pokemon/pokemon.js';
// const data = pokemon.items

 import { cards } from './cards.js';
const App = () => {
  const el = document.createElement('div');
  el.className = "App"

   const data = async() =>{
    const fetching = await fetch('./data/pokemon/pokemon.json')
   const x = await  fetching.json()
   const pokemon = [...x.items, ...x.items]
  
   return pokemon.forEach(character => {
       el.innerHTML += `<img class = "img_card"src="${character.image}" >`});
  }   
data()

  
 return el
};

export default App;
