const btnShowPassword = document.querySelector("#lblPassword");
const chkRemember = document.querySelector("#chkRememberMe");
const btnLogin = document.querySelector("#btnLogin");

const user = document.querySelector("#txtUser");
const pass = document.querySelector("#txtPassword");

btnShowPassword.addEventListener("click", () => {
  if (pass.type === "password") {
    pass.type = "text";
    btnShowPassword.innerHTML = `<i id="hidden" class="fa-solid fa-eye-slash"></i>`;
  } else {
    pass.type = "password";
    btnShowPassword.innerHTML = `<i id="show" class="fa-solid fa-eye">`;
  }
});

btnLogin.addEventListener("click", () => {
  window.location.assign("./index.html");
  if (user.value === "Murilo") {
    return null;
  } else {
    user.classList.add("error");
    setTimeout(() => {
      user.classList.remove("error");
    }, 2500);
  }
});

chkRemember.addEventListener("click", () => {
  const tempUser = {
    usuario: user.value,
    senha: pass.value,
    remember: chkRemember.value,
  };

  chkRemember.checked
    ? localStorage.setItem("tempUser", JSON.stringify(tempUser))
    : localStorage.removeItem("tempUser", JSON.stringify(tempUser));
});

window.addEventListener("load", () => {
  const tempUser = JSON.parse(localStorage.getItem("tempUser")) ?? null;
  console.log(tempUser.usuario, tempUser.senha);
  user.value = tempUser.usuario;
  pass.value = tempUser.senha;
  tempUser.remember == "on" ? (chkRemember.checked = true) : (chkRemember.checked = false);
});
