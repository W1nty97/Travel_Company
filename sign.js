"use strict";

const sign_popup = document.querySelector(".header__box-popup");
const sign_btn_open = document.querySelector(".header__sign-text");
const sign_btn_close = document.querySelector(".bi-x-circle-fill");

sign_btn_open.addEventListener("click", () => {
  sign_popup.style.display = "block";
});
sign_btn_close.addEventListener("click", () => {
  sign_popup.style.display = "none";
});

const register_btn = document.querySelector(".header__popup-sign");
const email_inp = document.querySelector("#email");
const pass_inp = document.querySelector("#pass");

let users = [];

let login_user = (login, pass) => {
  for (let u of users) {
    if (login == u.login && pass == u.pass) {
      return {
        ok: true,
        massage: "Добро пожаловать, " + u.nickname,
        nickname: u.nickname,
      };
    }
  }
  return {
    ok: false,
    error_message: "Указан неверный логин или пароль",
  };
};

register_btn.addEventListener("click", () => {
  let login_result = login_user(email_inp.value, pass_inp.value);
  if (login_result.ok) {
    alert(login_result.massage);
    pass_inp.value = "";
    email_inp.value = "";
    sign_popup.style.display = "none";
    sign_btn_open.textContent = login_result.nickname;
  } else {
    alert(login_result.error_message);
  }
});

const sign_popup_2 = document.querySelector(".header__box-popup-2");
const sign_btn_open_2 = document.querySelector(".header__popup-register");
const sign_btn_close_2 = document.querySelector(".bi-x-circle-fill-2");

sign_btn_open_2.addEventListener("click", () => {
  sign_popup.style.display = "none";
  sign_popup_2.style.display = "block";
});
sign_btn_close_2.addEventListener("click", () => {
  sign_popup_2.style.display = "none";
});

const register_btn_2 = document.querySelector(".header__popup-sign-2");
const name_inp = document.querySelector("#name");
const email_inp_2 = document.querySelector("#email2");
const pass_inp_2 = document.querySelector("#pass2");

let register_user = (name, login, pass) => {
  for (let u of users) {
    if (login == u.login) {
      return { ok: false, error_message: "Логин уже занят" };
    }
  }
  if (name < 1) {
    return { ok: false, error_message: "Заполните поле 'Имя' " };
  } else if (login.length < 8) {
    return {
      ok: false,
      error_message: "Логин должен быть не менее 8 символов",
    };
  } else if (pass.length < 6) {
    return {
      ok: false,
      error_message: "Пароль должен быть не менее 6 символов",
    };
  } else {
    users.push({
      id: users.length,
      nickname: name,
      login: login,
      pass: pass,
    });
  }
  return { ok: true };
};

register_btn_2.addEventListener("click", () => {
  let registration_result = register_user(
    name_inp.value,
    email_inp_2.value,
    pass_inp_2.value
  );
  if (registration_result.ok) {
    sign_popup_2.style.display = "none";
    name_inp.value = "";
    email_inp_2.value = "";
    pass_inp_2.value = "";
    sign_popup.style.display = "block";
  } else {
    alert(registration_result.error_message);
  }
});
