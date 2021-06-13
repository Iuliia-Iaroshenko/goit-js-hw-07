const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const itemRef = document.querySelector("#ingredients");

const newIngredients = ingredients.map((elem) => {
  const liItem = document.createElement("li");
  liItem.textContent = elem;

  return liItem;
});

itemRef.append(...newIngredients);

console.log(itemRef);