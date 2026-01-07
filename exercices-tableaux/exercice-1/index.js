// Afficher tous les éléments du tableau animals avec la syntaxe simple
let animals = ["Dog", "Cat", "Spider", "Bat", "Snake", "Bear"];
for(let i = 0; i < animals.length; i++)
{
	console.log(animals[i]);
}

// Afficher tous les éléments du tableau gods avec la syntaxe for ... of
let gods = ["Zeus", "Persephone", "Dyonisos", "Artemis", "Ares"];
for(let animal of animals)
{
	console.log(animal);
}

