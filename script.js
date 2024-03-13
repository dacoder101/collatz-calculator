var form = document.getElementById("form")
var stepsElement = document.getElementById("steps")
var sequenceElement = document.getElementById("sequence")
var maxNumElement = document.getElementById("maxNum")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    if (!form.value == null) {
        
        var posInt = parseInt(document.getElementById("posIntSub").value)
        var sequence = [posInt]
        var maxNum = posInt
        var strSequence = ""
    
        while (posInt != 1) {
            if (posInt % 2 == 0) {
                posInt /= 2
            } else {
                posInt *= 3
                posInt += 1
            }

            sequence.push(posInt)
            if (maxNum < posInt) {maxNum = posInt}
        }

        steps = sequence.length - 1
        for (let i = 0; i < sequence.length; i++) {
            strSequence += sequence[i] + ", "
        }
        strSequence = strSequence.slice(0, -2)
    
        stepsElement.textContent = String(steps)
        sequenceElement.textContent = strSequence
        maxNumElement.textContent = String(maxNum)
    }
})
