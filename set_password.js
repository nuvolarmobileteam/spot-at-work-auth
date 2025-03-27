import { supabase } from './supabaseV2.js';

document.addEventListener("DOMContentLoaded", function () {
    const setPasswordForm = document.getElementById("set-password-form");
    const messageBox = document.getElementById("set-password-message");

    setPasswordForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const newPassword = document.getElementById("new-password");
        const confirmPassword = document.getElementById("confirm-password");

        messageBox.innerHTML = "";
        messageBox.classList.remove("success", "error");
        messageBox.style.display = "none";  

        if (!newPassword.value.trim() || !confirmPassword.value.trim()) {
            showMessage("Please fill in both password fields.", "error");
            shakeInput(newPassword);
            shakeInput(confirmPassword);
            return;
        }

        if (newPassword.value.length < 8) {
            showMessage("Password must be at least 8 characters long.", "error");
            shakeInput(newPassword);
            return;
        }

        if (newPassword.value !== confirmPassword.value) {
            showMessage("Passwords do not match.", "error");
            shakeInput(confirmPassword);
            return;
        }

        const submitButton = setPasswordForm.querySelector("button");
        submitButton.disabled = true;

        try {
            const { error } = await supabase.auth.updateUser({
                password: newPassword.value
            });

            if (error) {
                showMessage("Error: " + error.message, "error");
                shakeInput(newPassword);
                return;
            }

            showMessage("Password successfully changed. Now access the mobile app.", "success");
        } catch (err) {
            showMessage("An unexpected error occurred.", "error");
        } finally {
            submitButton.disabled = false;
        }
    });

    function showMessage(message, type) {
        messageBox.innerHTML = message;
        messageBox.classList.add(type);
        messageBox.style.display = "block";
    }

    function shakeInput(inputField) {
        inputField.classList.add("error-shake");
        setTimeout(() => inputField.classList.remove("error-shake"), 500);
    }
});