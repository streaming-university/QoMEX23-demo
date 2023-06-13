const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
const videoResolution = document.getElementById('video-resolution');
const video2Label = document.getElementById('video2-text');
const startBtn = document.getElementById('start-stop-btn');
const reset = document.getElementById('restart-btn');
const mute = document.getElementById('mute-btn');
const videoSelect = document.getElementById('video-select');
const qualitySelect = document.getElementById('quality-select');
const comparisonSelect = document.getElementById('comparison-select');
const loadingText1 = document.getElementById('loading-text1');
const loadingText2 = document.getElementById('loading-text2');
const frame1 = document.getElementById('frame1');
const frame2 = document.getElementById('frame2');
const previous = document.getElementById('previous-btn');
const next = document.getElementById('next-btn');
const frame2Label = document.getElementById('frame2-text');
const seekBar = document.querySelector("#custom-seekbar span");

// Video links
const VIDEOS = {
    "bbb": {
        resolution: "3840 x 2160 (4K)",
        qualities: {
            20: {
                //https://drive.google.com/file/d/1glgLM4dVw7O0ls3QI8R-CL69whL8HjLl/view?usp=share_link
                original: "videos/bbb_qp20.mp4"
            },
            30: {
                //https://drive.google.com/file/d/1pGRzRtCWblD04Z83Qn2rvdwCnOrRaequ/view?usp=share_link
                spliced: "videos/bbb_qp30_spliced.mp4",
                //https://drive.google.com/file/d/1VO2Xq3XpvodYr9jJvbCAOdojQx8bo5na/view?usp=share_link
                original: "videos/bbb_qp30.mp4"
            },
            40: {
                //https://drive.google.com/file/d/1IW304QdZsViOE8uxEQXD6Xp_xageocZE/view?usp=share_link
                spliced: "videos/bbb_qp40_spliced.mp4",
                //https://drive.google.com/file/d/1FyMfwRycAaFLgn0j3IgweFTl0f0rVTE6/view?usp=share_link
                original: "videos/bbb_qp40.mp4"
            },
            50: {
                //https://drive.google.com/file/d/1utRTzQ5s5uUwURixQpGa795ZavRv_Xuq/view?usp=share_link
                spliced: "videos/bbb_qp50_spliced.mp4",
                //https://drive.google.com/file/d/1OemEqxGX_m71WCoYzqv_6TorxDO99lEL/view?usp=share_link
                original: "videos/bbb_qp50.mp4"
            }
        }
    },
    "no-event": {
        resolution: "720 x 576",
        qualities: {
            20: {
                //https://drive.google.com/file/d/19cG8frcsRyzNzSobVJ1aGXlOEwpt8FN7/view?usp=share_link
                original: "videos/no-event_qp20.mp4"
            },
            30: {
                //https://drive.google.com/file/d/1AuWz4_xvNnNoA-WjuDytLff4YNzPQ4Jd/view?usp=share_link
                spliced: "videos/no-event_qp30_spliced.mp4",
                //https://drive.google.com/file/d/1fKIW-GgKbYw5st4_dB7Bf-V30Xd5KnrL/view?usp=share_link
                original: "videos/no-event_qp30.mp4"
            },
            40: {
                //https://drive.google.com/file/d/1msfvrlDe_hr_zeB7jw4FF1r80Qeuh-kr/view?usp=share_link
                spliced: "videos/no-event_qp40_spliced.mp4",
                //https://drive.google.com/file/d/1BVFysXiC6P-frWTKtJkyk5o2ctBUJQ64/view?usp=share_link
                original: "videos/no-event_qp40.mp4"
            },
            50: {
                //https://drive.google.com/file/d/1CLDTfAKxZL81CN6SRTehDjT21yG13BON/view?usp=share_link
                spliced: "videos/no-event_qp50_spliced.mp4",
                //https://drive.google.com/file/d/1x7E5xCCGRzEZrV3RTAx4y4YcrzLYU68o/view?usp=share_link
                original: "videos/no-event_qp50.mp4"
            }
        }
    },
    "motorbike": {
        resolution: "1920 x 1080",
        qualities: {
            20: {
                //https://drive.google.com/file/d/1_mu1-BS810uLxzuZrK67d1AQdWM-iVbg/view?usp=share_link
                original: "videos/motorbike_qp20.mp4"
            },
            30: {
                //https://drive.google.com/file/d/14Bhswv4_2E41C3BL-S20Si_X-YMbPy9L/view?usp=share_link
                spliced: "videos/motorbike_qp30_spliced.mp4",
                //https://drive.google.com/file/d/1MTdOnPBq7cnHr0emo1tNRX0jiN7ODsqf/view?usp=share_link
                original: "videos/motorbike_qp30.mp4"
            },
            40: {
                //https://drive.google.com/file/d/1eX_0qphgJQ_3CBH4xVKIqcBxMhd6oKFR/view?usp=share_link
                spliced: "videos/motorbike_qp40_spliced.mp4",
                //https://drive.google.com/file/d/1KDzFOMPe2jchQF3N_BqYbaLuMx50tbf0/view?usp=share_link
                original: "videos/motorbike_qp40.mp4"
            },
            50: {
                //https://drive.google.com/file/d/1cgmh0xR7qbDhAzP6NHi_P4GPdBZQnYy8/view?usp=share_link
                spliced: "videos/motorbike_qp50_spliced.mp4",
                //https://drive.google.com/file/d/1UPJHdmbaXmJ3u9JYSF33VynCIHKkztPK/view?usp=share_link
                original: "videos/motorbike_qp50.mp4"
            }
        }
    }
};

