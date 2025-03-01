"use strict";

import { arr_bucket } from "./filter.js";

const bucket_btn = document.querySelector(".bi-cart4");
const popup_bucket = document.querySelector(".header__popup-bucket");
const bucket_cards = document.querySelector(".bucket__cards");

bucket_btn.addEventListener("click", () => {
  popup_bucket.style.display = "block";

  bucket_cards.innerHTML = "";

  for (let i = 0; i < arr_bucket.length; i++) {
    if (
      !Array.from(bucket_cards.children).some(
        (card) =>
          card.querySelector(".header__card-title").textContent ===
          arr_bucket[i].hotel
      )
    ) {
      let card = document.createElement("div");
      let image = document.createElement("img");
      let title = document.createElement("h2");
      let sity = document.createElement("p");
      let price = document.createElement("p");
      let transport = document.createElement("p");
      let count = document.createElement("p");

      bucket_cards.appendChild(card);
      card.appendChild(image);
      card.appendChild(title);
      card.appendChild(sity);
      card.appendChild(price);
      card.appendChild(transport);
      card.appendChild(count);

      card.className = "header__card";
      image.className = "header__card-image";
      title.className = "header__card-title";
      sity.className = "header__card-sity";
      price.className = "header__card-price";
      transport.className = "header__card-transport";
      count.className = "header__card-count";

      image.src = arr_bucket[i].img;
      title.textContent = arr_bucket[i].hotel;
      sity.textContent = arr_bucket[i].output + "/" + arr_bucket[i].sity;
      price.textContent = "Цена: " + arr_bucket[i].price;
      transport.textContent = "Транспорт: " + arr_bucket[i].transport;
      count.textContent = "кол-во: " + arr_bucket[i].count;
    }
  }
});

const backet_close = document.querySelector(".bi-x-circle-fill-3");

backet_close.addEventListener("click", () => {
  popup_bucket.style.display = "none";
});
