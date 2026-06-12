const button = document.createElement("button");

button.innerText = "🌙";
button.className = "theme-btn";

document.body.appendChild(button);

button.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
