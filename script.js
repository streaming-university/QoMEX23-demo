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

const videos = {
  bbb: {
    qualities: {
      20: {
        //https://drive.google.com/file/d/1glgLM4dVw7O0ls3QI8R-CL69whL8HjLl/view?usp=share_link
        spliced: "https://drive.google.com/uc?export=download&id=1glgLM4dVw7O0ls3QI8R-CL69whL8HjLl",
        original: "https://drive.google.com/uc?export=download&id=1glgLM4dVw7O0ls3QI8R-CL69whL8HjLl"
      },
      30: {
        //https://drive.google.com/file/d/1pGRzRtCWblD04Z83Qn2rvdwCnOrRaequ/view?usp=share_link
        spliced: "https://drive.google.com/uc?export=download&id=1pGRzRtCWblD04Z83Qn2rvdwCnOrRaequ",
        //https://drive.google.com/file/d/1VO2Xq3XpvodYr9jJvbCAOdojQx8bo5na/view?usp=share_link
        original: "https://drive.google.com/uc?export=download&id=1VO2Xq3XpvodYr9jJvbCAOdojQx8bo5na"
      },
      40: {
        //https://drive.google.com/file/d/1IW304QdZsViOE8uxEQXD6Xp_xageocZE/view?usp=share_link
        spliced: "https://drive.google.com/uc?export=download&id=1IW304QdZsViOE8uxEQXD6Xp_xageocZE",
        //https://drive.google.com/file/d/1FyMfwRycAaFLgn0j3IgweFTl0f0rVTE6/view?usp=share_link
        original: "https://drive.google.com/uc?export=download&id=1FyMfwRycAaFLgn0j3IgweFTl0f0rVTE6"
      },
      50: {
        //https://drive.google.com/file/d/1utRTzQ5s5uUwURixQpGa795ZavRv_Xuq/view?usp=share_link
        spliced: "https://drive.google.com/uc?export=download&id=1utRTzQ5s5uUwURixQpGa795ZavRv_Xuq",
        //https://drive.google.com/file/d/1OemEqxGX_m71WCoYzqv_6TorxDO99lEL/view?usp=share_link
        original: "https://drive.google.com/uc?export=download&id=1OemEqxGX_m71WCoYzqv_6TorxDO99lEL"
      }
    }
  },
  "no-event": {
    qualities: {
      20: {
        //https://drive.google.com/file/d/19cG8frcsRyzNzSobVJ1aGXlOEwpt8FN7/view?usp=share_link
        spliced: "https://drive.google.com/uc?export=download&id=19cG8frcsRyzNzSobVJ1aGXlOEwpt8FN7",
        original: "https://drive.google.com/uc?export=download&id=19cG8frcsRyzNzSobVJ1aGXlOEwpt8FN7"
      },
      30: {
        //https://drive.google.com/file/d/1AuWz4_xvNnNoA-WjuDytLff4YNzPQ4Jd/view?usp=share_link
        spliced: "https://drive.google.com/uc?export=download&id=1AuWz4_xvNnNoA-WjuDytLff4YNzPQ4Jd",
        //https://drive.google.com/file/d/1fKIW-GgKbYw5st4_dB7Bf-V30Xd5KnrL/view?usp=share_link
        original: "https://drive.google.com/uc?export=download&id=1fKIW-GgKbYw5st4_dB7Bf-V30Xd5KnrL"
      },
      40: {
        //https://drive.google.com/file/d/1msfvrlDe_hr_zeB7jw4FF1r80Qeuh-kr/view?usp=share_link
        spliced: "https://drive.google.com/uc?export=download&id=1msfvrlDe_hr_zeB7jw4FF1r80Qeuh-kr",
        //https://drive.google.com/file/d/1BVFysXiC6P-frWTKtJkyk5o2ctBUJQ64/view?usp=share_link
        original: "https://drive.google.com/uc?export=download&id=1BVFysXiC6P-frWTKtJkyk5o2ctBUJQ64"
      },
      50: {
        //https://drive.google.com/file/d/1CLDTfAKxZL81CN6SRTehDjT21yG13BON/view?usp=share_link
        spliced: "https://drive.google.com/uc?export=download&id=1CLDTfAKxZL81CN6SRTehDjT21yG13BON",
        //https://drive.google.com/file/d/1x7E5xCCGRzEZrV3RTAx4y4YcrzLYU68o/view?usp=share_link
        original: "https://drive.google.com/uc?export=download&id=1x7E5xCCGRzEZrV3RTAx4y4YcrzLYU68o"
      }
    }
  },
  motorbike: {
    qualities: {
      20: {
        //https://drive.google.com/file/d/1_mu1-BS810uLxzuZrK67d1AQdWM-iVbg/view?usp=share_link
        spliced: "https://drive.google.com/uc?export=download&id=1_mu1-BS810uLxzuZrK67d1AQdWM-iVbg",
        original: "https://drive.google.com/uc?export=download&id=1_mu1-BS810uLxzuZrK67d1AQdWM-iVbg"
      },
      30: {
        //https://drive.google.com/file/d/14Bhswv4_2E41C3BL-S20Si_X-YMbPy9L/view?usp=share_link
        spliced: "https://drive.google.com/uc?export=download&id=14Bhswv4_2E41C3BL-S20Si_X-YMbPy9L",
        //https://drive.google.com/file/d/1MTdOnPBq7cnHr0emo1tNRX0jiN7ODsqf/view?usp=share_link
        original: "https://drive.google.com/uc?export=download&id=1MTdOnPBq7cnHr0emo1tNRX0jiN7ODsqf"
      },
      40: {
        //https://drive.google.com/file/d/1eX_0qphgJQ_3CBH4xVKIqcBxMhd6oKFR/view?usp=share_link
        spliced: "https://drive.google.com/uc?export=download&id=1eX_0qphgJQ_3CBH4xVKIqcBxMhd6oKFR",
        //https://drive.google.com/file/d/1KDzFOMPe2jchQF3N_BqYbaLuMx50tbf0/view?usp=share_link
        original: "https://drive.google.com/uc?export=download&id=1KDzFOMPe2jchQF3N_BqYbaLuMx50tbf0"
      },
      50: {
        //https://drive.google.com/file/d/1cgmh0xR7qbDhAzP6NHi_P4GPdBZQnYy8/view?usp=share_link
        spliced: "https://drive.google.com/uc?export=download&id=1cgmh0xR7qbDhAzP6NHi_P4GPdBZQnYy8",
        //https://drive.google.com/file/d/1UPJHdmbaXmJ3u9JYSF33VynCIHKkztPK/view?usp=share_link
        original: "https://drive.google.com/uc?export=download&id=1UPJHdmbaXmJ3u9JYSF33VynCIHKkztPK"
      }
    }
  }
};



// video1.src = `./videos/spliced/${videoSelect.value}/${qualitySelect.value}.mp4`;
// video2.src = `./videos/original/${videoSelect.value}/20.mp4`;

video1.src = videos[videoSelect.value].qualities[qualitySelect.value].spliced;
video2.src = videos[videoSelect.value].qualities[qualitySelect.value].original;
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
  video1.src = videos[videoSelect.value].qualities[qualitySelect.value].spliced;
  video2.src = videos[videoSelect.value].qualities[qualitySelect.value].original;
});

qualitySelect.addEventListener('change', () => {
  video1.src = videos[videoSelect.value].qualities[qualitySelect.value].spliced;
  video2.src = videos[videoSelect.value].qualities[qualitySelect.value].original;
  video2Label.textContent = `Reference Video: Unspliced Version (QP ${qualitySelect.value})`;
});

comparisonSelect.addEventListener('change', () => {
  if (comparisonSelect.value === 'reference') {
    video2.src = videos[videoSelect.value].qualities[qualitySelect.value].original;
    video2Label.textContent = 'Reference Video: High Quality (QP 20)';
  } else {
    video2.src = videos[videoSelect.value].qualities[qualitySelect.value].original;
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
