let form = document.getElementById("form");
let stepsElement = document.getElementById("steps");
let sequenceElement = document.getElementById("sequence");
let maxNumElement = document.getElementById("maxNum");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let posInt = parseInt(document.getElementById("posIntSub").value);
    let sequence = [posInt];
    let maxNum = posInt;
    let strSequence = "";

    if (posInt != null) {

        while (posInt != 1) {
            if (posInt % 2 == 0) {
                posInt /= 2;
            } else {
                posInt *= 3;
                posInt += 1;
            }

            sequence.push(posInt);
            if (maxNum < posInt) {
                maxNum = posInt;
            }
        }

        let steps = sequence.length - 1;
        strSequence = sequence.join(", ");
    
        stepsElement.textContent = String(steps);
        sequenceElement.textContent = strSequence;
        maxNumElement.textContent = String(maxNum);
    }
});
