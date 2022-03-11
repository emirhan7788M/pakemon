var elForm = document.querySelector(".forms__container");
var elInput = document.querySelector(".forms__input")
var elSelectOrder = document.querySelector(".forms__select__item");
var elList = document.querySelector('.cards__item');


var pokemonTypes = [];
for (var i = 0; i < pokemons.length; i++) {

    for (var j = 0; j < pokemons[i].type.length; j++) {
        if (!pokemonTypes.includes(pokemons[i].type[j])) {
            pokemonTypes.push(pokemons[i].type[j]);
        }
    }
}


function elementCreator(tagName) {
    return document.createElement(tagName);
}
function pokemonCharacters() {

    var item = elementCreator("li");
    var img = document.createElement('img');
    var line = document.createElement('hr');
    var title = document.createElement('h3');
    var type = document.createElement('p');
    var weight = document.createElement('span');
    var height = document.createElement('span');

    img.src = pokemons[i].img;
    title.textContent = pokemons[i].name;
    type.textContent = pokemons[i].type;
    weight.textContent = pokemons[i].weight;
    height.textContent = pokemons[i].height;

    elList.appendChild(item);
    item.appendChild(img);
    item.appendChild(title);
    item.appendChild(type);
    item.appendChild(weight);
    item.appendChild(height);
}

for (var i = 0; i < pokemons.length; i++) {
    pokemonCharacters(pokemons[i]);
}














