// Frame links
const FRAMES = {
    "bbb": {
        qualities: {
            20: {
                original: "frames/bbb_20/"
            },
            30: {
                spliced: "frames/bbb_30_spliced/",
                original: "frames/bbb_30/"
            },
            40: {
                spliced: "frames/bbb_40_spliced/",
                original: "frames/bbb_40/"
            },
            50: {
                spliced: "frames/bbb_50_spliced/",
                original: "frames/bbb_50/"
            }
        }
    },
    "no-event": {
        qualities: {
            20: {
                original: "frames/no-event_20/"
            },
            30: {
                spliced: "frames/no-event_30_spliced/",
                original: "frames/no-event_30/"
            },
            40: {
                spliced: "frames/no-event_40_spliced/",
                original: "frames/no-event_40/"
            },
            50: {
                spliced: "frames/no-event_50_spliced/",
                original: "frames/no-event_50/"
            }
        }
    },
    "motorbike": {
        qualities: {
            20: {
                original: "frames/motorbike_20/"
            },
            30: {
                spliced: "frames/motorbike_30_spliced/",
                original: "frames/motorbike_30/"
            },
            40: {
                spliced: "frames/motorbike_40_spliced/",
                original: "frames/motorbike_40/"
            },
            50: {
                spliced: "frames/motorbike_50_spliced/",
                original: "frames/motorbike_50/"
            }
        }
    }
};

const DURATIONS = {
    "bbb": 30,
    "no-event": 25,
    "motorbike": 20
}

const FRAME_START = 1;
let CURRENT_FRAME = FRAME_START;
let DURATION = DURATIONS [videoSelect.value];

video1.src = VIDEOS[videoSelect.value].qualities[qualitySelect.value].spliced;
video2.src = VIDEOS[videoSelect.value].qualities[qualitySelect.value].original;
video2Label.textContent = `Reference Video: Unspliced Version (QP ${qualitySelect.value})`;

videoResolution.innerText = `Resolution: 3840 x 2160 (4K)`;

frame1.src = `${FRAMES[videoSelect.value].qualities[qualitySelect.value].spliced}/${CURRENT_FRAME}.png`;
frame2.src = `${FRAMES[videoSelect.value].qualities[qualitySelect.value].original}/${CURRENT_FRAME}.png`;
frame2Label.textContent = `Reference Video: Unspliced Version (QP ${qualitySelect.value})`;

// Helpers

const resetStates = () => {
    // reset audio states
    video1.muted = false;
    video2.muted = false;
    mute.textContent = 'Mute';

    // reset playback states
    video1.pause();
    video2.pause();
    video1.currentTime = 0;
    video2.currentTime = 0;
    startBtn.textContent = 'Start';

    loadingText1.style.display = 'auto';
    loadingText2.style.display = 'auto';
    seekBar.style.width = "0%";

    // reset frame states
    CURRENT_FRAME = FRAME_START;
    DURATION = DURATIONS [videoSelect.value];
}

const pauseAll = () => {
    video1.pause();
    video2.pause();
    startBtn.textContent = 'Start';
}

const updateVideo = () => {
    video1.src = VIDEOS[videoSelect.value].qualities[qualitySelect.value].spliced;
    video2.src = VIDEOS[videoSelect.value].qualities[qualitySelect.value].original;
    videoResolution.innerText = `Resolution: ${VIDEOS[videoSelect.value].resolution}`;
}

