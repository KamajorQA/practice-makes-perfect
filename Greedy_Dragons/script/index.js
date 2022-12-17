const cardContainer = document.querySelector('.cards');

cats.forEach(function(dragonData) {
  const cardInstance = new Card(dragonData);
  const newCardElement = cardInstance.getElement();
  cardContainer.append(newCardElement);
})