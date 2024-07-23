const infoData = {
    second: {
        image: 'assets/second-image.gif', // replace with actual path
        text: 'A second is a very short unit of time. It\'s often used to measure quick events.'
    },
    minute: {
        image: 'assets/minute-image.gif', // replace with actual path
        text: 'A minute is made up of 60 seconds. It\'s useful for short tasks and activities.'
    },
    hour: {
        image: 'assets/hour-image.gif', // replace with actual path
        text: 'An hour consists of 60 minutes. It\'s a common unit for scheduling and time management.'
    },
    day: {
        image: 'assets/day-image.gif', // replace with actual path
        text: 'A day is 24 hours long. It\'s the primary unit we use to organize our lives.'
    }
};

function playSound() {
    const clickSound = document.getElementById('click-sound');
    clickSound.play();
}

function showInfo(scale) {
    playSound();

    const infoImage = document.getElementById('info-image');
    const infoText = document.getElementById('info-text');

    infoImage.classList.remove('show');
    infoText.classList.remove('show');

    setTimeout(() => {
        infoImage.src = infoData[scale].image;
        infoText.textContent = infoData[scale].text;

        infoImage.classList.add('show');
        infoText.classList.add('show');
    }, 300);
}
