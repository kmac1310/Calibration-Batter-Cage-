const infoData = {
  nano: {
    image: 'https://kmac1310.github.io/Calibration-Batter-Cage/assets/baseball_bat_swing_10624.gif', // Use the correct URL of your GIF file
    text: 'A nanosecond is a billionth of a second. It\'s often used to measure extremely quick events.'
  },
  millie: {
    image: 'https://kmac1310.github.io/Calibration-Batter-Cage/assets/baseball_bat_swing_10624 2.gif', // Use the correct URL of your GIF file
    text: 'A millisecond is a thousandth of a second. It\'s useful for short tasks and activities.'
  },
  second: {
    image: 'https://kmac1310.github.io/Calibration-Batter-Cage/assets/baseball_bat_swing_10624 80.gif', // Use the correct URL of your GIF file
    text: 'A second is a basic unit of time. It\'s a common unit for scheduling and time management.'
  },
  minute: {
    image: 'https://kmac1310.github.io/Calibration-Batter-Cage/assets/baseball_bat_swing_10624 minutes.gif', // Use the correct URL of your GIF file
    text: 'A minute is 60 seconds long. It\'s the primary unit we use to organize our lives.'
  }
};

function showInfo(scale) {
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
