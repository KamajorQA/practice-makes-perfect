class Card {
  constructor(dragonInfo) {
    this._data = dragonInfo;
  }
  _getTemplate() {
    return document
      .querySelector("#card-template")
      .content.querySelector(".card");
  }
  getElement() {
    this.element = this._getTemplate().cloneNode(true);
    const cardTitle = this.element.querySelector(".card__name");
    const cardImage = this.element.querySelector(".card__image");
    cardImage.src = this._data.img_link;
    cardTitle.textContent = this._data.name;
    return this.element;
  }
}
