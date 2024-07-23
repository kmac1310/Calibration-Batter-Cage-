const infoData = {
    nano: {
        image: 'assets/baseball_bat_nano_100.gif',
        text: 'A nanosecond is a billionth of a second. It\'s often used to measure extremely quick events.'
    },
    millie: {
        image: 'assets/baseball_bat_millie_90.gif',
        text: 'A millisecond is a thousandth of a second. It\'s useful for short tasks and activities.'
    },
    second: {
        image: 'assets/baseball_bat_second_80.gif',
        text: 'A second is a basic unit of time. It\'s a common unit for scheduling and time management.'
    },
    minute: {
        image: 'assets/baseball_bat_minutes_70.gif',
        text: 'A minute is 60 seconds long. It\'s the primary unit we use to organize our lives.'
    }
};

function showInfo(scale) {
    console.log(`Button clicked: ${scale}`);
    const infoImage = document.getElementById('info-image');
    const infoText = document.getElementById('info-text');

    infoImage.classList.remove('hidden');
    infoText.classList.remove('hidden');

    setTimeout(() => {
        console.log(`Updating content for: ${scale}`);
        infoImage.src = infoData[scale].image;
        infoText.textContent = infoData[scale].text;

        infoImage.classList.add('show');
        infoText.classList.add('show');
    }, 200);
}
