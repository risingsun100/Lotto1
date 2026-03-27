document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generateBtn');
  const lottoNumbersDiv = document.getElementById('lottoNumbers');

  function generateUniqueNumbers(count, min, max) {
    const numbers = new Set();
    while (numbers.size < count) {
      numbers.add(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return Array.from(numbers).sort((a, b) => a - b);
  }

  function displayLottoNumbers() {
    lottoNumbersDiv.innerHTML = ''; // Clear previous results

    for (let i = 0; i < 5; i++) {
      const combination = generateUniqueNumbers(6, 1, 45);
      const combinationDiv = document.createElement('div');
      combinationDiv.classList.add('combination');
      combinationDiv.classList.add(`combination-color-${i}`); // Add specific color class

      combination.forEach(number => {
        const numberSpan = document.createElement('span');
        numberSpan.classList.add('number');
        numberSpan.textContent = number;
        combinationDiv.appendChild(numberSpan);

        // Trigger bounce animation
        requestAnimationFrame(() => {
          numberSpan.classList.add('bouncing');
          setTimeout(() => {
            numberSpan.classList.remove('bouncing');
          }, 300); // Animation duration is 0.3s
        });
      });
      lottoNumbersDiv.appendChild(combinationDiv);
    }
  }

  generateBtn.addEventListener('click', displayLottoNumbers);

  // Generate numbers on initial load
  displayLottoNumbers();
});
