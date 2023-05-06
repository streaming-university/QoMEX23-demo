const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
const video2Label = document.getElementById('video2-text');
const startBtn = document.getElementById('start-stop-btn');
const reset = document.getElementById('restart-btn');
const mute = document.getElementById('mute-btn');
const timeElapsed = document.getElementById('time-elapsed');
const duration = document.getElementById('duration');
const seekBar = document.getElementById('seek-bar');
const seekTooltip = document.getElementById('seek-tooltip');
const seek = document.getElementById('seek');
const videoSelect = document.getElementById('video-select');
const qualitySelect = document.getElementById('quality-select');
const comparisonSelect = document.getElementById('comparison-select');

video1.src = `./videos/spliced/${videoSelect.value}/${qualitySelect.value}.mp4`;
video2.src = `./videos/original/${videoSelect.value}/20.mp4`;
video2Label.textContent = 'Reference Video: High Quality (QP 20)';

// Helpers
const formatTime = (timeInSeconds) => ({
  minutes: Math.floor(timeInSeconds / 60), seconds: timeInSeconds % 60
});

const str_pad_left = (string, pad, length) => (new Array(length + 1).join(pad) + string).slice(-length);

// Controllers
const initializeVideo = () => {
  const videoDuration = Math.round(video1.duration);
  seek.setAttribute('max', videoDuration);
  const time = formatTime(videoDuration);
  duration.innerText = `${time.minutes}:${time.seconds}`;
  duration.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`);
};

const updateProgress = () => {
  seek.value = Math.floor(video1.currentTime);
};

const updateTimeElapsed = () => {
  const time = formatTime(Math.round(video1.currentTime));
  timeElapsed.innerText = str_pad_left(time.minutes, '0', 2) + ':' + str_pad_left(time.seconds, '0', 2);
  timeElapsed.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`);
};

const updateSeekTooltip = (event) => {
  const skipTo = Math.round((event.offsetX / event.target.clientWidth) * parseInt(event.target.getAttribute('max'), 10));
  seek.setAttribute('data-seek', skipTo);
  const t = formatTime(skipTo);
  seekTooltip.textContent = `${t.minutes}:${t.seconds}`;
  const rect = video1.getBoundingClientRect();
  seekTooltip.style.left = `${event.pageX - rect.left}px`;
};

const skipAhead = (event) => {
  const skipTo = event.target.dataset.seek ? event.target.dataset.seek : event.target.value;
  video1.currentTime = skipTo;
  video2.currentTime = skipTo;
  seek.value = skipTo;
};

if (video1.readyState >= video1.HAVE_FUTURE_DATA) initializeVideo(); else video1.addEventListener('canplay', initializeVideo);

// Event Listeners
video1.addEventListener('timeupdate', updateTimeElapsed);
video1.addEventListener('timeupdate', updateProgress);
seek.addEventListener('mousemove', updateSeekTooltip);
seek.addEventListener('input', skipAhead);

videoSelect.addEventListener('change', () => {
  video1.src = `./videos/spliced/${videoSelect.value}/${qualitySelect.value}.mp4`;
  video2.src = `./videos/original/${videoSelect.value}/${qualitySelect.value}.mp4`;
});

qualitySelect.addEventListener('change', () => {
  video1.src = `./videos/spliced/${videoSelect.value}/${qualitySelect.value}.mp4`;
  video2.src = `./videos/original/${videoSelect.value}/${qualitySelect.value}.mp4`;
  video2Label.textContent = `Reference Video: Unspliced Version (QP ${qualitySelect.value})`;
});

comparisonSelect.addEventListener('change', () => {
  if (comparisonSelect.value === 'reference') {
    video2.src = `./videos/original/${videoSelect.value}/20.mp4`;
    video2Label.textContent = 'Reference Video: High Quality (QP 20)';
  } else {
    video2.src = `./videos/original/${videoSelect.value}/${qualitySelect.value}.mp4`;
    video2Label.textContent = `Reference Video: Unspliced Version (QP ${qualitySelect.value})`;
  }
});

startBtn.addEventListener('click', () => {
  if (video1.paused) {
    video1.play();
    video2.play();
    startBtn.textContent = 'Stop';
  } else {
    video1.pause();
    video2.pause();
    startBtn.textContent = 'Start';
  }
});

reset.addEventListener('click', () => {
  video1.currentTime = 0;
  video2.currentTime = 0;
  video1.play();
  video2.play();
});

mute.addEventListener('click', () => {
  video1.muted = !video1.muted;
  video2.muted = !video2.muted;
  mute.textContent = video1.muted ? 'Unmute' : ' Mute ';
});