const updateFrame = (frame) => {
    frame1.src = `${FRAMES[videoSelect.value].qualities[qualitySelect.value].spliced}/${frame}.png`;
    frame2.src = `${FRAMES[videoSelect.value].qualities[qualitySelect.value].original}/${frame}.png`;
}

// Event Listeners

video1.addEventListener('loadeddata', () => {
    loadingText1.style.display = 'none';
});

video2.addEventListener('loadeddata', () => {
    loadingText2.style.display = 'none';
});

video1.addEventListener('stalled', () => {
    video2.currentTime = video1.currentTime;
    pauseAll();
});

video2.addEventListener('stalled', () => {
    video1.currentTime = video2.currentTime;
    pauseAll();
});

video1.addEventListener('readystatechange', () => {
    if (video1.readyState >= 4 && video2.readyState >= 4) {
        alert("Both videos are loaded")
    }
});

video2.addEventListener('readystatechange', () => {
    if (video1.readyState >= 4 && video2.readyState >= 4) {
        alert("Both videos are loaded")
    }
});

video1.addEventListener('ended', () => {
    startBtn.textContent = 'Start';
});

video2.addEventListener('ended', () => {
    startBtn.textContent = 'Start';
});

videoSelect.addEventListener('change', () => {
    resetStates();
    updateFrame(CURRENT_FRAME);
    updateVideo();
});

qualitySelect.addEventListener('change', () => {
    resetStates();
    video1.src = VIDEOS[videoSelect.value].qualities[qualitySelect.value].spliced;
    frame1.src = `${FRAMES[videoSelect.value].qualities[qualitySelect.value].spliced}/${CURRENT_FRAME}.png`;
    if (comparisonSelect.value !== 'reference') {
        video2.src = VIDEOS[videoSelect.value].qualities[qualitySelect.value].original;
        video2Label.textContent = `Reference Video: Unspliced Version (QP ${qualitySelect.value})`;

        frame2.src = `${FRAMES[videoSelect.value].qualities[qualitySelect.value].original}/${CURRENT_FRAME}.png`;
        frame2Label.textContent = `Reference Video: Unspliced Version (QP ${qualitySelect.value})`;
    }
});

comparisonSelect.addEventListener('change', () => {
    resetStates();
    if (comparisonSelect.value === 'reference') {
        video2.src = VIDEOS[videoSelect.value].qualities[20].original;
        video2Label.textContent = 'Reference Video: High Quality (QP 20)';

        frame2.src = `${FRAMES[videoSelect.value].qualities[20].original}/${CURRENT_FRAME}.png`;
        frame2Label.textContent = 'Reference Video: High Quality (QP 20)';
    } else {
        video2.src = VIDEOS[videoSelect.value].qualities[qualitySelect.value].original;
        video2Label.textContent = `Reference Video: Unspliced Version (QP ${qualitySelect.value})`;

        frame2.src = `${FRAMES[videoSelect.value].qualities[qualitySelect.value].original}/${CURRENT_FRAME}.png`;
        frame2Label.textContent = `Reference Video: Unspliced Version (QP ${qualitySelect.value})`;
    }
});

startBtn.addEventListener('click', async () => {
    if (video1.paused && video2.paused) {
        if (video1.readyState >= 4 && video2.readyState >= 4) {
            video1.play();
            video2.play();
            startBtn.textContent = 'Stop';
        } else
            alert("Please wait for both videos to finish loading")
    } else {
        pauseAll()
    }
});

reset.addEventListener('click', () => {
    video1.currentTime = 0;
    video2.currentTime = 0;
    video1.play();
    video2.play();
    startBtn.textContent = 'Stop';
});

mute.addEventListener('click', () => {
    video1.muted = !video1.muted;
    video2.muted = !video2.muted;
    mute.textContent = video1.muted ? 'Unmute' : 'Mute';
});

previous.addEventListener('click', () => {
    CURRENT_FRAME--;
    if (CURRENT_FRAME === 1) {
        previous.disabled = true;
    }
    next.disabled = false;
    updateFrame(CURRENT_FRAME);
});

next.addEventListener('click', () => {
    CURRENT_FRAME++;
    if (CURRENT_FRAME === DURATION) {
        next.disabled = true;
    }
    previous.disabled = false;
    updateFrame(CURRENT_FRAME);
});

video1.ontimeupdate = () =>{
    const percentage = ( video1.currentTime / video1.duration ) * 100;
    seekBar.style.width = percentage+"%";
};
