"use strict";

import { tikets } from "./data.js";
import { user } from "./sign.js";


const inputs = document.querySelectorAll(".main__box-content");
let txt1 = document.querySelector("#txt-train");
let txt2 = document.querySelector("#txt-plane");

for (let inp of inputs) {
  inp.addEventListener("click", (event) => {
    switch (event.target.id) {
      case "inp-train":
        txt1.style.color = event.target.checked ? "#ff7300" : "#e5e2e1";
        break;

      case "inp-plane":
        txt2.style.color = event.target.checked ? "#ff7300" : "#e5e2e1";
        break;
    }
  });
}

const input = document.querySelector("#input");
const output = document.querySelector("#output");
const train = document.querySelector("#inp-train");
const plane = document.querySelector("#inp-plane");
const container = document.querySelector(".main__box-cards");
const btn_filter = document.querySelector(".main__btn-seach");

btn_filter.addEventListener("click", () => {
  filter(input.value, output.value, train, plane);
  if (document.querySelector(".main__card")) {
    let rem = document.querySelectorAll(".main__card");
    for (let el of rem) {
      el.remove();
    }
  }

  for (let i = 0; i < filter_tikets.length; i++) {
    let card = document.createElement("div");
    let image = document.createElement("img");
    let title = document.createElement("h2");
    let sity = document.createElement("p");
    let date = document.createElement("p");
    let price = document.createElement("p");
    let transport = document.createElement("p");
    let card_button = document.createElement("p");

    container.appendChild(card);
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(sity);
    card.appendChild(date);
    card.appendChild(price);
    card.appendChild(transport);
    card.appendChild(card_button);

    card.className = "main__card";
    image.className = "card__image";
    title.className = "card__title";
    sity.className = "card__sity";
    date.className = "card__date";
    price.className = "card__price";
    transport.className = "card__transport";
    card_button.className = "card__basket";

    card_button.addEventListener("click", () => {
      // console.log(user.basket)
      user.basket.set(user.basket.size, filter_tikets[i]);
      // console.log(user);
    }); // функционал кнопки для добавления в корзину
    image.src = filter_tikets[i].img;
    title.textContent = filter_tikets[i].hotel;
    sity.textContent = filter_tikets[i].output + "/" + filter_tikets[i].sity;
    date.textContent = "Дата: " + filter_tikets[i].date;
    price.textContent = "Цена: " + filter_tikets[i].price + "₽";
    transport.textContent = "Транспорт: " + filter_tikets[i].transport;
    card_button.textContent = "Добавить в корзину";
  }
});

let filter_tikets = [];

let filter = (input, output, train, plane) => {
  filter_tikets = [];
  for (let t of tikets) {
    if (
      input == t.input &&
      output == t.output &&
      ((train.checked == true
        ? txt1.textContent.replace(/\s+/g, "") == t.transport
        : "") ||
        (plane.checked == true
          ? txt2.textContent.replace(/\s+/g, "") == t.transport
          : ""))
    ) {
      filter_tikets.push(t);
    }
  }
  return filter_tikets;
};
