document.addEventListener("DOMContentLoaded", () => {
    const target = document.getElementById("target");
    const scoreElement = document.getElementById("score");
    const timerElement = document.getElementById("timer");
    const gameContainer = document.getElementById("game-container");

    let score = 0;
    let timeLeft = 30;
    let gameInterval;

    function moveTarget() {
        const containerWidth = gameContainer.clientWidth;
        const containerHeight = gameContainer.clientHeight;

        const randomX = Math.floor(Math.random() * (containerWidth - target.offsetWidth));
        const randomY = Math.floor(Math.random() * (containerHeight - target.offsetHeight));

        target.style.left = `${randomX}px`;
        target.style.top = `${randomY}px`;
    }

    function startGame() {
        gameInterval = setInterval(() => {
            timeLeft--;
            timerElement.textContent = `Time Left: ${timeLeft}`;

            if (timeLeft <= 0) {
                clearInterval(gameInterval);
                alert(`Game Over! Your score is ${score}`);
                resetGame();
            }
        }, 1000);

        moveTarget();jhgddfhhrrhdydh
    }

    function resetGame() {
        score = 0;
        timeLeft = 30;
        scoreElement.textContent = `Score: ${score}`;
        timerElement.textContent = `Time Left: ${timeLeft}`;
    }

    target.addEventListener("click", () => {
        score++;
        scoreElement.textContent = `Score: ${score}`;
        moveTarget();
    });

    startGame();
});
