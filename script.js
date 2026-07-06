// Floating Hearts ❤️

function createHeart() {
    const heart = document.createElement("div");

    heart.innerHTML = "❤️";
    heart.classList.add("heart");

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = (15 + Math.random() * 30) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 300);
