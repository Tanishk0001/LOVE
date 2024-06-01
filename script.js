document.addEventListener("DOMContentLoaded", function() {
    const btnNo = document.getElementById("btn-no");
    const btnYes = document.getElementById("btn-yes");
    const messageDiv = document.getElementById("text");

    btnNo.addEventListener("mouseover", function() {
        // Get the dimensions of the window and the button
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const btnRect = btnNo.getBoundingClientRect();

        // Calculate a new random position within the window, ensuring the button stays within bounds
        let newLeft = Math.random() * (windowWidth - btnRect.width);
        let newTop = Math.random() * (windowHeight - btnRect.height);

        // Apply the new position
        btnNo.style.left = `${newLeft}px`;
        btnNo.style.top = `${newTop}px`;
    });

    btnYes.addEventListener("click", function() {
        // Display the message when the YES button is clicked
        text.textContent = "I love you Babe ❤️❤️❤️";
    });
});
