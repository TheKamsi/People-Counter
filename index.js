let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let lapsCompleted = 0 
let restartValue = 0

function totalLapsCompleted() {
    lapsCompleted += 1
    countEl.innerText = lapsCompleted
}

function save() {
    let totalLapsCompleted = lapsCompleted + " - "
    saveEl.textContent += totalLapsCompleted
    countEl.innerText = restartValue
    lapsCompleted = restartValue
    console.log(lapsCompleted)
}


