const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    var posInt = parseInt(document.getElementById("posIntSub").value)
    while (posInt != 1) {
        if (posInt % 2 == 0) {
        posInt /= 2
        } else {
        posInt *= 3
        posInt += 1
        }
        alert(posInt)
    }
})