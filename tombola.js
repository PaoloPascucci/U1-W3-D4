document.addEventListener("DOMContentLoaded", function () {
    const tombolaContainer = document.querySelector(".numberContainer")
    const userContainer = document.querySelector(".userNumber")
    const tombola = [];
    const userNumber = []
    const userNumber2 = []
    const numberToSort = document.getElementById("numberToSort")
    const numberExtracted = document.getElementById("numberExtracted")

    for (let i = 1; i <= 76; i++) {
        const card = document.createElement("div")
        card.className = "number"
        card.innerText = i
        tombolaContainer.append(card)
        tombola.push(card)
    }
    while (userNumber.length < 24) {
        const card = document.createElement("div");
        card.className = "userNumberCell";
        let cardText;

        do {
            cardText = Math.floor(Math.random() * 76) + 1;
        } while (userNumber.includes(cardText));

        userNumber.push(cardText);
        card.innerText = cardText;
        userContainer.append(card);
        userNumber2.push(card);
    }



    numberToSort.onclick = function (e) {
        e.preventDefault()
        numberExtracted.innerText = ""
        const numberSorted = Math.floor(Math.random() * 76) + 1
        console.log(numberSorted);

        for (let i = 0; i < tombola.length; i++) {
            const number = tombola[i];
            if (parseInt(number.innerText) === numberSorted) {
                number.classList.add("numberSorted")
            }
        }



        for (let i = 0; i < userNumber2.length; i++) {
            const numberCell = userNumber2[i];
            if (userNumber.includes(numberSorted) && parseInt(numberCell.innerText) === numberSorted) {
                numberCell.classList.add("numberSorted")
            }
        }

        numberExtracted.innerText = "Il numero estratto è: " + numberSorted
    }
})