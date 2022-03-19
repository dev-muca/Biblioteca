const elements = {
  user: document.querySelector("#txtUser"),
  pass: document.querySelector("#txtPassword"),
  btnShowPassword: document.querySelector("#lblPassword"),
  chkRemember: document.querySelector("#chkRememberMe"),
  btnAccess: document.querySelector("#btnLogin"),
};

elements.btnShowPassword.addEventListener("click", () => {
  if (elements.pass.type === "password") {
    elements.pass.type = "text";
    elements.btnShowPassword.innerHTML = `<i id="show" class="fa-solid fa-eye">`;
  } else {
    elements.pass.type = "password";
    elements.btnShowPassword.innerHTML = `<i id="hidden" class="fa-solid fa-eye-slash"></i>`;
  }
});

elements.chkRemember.addEventListener("click", () => {
  const tempUser = {
    username: elements.user.value,
    password: elements.pass.value,
    remember: elements.chkRemember.value,
  };

  elements.chkRemember.checked
    ? localStorage.setItem("tempUser", JSON.stringify(tempUser))
    : localStorage.removeItem("tempUser", JSON.stringify(tempUser));
});

window.addEventListener("load", () => {
  const tempUser = JSON.parse(localStorage.getItem("tempUser"));
  if (tempUser != null) {
    elements.user.value = tempUser.username;
    elements.pass.value = tempUser.password;
    tempUser.remember == "on" ? (elements.chkRemember.checked = true) : (elements.chkRemember.checked = false);
  }
});

function error(element) {
  element.classList.add("error");
  setTimeout(() => {
    element.classList.remove("error");
  }, 2000);
}

function loadHome() {
  setTimeout(() => {
    window.location.assign("/home.html");
  }, 1500);
}

elements.btnAccess.addEventListener("click", () => {
  const tempUser = {
    username: elements.user.value,
    password: elements.pass.value,
  };

  if ((tempUser.username === "user") & (tempUser.password === "1234")) {
    console.warn("Acessou!");
    loadHome();
  } else {
    if (tempUser.username !== "user") {
      error(elements.user);
    } else {
      error(elements.pass);
    }
  }
});
