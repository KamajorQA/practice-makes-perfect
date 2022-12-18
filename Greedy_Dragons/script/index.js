const cardContainer = document.querySelector(".cards");

cats.forEach(function (dragonData) {
  const cardInstance = new Card(dragonData);
  const newCardElement = cardInstance.getElement();
  cardContainer.append(newCardElement);
});

const btnOpenPopupForm = document.querySelector("#add");
const formDragonAdd = document.querySelector("#popup-form-item");

const popupAddDragon = new Popup("popup-add-items");
popupAddDragon.setEventListener();

btnOpenPopupForm.addEventListener("click", () => {
  popupAddDragon.open();
});
