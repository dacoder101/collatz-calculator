const form = document.getElementById("form")

form.defineProperty("submit", 'defaultPrevented', {
    value: "submit".defaultPrevented,
    writable: true
})

form.addEventListener("submit", (e) => {
    e.defaultPrevented = true
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