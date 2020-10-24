// --- Форма обратной связи ---

let messageCoordinate = document.querySelector(".button-coordinate");
let messagePopup = document.querySelector(".modal-message");
let messageClose = messagePopup.querySelector(".modal-close");
let messageSurname = messagePopup.querySelector(".message-surname");
let messageForm = messagePopup.querySelector(".message-form");
let messageEmail = messagePopup.querySelector(".message-email");
let messageField = messagePopup.querySelector(".message-field");

messageCoordinate.addEventListener("click", function (evt) {
    evt.preventDefault();
    messagePopup.classList.add("modal-show");
    messageSurname.focus();
});

messageClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    messagePopup.classList.remove("modal-show");
    messagePopup.classList.remove("modal-error");
});

messageForm.addEventListener("submit", function (evt) {
    if (!messageSurname.value || !messageEmail.value || !messageField.value) {
        evt.preventDefault();
        messagePopup.classList.remove("modal-error");
        messagePopup.offsetWidth = messagePopup.offsetWidth;
        messagePopup.classList.add("modal-error");
        
    } else {
        localStorage.setItem("login", messageEmail.value);
    }
});


// --- Оживление карты ---

let mapLink = document.querySelector(".map-link");
let mapPopup = document.querySelector(".modal-map");
let mapClose = document.querySelector(".modal-map-close");

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
});

//

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (messagePopup.classList.contains("modal-show")) {
        evt.preventDefault();
        messagePopup.classList.remove("modal-show");
      }
    }
  });

// --- Реализация открытия модального окна с сообщением Корзины ---

let cartPopup = document.querySelector(".modal-cart");
let cartClose = document.querySelector(".modal-cart-close");

let cartBuys = document.querySelectorAll(".btn-buy");
for (var i = 0; i < cartBuys.length; i++) {

    cartBuys[i].addEventListener("click", function(evt) {
        evt.preventDefault();
        cartPopup.classList.add("modal-show");
    })
};



cartClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-show");
});
