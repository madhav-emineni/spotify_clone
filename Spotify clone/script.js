document.addEventListener('DOMContentLoaded', () => {
    const updateButton = document.querySelector('.play-button');
    const rightSide = document.getElementById('right');

    updateButton.addEventListener('click', () => {
        rightSide.id = 'updated-right';
        rightSide.innerHTML =`
            <h2>Updated Right Side</h2>
        <p>This is the new content for the right side!</p>
        `
    });
});