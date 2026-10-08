
const gift = document.querySelector("#gift");
const heartContainer = document.querySelector("#heartContainer");
const message = document.querySelector("#message");
const instruction = document.querySelector("#instruction");
const againButton = document.querySelector("#againButton");

let isOpened = false;

function openGift() {
    if (isOpened) return;

    isOpened = true;

    gift.classList.add("open");

    instruction.textContent =
        "A little surprise from my heart to yours ❤️";

    setTimeout(() => {
        heartContainer.classList.add("show");
        message.hidden = false;

        instruction.textContent =
            "This gift was made especially for you, Wissal! 💖";
    }, 900);
}

function resetGift() {
    isOpened = false;

    gift.classList.remove("open");
    heartContainer.classList.remove("show");
    message.hidden = true;

    instruction.textContent = "Click the gift to open it 🎁";
}

gift.addEventListener("click", openGift);

gift.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openGift();
    }
});

againButton.addEventListener("click", resetGift);
