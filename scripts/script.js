
// creates an array with all correspondent elements
const faqButtons = document.querySelectorAll(".question-button");

faqButtons.forEach(function(button, index, arrayButtons) {
    const referentAnswer = button.nextElementSibling;
    const icon = button.querySelector("span");

    button.addEventListener("click", function() {
        const isOpen = referentAnswer.style.display === "block";
        if (!isOpen) {
            referentAnswer.style.display = "block";
            icon.innerText = "−";
            for (let i = 0; i < arrayButtons.length; i ++) {
                if ((i != index) && (arrayButtons[i].nextElementSibling.style.display === "block")) {
                    arrayButtons[i].nextElementSibling.style.display = "none"
                    arrayButtons[i].querySelector("span").innerText = "+"
                }
            }
        } else {
            referentAnswer.style.display = "none";
            icon.innerText = "+";
        }
    });
});