let timer;
let isRunning = false;
let isFocusSession = true;

let timeLeft = 25 * 60;

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    document.getElementById("timer").textContent =
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (isRunning) return;

    isRunning = true;

    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            switchSession();
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    isFocusSession = true;
    timeLeft = 25 * 60;
    document.getElementById("session-type").textContent = "Focus Time";
    updateDisplay();
}

function switchSession() {
    clearInterval(timer);
    isRunning = false;

    if (isFocusSession) {
        timeLeft = 5 * 60;
        document.getElementById("session-type").textContent = "Break Time";
    } else {
        timeLeft = 25 * 60;
        document.getElementById("session-type").textContent = "Focus Time";
    }

    isFocusSession = !isFocusSession;
    updateDisplay();
    startTimer();
}

updateDisplay();
