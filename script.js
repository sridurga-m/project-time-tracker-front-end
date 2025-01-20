setInterval(() => {
  // get time indicator elements
  let hours = document.getElementById('hours');
  let minutes = document.getElementById('minutes');
  let secondes = document.getElementById('seconds');
  let ampm = document.getElementById('ampm');

  // digits time indicator
  let hh = document.getElementById('hh');
  let mm = document.getElementById('mm');
  let ss = document.getElementById('ss');


  // dot time indicator
  let dotH = document.querySelector('.h_dot');
  let dotM = document.querySelector('.m_dot');
  let dotS = document.querySelector('.s_dot');

  // get current time
  let h = new Date().getHours();
  let m = new Date().getMinutes();// Stopwatch functionality
let stopwatchInterval;
let stopwatchTime = 0;
let runningStopwatch = false;

function updateStopwatchDisplay() {
  let hours = Math.floor(stopwatchTime / 3600);
  let minutes = Math.floor((stopwatchTime % 3600) / 60);
  let seconds = stopwatchTime % 60;
  document.getElementById('stopwatch').innerText =
    `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

document.getElementById('startStopwatch').addEventListener('click', () => {
  if (!runningStopwatch) {
    runningStopwatch = true;
    stopwatchInterval = setInterval(() => {
      stopwatchTime++;
      updateStopwatchDisplay();
    }, 1000);
  }
});

document.getElementById('stopStopwatch').addEventListener('click', () => {
  clearInterval(stopwatchInterval);
  runningStopwatch = false;
});

document.getElementById('resetStopwatch').addEventListener('click', () => {
  clearInterval(stopwatchInterval);
  runningStopwatch = false;
  stopwatchTime = 0;
  updateStopwatchDisplay();
});

// Timer functionality
let timerInterval;
let timerTime = 0;
let runningTimer = false;

function updateTimerDisplay() {
  let hours = Math.floor(timerTime / 3600);
  let minutes = Math.floor((timerTime % 3600) / 60);
  let seconds = timerTime % 60;
  document.getElementById('timer').innerText =
    `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

document.getElementById('startTimer').addEventListener('click', () => {
  if (!runningTimer) {
    let inputSeconds = parseInt(document.getElementById('timerInput').value);
    if (!isNaN(inputSeconds) && inputSeconds > 0) {
      timerTime = inputSeconds;
      runningTimer = true;
      updateTimerDisplay();
      timerInterval = setInterval(() => {
        if (timerTime > 0) {
          timerTime--;
          updateTimerDisplay();
        } else {
          clearInterval(timerInterval);
          runningTimer = false;
          alert("Time's up!");
        }
      }, 1000);
    } else {
      alert('Please enter a valid number of seconds.');
    }
  }
});

document.getElementById('resetTimer').addEventListener('click', () => {
  clearInterval(timerInterval);
  runningTimer = false;
  timerTime = 0;
  updateTimerDisplay();
});

  let s = new Date().getSeconds();
  let ap = h >= 12 ? 'PM' : 'AM';

  // convert to 12 hour format
  if (h > 12) {
    h = h - 12;
  }

  // add 0 before single digit
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  // set time and label
  hours.innerHTML = h + 'Hours';
  minutes.innerHTML = m + 'Minutes';
  secondes.innerHTML = s + 'Seconds';
  ampm.innerHTML = ap;

  // set time circular indicator
  hh.style.strokeDashoffset = 440 - (440 * h) / 12;
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;

  // set dot time position indicator
  dotH.style.transform = `rotate(${h * 30}deg)`;
  dotM.style.transform = `rotate(${m * 6}deg)`;
  dotS.style.transform = `rotate(${s * 6}deg)`;
}, 1000);