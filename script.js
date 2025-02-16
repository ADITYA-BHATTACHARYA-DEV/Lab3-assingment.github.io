// Dark Mode Toggle
document.getElementById("dark-mode-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Typing Effect
const text = "Welcome to My Portfolio! I am Aditya Bhattacharya";
let index = 0;
function typeEffect() {
    if (index < text.length) {
        document.getElementById("intro-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}
document.addEventListener("DOMContentLoaded", typeEffect);

// Carousel Effect
let currentIndex = 0;
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;

document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalItems;
    document.querySelector(".carousel-inner").style.transform = `translateX(-${currentIndex * 100}%)`;
});

document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    document.querySelector(".carousel-inner").style.transform = `translateX(-${currentIndex * 100}%)`;
});

// Quote Generator
function generateQuote() {
    const quotes = ["The best way to predict the future is to create it.", "Success is not final, failure is not fatal.", "Dream big and dare to fail."];
    document.getElementById("quote-text").textContent = quotes[Math.floor(Math.random() * quotes.length)];
}
