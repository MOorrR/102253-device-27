var link = document.querySelector(".form-link");

var popup = document.querySelector(".modal-form");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var name = form.querySelector("[name=name]");
var email = form.querySelector("[name=email]");
var message = form.querySelector("[name=message]");
console.log(name);

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
    name.value = storageName;
    email.focus();
  } else {
    if (storageEmail) {
      email.value = storageEmail;
      message.focus();
    } else {
      name.focus();
    }
  }
});

close.addEventListener("click", function() {
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(ev) {
  if (!name.value || !email.value) {
    ev.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", name.value);
      localStorage.setItem("email", email.value);
    }
  }
});
