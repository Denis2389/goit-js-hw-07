function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

        const inputElement = document.querySelector('#controls input');
        const createButton = document.querySelector('button[data-create]');
        const destroyButton = document.querySelector('button[data-destroy]');
        const boxesContainer = document.getElementById('boxes');

        function createBoxes(amount) {
            boxesContainer.innerHTML = '';

            let size = 30;

            for (let i = 0; i < amount; i++) {
                const box = document.createElement('div');
                box.style.width = `${size}px`;
                box.style.height = `${size}px`;
                box.style.backgroundColor = getRandomHexColor();
                boxesContainer.appendChild(box);

                size += 10;
            }
        }

        function destroyBoxes() {
            boxesContainer.innerHTML = '';
        }

        createButton.addEventListener('click', () => {
            const amount = Number(inputElement.value);

            if (amount >= 1 && amount <= 100) {
                createBoxes(amount);
                inputElement.value = '';
            } else {
                alert('Please enter a number between 1 and 100');
            }
        });

        destroyButton.addEventListener('click', destroyBoxes);