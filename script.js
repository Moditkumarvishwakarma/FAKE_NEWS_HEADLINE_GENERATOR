document.addEventListener('DOMContentLoaded', () => {
    // Check if data is loaded from data.js
    if (typeof names === 'undefined' || typeof places === 'undefined' || typeof actions === 'undefined') {
        document.getElementById('headline').textContent = 'Error: Data failed to load. Please run python main.py first.';
        return;
    }

    const generateBtn = document.getElementById('generateBtn');
    const headlineEl = document.getElementById('headline');

    function getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    function generateHeadline() {
        const randomName = getRandomItem(names);
        const randomPlace = getRandomItem(places);
        const randomAction = getRandomItem(actions);

        const formats = [
            `At ${randomPlace}, ${randomName} was ${randomAction}.`,
            `${randomName} was ${randomAction} in ${randomPlace}.`,
            `In ${randomPlace}, ${randomName} was ${randomAction}.`
        ];

        const finalHeadline = getRandomItem(formats);

        // Animation logic
        headlineEl.classList.remove('fade-in');
        headlineEl.classList.add('fade-out');
        
        setTimeout(() => {
            headlineEl.textContent = finalHeadline;
            headlineEl.classList.remove('fade-out');
            headlineEl.classList.add('fade-in');
        }, 300); // 300ms matches the CSS transition time
    }

    setTimeout(() => {
        generateHeadline();
    }, 800);

    generateBtn.addEventListener('click', generateHeadline);
});
