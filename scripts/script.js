
// creates an array with all correspondent elements
const faqButtons = document.querySelectorAll(".question-button");

faqButtons.forEach(function(button) {
    const referentAnswer = button.nextElementSibling;
    const icon = button.querySelector("span");

    button.addEventListener("click", function() {
        const isOpen = referentAnswer.style.display === "block";
        if (!isOpen) {
            referentAnswer.style.display = "block";
            icon.innerText = "−";
        } else {
            referentAnswer.style.display = "none";
            icon.innerText = "+";
        }
    });
});