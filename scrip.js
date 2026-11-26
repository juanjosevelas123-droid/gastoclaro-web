document.addEventListener("DOMContentLoaded", () => {
  const formLogin = document.getElementById("formLogin");
  const salirBtn = document.getElementById("salirBtn");

  if (formLogin) {
    formLogin.addEventListener("submit", (e) => {
      e.preventDefault();

      const correo = document.getElementById("correo").value.trim();
      const clave = document.getElementById("clave").value.trim();
      const errorLogin = document.getElementById("errorLogin");

      if (!correo || !clave) {
        errorLogin.textContent = "Completa tu correo/usuario y contraseña.";
        return;
      }

      if (correo === "juan@gastoclaro.bo" && clave === "clave2026") {
        errorLogin.textContent = "";
        localStorage.setItem("logueado", "si");
        window.location.href = "pages/inicio.html";
      } else {
        errorLogin.textContent = "Datos incorrectos. Revisa e intenta otra vez.";
      }
    });
  }

  if (salirBtn) {
    if (localStorage.getItem("logueado") !== "si") {
      window.location.href = "../index.html";
    }

    salirBtn.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("logueado");
      window.location.href="../index.html";
    });
  }
});