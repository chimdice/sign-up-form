const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#password-confirm");
const passwordError = document.querySelector(".password-check")

passwordConfirm.addEventListener("input", () => {

    if (passwordConfirm.value != password.value) {
        passwordConfirm.style.borderColor = "red";
        password.style.borderColor = "red";
        passwordError.textContent = "*Passwords do not match!"

    }  else {
        passwordConfirm.style.borderColor = "#E5E7EB";
        password.style.borderColor = "#E5E7EB";
        passwordError.textContent = ""
    };
});

password.addEventListener("input", () => {

    if (password.value.length < passwordConfirm.value.length) {
        if (passwordConfirm.value != password.value) {
            passwordConfirm.style.borderColor = "red";
            password.style.borderColor = "red";
            passwordError.textContent = "*Passwords do not match!"

        }  else {
            passwordConfirm.style.borderColor = "#E5E7EB";
            password.style.borderColor = "#E5E7EB";
            passwordError.textContent = ""
        };
    };
});