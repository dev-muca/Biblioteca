const user = document.querySelector("#txtUser");
const pass = document.querySelector("#txtPassword");
const btnShowPassword = document.querySelector(".icon");
const chkRemember = document.querySelector("#checkbox");
const btnAccess = document.querySelector("#btnLogin");
const iframe = document.querySelector("#show");
const btnForgotPassword = document.querySelector(".forgotPassword");

btnAccess.addEventListener("click", () => {
  alert(`Clicou em ${btnAccess.id}`);
});

btnShowPassword.addEventListener("click", () => {
  if (pass.type === "password") {
    pass.type = "text";
    iframe.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    pass.type = "password";
    iframe.classList.replace("fa-eye", "fa-eye-slash");
  }
});

btnForgotPassword.addEventListener("click", () => {
  const overlay = document.querySelector(".forgotPasswordOverlay");
  overlay.style.display = "block";

  setTimeout(() => {
    document.addEventListener("click", clickOutside);
  }, 250);
});

const clickOutside = (event) => {
  const overlay = document.querySelector(".forgotPasswordOverlay");

  if (!overlay.contains(event.target)) {
    overlay.style.display = "none";
    document.removeEventListener("click", clickOutside);
  }
};

chkRemember.addEventListener("click", () => {
  const tempUser = {
    username: user.value,
    password: pass.value,
    remember: chkRemember.value,
  };

  chkRemember.checked
    ? localStorage.setItem("tempUser", JSON.stringify(tempUser))
    : localStorage.removeItem("tempUser", JSON.stringify(tempUser));
});

window.addEventListener("load", () => {
  const tempUser = JSON.parse(localStorage.getItem("tempUser"));
  if (tempUser != null) {
    user.value = tempUser.username;
    pass.value = tempUser.password;
    tempUser.remember == "on" ? (chkRemember.checked = true) : (chkRemember.checked = false);
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
