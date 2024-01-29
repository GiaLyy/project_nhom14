
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password_confirm = document.getElementById("password_confirm");

const formSignUp = document.getElementById("form-signUp");
formSignUp.addEventListener("submit", (e) => {
  e.preventDefault();

  //check username
  if (username.value.length < 8 || username.value.length > 20) {
    alert("username có 8 đến 20 kí tự");
    username.focus();
    return false;
  }

  //check password
  if (password.value.length < 8 || password.value.length > 20) {
    alert("password có 8 đến 20 kí tự");
    password.focus();
    return false;
  }

  //check password-confirm
  if (password_confirm.value != password.value) {
    alert("password_confirm không trùng khớp");
    password_confirm.focus();
    return false;
  }
  const user = {
    username: username.value,
    email: email.value,
    password: password.value,
  };

  localStorage.setItem(email.value, JSON.stringify(user));
  alert("Đăng Kí Thành Công");
});

const emailLogin = document.getElementById("email-login");
const passwordLogin = document.getElementById("password-login");
const formSignIn = document.getElementById("form-signIn");
formSignIn.addEventListener("submit", (e) => {
  e.preventDefault();
  if (emailLogin.value == "") {
    alert("Vui Lòng Nhập email");
  } else {
    const user = JSON.parse(localStorage.getItem(emailLogin.value));
    if (
      user.password == passwordLogin.value &&
      user.email == emailLogin.value
    ) {
      // luu user dang nhap vao session storage
      sessionStorage.setItem("user", JSON.stringify(user));
      alert("Đăng Nhập Thành Công");
      window.location.href = "index_login.html";
    } else {
      alert("Đăng Nhập Thất Bại");
    }
  }
});
