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
updateTime();function showProject() {
    alert("Ye mera first web development project hai! 🚀");
}function sendMessage() {
    alert("Thanks! Your message has been received. 😎");
}