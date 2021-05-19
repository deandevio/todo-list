const form = document.querySelector("form");
const emailError = document.querySelector(".email.error");
const passwordError = document.querySelector(".password.error");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Reset errors
  emailError.textContent = "";
  passwordError.textContent = "";

  // Get the values
  const email = form.email.value;
  const password = form.password.value;

  try {
    const result = await fetch("/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await result.json();
    console.log(data);

    if (data.errors) {
      emailError.textContent = data.errors.email;
      passwordError.textContent = data.errors.password;
    }

    if (data.user) {
      location.assign("/");
    }
  } catch (err) {
    console.log("this is the error");
    console.log(err);
  }
});
