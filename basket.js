"use strict";

import { array } from "./sign.js";

const basket_btn = document.querySelector(".bi-cart4");
const popup_basket = document.querySelector(".header__popup-basket");
const basket_cards = document.querySelector(".basket__cards");

basket_btn.addEventListener("click", () => {
  popup_basket.style.display = "block";

  basket_cards.innerHTML = "";

  let data = [];

  for (let [key, value] of array) {
    data.push(value);
  }

  const unique = data.filter(
    (obj, idx, arr) => idx === arr.findIndex((t) => t.id === obj.id)
  ); // удаление повторных элементов из массива с вбыранными карточками

  for (let element of unique) {
    let card = document.createElement("div");
    let image = document.createElement("img");
    let title = document.createElement("h2");
    let sity = document.createElement("p");
    let input = document.createElement("p");
    let price = document.createElement("p");
    let transport = document.createElement("p");
    let div = document.createElement("div");
    let count = document.createElement("p");
    let minus = document.createElement("p");
    let plus = document.createElement("p");

    basket_cards.appendChild(card);
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(input);
    card.appendChild(sity);
    card.appendChild(price);
    card.appendChild(transport);
    card.appendChild(div);
    div.appendChild(minus);
    div.appendChild(count);
    div.appendChild(plus);

    card.className = "header__card";
    image.className = "header__card-image";
    input.className = "header__card-input";
    title.className = "header__card-title";
    sity.className = "header__card-sity";
    price.className = "header__card-price";
    transport.className = "header__card-transport";
    div.className = "header__card-div";
    count.className = "header__card-count";
    minus.className = "card-minus";
    plus.className = "card-plus";

    image.src = element.img;
    input.textContent = "откуда: " + element.input;
    title.textContent = element.hotel;
    sity.textContent = element.output + "/" + element.sity;
    price.textContent = "Цена: " + element.price + "₽";
    transport.textContent = "Транспорт: " + element.transport;
    count.textContent = 1;
    minus.textContent = "-";
    plus.textContent = "+";

    minus.addEventListener("click", () => {
      count.textContent = Number(count.textContent) - 1;
      if (count.textContent == 0) {
        for (let [key, value] of array) {
          if (value == element) {
            array.delete(key);
            console.log(array);
          }
        }
        card.remove();
      } else {
        price.textContent =
          "Цена: " + element.price * Number(count.textContent) + "₽";
      }
    });

    plus.addEventListener("click", () => {
      count.textContent = Number(count.textContent) + 1;
      price.textContent =
        "Цена: " + element.price * Number(count.textContent) + "₽";
    });
  }
});

const basket_close = document.querySelector(".bi-x-circle-fill-3");

basket_close.addEventListener("click", () => {
  popup_basket.style.display = "none";
});
