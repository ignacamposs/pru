const incrementBtn = document.getElementById("increment-btn")
const saveBtn = document.getElementById("save-btn")
const countEl = document.getElementById("count-el")
const saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count += 2
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = 0
}

incrementBtn.addEventListener("click", increment)
saveBtn.addEventListener("click", save)