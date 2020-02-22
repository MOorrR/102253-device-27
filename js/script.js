var link = document.querySelector(".form-link");

var popup = document.querySelector(".modal-form");
var close = popup.querySelector(".modal-close");

var formFeedback = popup.querySelector("form");
var nameFeedback = formFeedback.querySelector("[name=name]");
var emailFeedback = formFeedback.querySelector("[name=email]");
var messageFeedback = formFeedback.querySelector("[name=message]");

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch {
  isStorageSupport = false;
}

link.addEventListener("click", function(ev) {
  ev.preventDefault();
  popup.classList.add("modal-show");
  if (storageName) {
    nameFeedback.value = storageName;
    emailFeedback.focus();
  }
  if (storageEmail) {
    emailFeedback.value = storageEmail;
    messageFeedback.focus();
  } else {
    nameFeedback.focus();
  }
});

close.addEventListener("click", function() {
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

formFeedback.addEventListener("submit", function(ev) {
  if (!nameFeedback.value || !emailFeedback.value) {
    ev.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", nameFeedback.value);
      localStorage.setItem("email", emailFeedback.value);
    }
  }
});

window.addEventListener("keydown", function(ev) {
  if (ev.keyCode == 27) {
    if (popup.classList.contains("modal-show")) {
      ev.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

var mapLink = document.querySelector(".map-link");

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function(ev) {
  ev.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function() {
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(ev) {
  if (ev.keyCode == 27) {
    if (mapPopup.classList.contains("modal-show")) {
      ev.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});
