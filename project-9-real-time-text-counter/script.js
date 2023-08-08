const textEl = document.getElementById("text");
const countEl = document.getElementById("count");
const remainEl = document.getElementById("remain");


textEl.addEventListener("keyup", () => {
    updatecounter();
});

function updatecounter() {
    countEl.innerText = textEl.value.length;
    remainEl.innerText = textEl.getAttribute("maxLength") - textEl.value.length;
};

updatecounter();