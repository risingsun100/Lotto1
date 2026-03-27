function generateNumbers() {
    let numbers = [];

    while (numbers.length < 7) {
        let num = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }

    let main = numbers.slice(0, 6).sort((a, b) => a - b);
    let bonus = numbers[6];

    return { main, bonus };
}

function getColor(num) {
    if (num <= 10) return "yellow";
    else if (num <= 20) return "blue";
    else if (num <= 30) return "red";
    else if (num <= 40) return "gray";
    else return "green";
}

window.generateLottoSets = function() {
    let resultHTML = "";

    // 효과음 재생
    let sound = document.getElementById("sound");
    if (sound) {
        sound.currentTime = 0;
        sound.play();
    }

    for (let i = 1; i <= 5; i++) {
        let { main, bonus } = generateNumbers();

        let mainBalls = main.map(num => {
            return `<span class="ball ${getColor(num)}">${num}</span>`;
        }).join("");

        let bonusBall = `<span class="ball bonus ${getColor(bonus)}">${bonus}</span>`;

        resultHTML += `
            <div class="set">
                ${i}번: ${mainBalls}
                <span style="margin: 0 10px;">+</span>
                ${bonusBall}
            </div>
        `;
    }

    document.getElementById("numbers").innerHTML = resultHTML;
};
