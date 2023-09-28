const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById('ingredients');

const fragment = document.createDocumentFragment(); // Фрагмент для оптимізації додавання елементів

ingredients.forEach((ingredient) => {
  const listItem = document.createElement('li'); // Новий <li> елемент
  listItem.textContent = ingredient; // Текстовий вміст з масиву
  listItem.classList.add('item'); // Додаємо клас "item" до <li>
  fragment.appendChild(listItem); // Додаємо <li> до фрагмента
});

ingredientsList.appendChild(fragment);І
