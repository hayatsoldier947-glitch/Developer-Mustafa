function hello() {
    alert("Welcome Mustafa! 😎");
}

function contactMe() {
    alert("Thanks for contacting me! 🚀");
}function updateTime() {
    const now = new Date();

    document.getElementById("time").textContent =
        now.toLocaleTimeString();
}

setInterval(updateTime, 1000);
updateTime();