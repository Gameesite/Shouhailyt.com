function moveButtonRandomly(button) {
    fetch('http://localhost:5000/random-position')
        .then(response => response.json())
        .then(data => {
            const maxX = window.innerWidth - button.offsetWidth;
            const maxY = window.innerHeight - button.offsetHeight;
            const randomX = Math.floor(data.x / 100 * maxX);
            const randomY = Math.floor(data.y / 100 * maxY);
            button.style.position = 'fixed';
            button.style.left = `${randomX}px`;
            button.style.top = `${randomY}px`;
        });
}
