const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
const video2Label = document.getElementById('video2-text');
const startBtn = document.getElementById('start-stop-btn');
const reset = document.getElementById('restart-btn');
const mute = document.getElementById('mute-btn');
const videoSelect = document.getElementById('video-select');
const qualitySelect = document.getElementById('quality-select');
const comparisonSelect = document.getElementById('comparison-select');

// //Video links
// const videos = {
//   "bbb": {
//     qualities: {
//       20: {
//         //https://drive.google.com/file/d/1glgLM4dVw7O0ls3QI8R-CL69whL8HjLl/view?usp=share_link
//         spliced: "https://www.googleapis.com/drive/v3/files/1glgLM4dVw7O0ls3QI8R-CL69whL8HjLl?alt=media&key=AIzaSyAW1N-unBdofqJl5KlM_n4GBMZIJk1pSF4",
//         original: "https://www.googleapis.com/drive/v3/files/1glgLM4dVw7O0ls3QI8R-CL69whL8HjLl?alt=media&key=AIzaSyAW1N-unBdofqJl5KlM_n4GBMZIJk1pSF4"
//       },
//       30: {
//         //https://drive.google.com/file/d/1pGRzRtCWblD04Z83Qn2rvdwCnOrRaequ/view?usp=share_link
//         spliced: "https://www.googleapis.com/drive/v3/files/1pGRzRtCWblD04Z83Qn2rvdwCnOrRaequ?alt=media&key=AIzaSyAW1N-unBdofqJl5KlM_n4GBMZIJk1pSF4",
//         //https://drive.google.com/file/d/1VO2Xq3XpvodYr9jJvbCAOdojQx8bo5na/view?usp=share_link
//         original: "https://www.googleapis.com/drive/v3/files/1pGRzRtCWblD04Z83Qn2rvdwCnOrRaequ?alt=media&key=AIzaSyAW1N-unBdofqJl5KlM_n4GBMZIJk1pSF4"
//       },
//       40: {
//         //https://drive.google.com/file/d/1IW304QdZsViOE8uxEQXD6Xp_xageocZE/view?usp=share_link
//         spliced: "https://www.googleapis.com/drive/v3/files/1IW304QdZsViOE8uxEQXD6Xp_xageocZE?alt=media&key=AIzaSyAW1N-unBdofqJl5KlM_n4GBMZIJk1pSF4",
//         //https://drive.google.com/file/d/1FyMfwRycAaFLgn0j3IgweFTl0f0rVTE6/view?usp=share_link
//         original: "https://www.googleapis.com/drive/v3/files/1IW304QdZsViOE8uxEQXD6Xp_xageocZE?alt=media&key=AIzaSyAW1N-unBdofqJl5KlM_n4GBMZIJk1pSF4"
//       },
//       50: {
//         //https://drive.google.com/file/d/1utRTzQ5s5uUwURixQpGa795ZavRv_Xuq/view?usp=share_link
//         spliced: "https://www.googleapis.com/drive/v3/files/1utRTzQ5s5uUwURixQpGa795ZavRv_Xuq?alt=media&key=AIzaSyAW1N-unBdofqJl5KlM_n4GBMZIJk1pSF4",
//         //https://drive.google.com/file/d/1OemEqxGX_m71WCoYzqv_6TorxDO99lEL/view?usp=share_link
//         original: "https://www.googleapis.com/drive/v3/files/1utRTzQ5s5uUwURixQpGa795ZavRv_Xuq?alt=media&key=AIzaSyAW1N-unBdofqJl5KlM_n4GBMZIJk1pSF4"
//       }
//     }
//   },
//   "no-event": {
//     qualities: {
//       20: {
//         //https://drive.google.com/file/d/19cG8frcsRyzNzSobVJ1aGXlOEwpt8FN7/view?usp=share_link
//         spliced: "https://www.googleapis.com/drive/v3/files/19cG8frcsRyzNzSobVJ1aGXlOEwpt8FN7?alt=media&key=AIzaSyAW1N-unBdofqJl5KlM_n4GBMZIJk1pSF4",
//         original: "https://www.googleapis.com/drive/v3/files/19cG8frcsRyzNzSobVJ1aGXlOEwpt8FN7?alt=media&key=AIzaSyAW1N-unBdofqJl5KlM_n4GBMZIJk1pSF4"
//       },
//       30: {
//         //https://drive.google.com/file/d/1AuWz4_xvNnNoA-WjuDytLff4YNzPQ4Jd/view?usp=share_link
//         spliced: "https://www.googleapis.com/drive/v3/files/1AuWz4_xvNnNoA-WjuDytLff4YNzPQ4Jd?alt=media&key=AIzaSyAW1N-unBdofqJl5KlM_n4GBMZIJk1pSF4",
//         //https://drive.google.com/file/d/1fKIW-GgKbYw5st4_dB7Bf-V30Xd5KnrL/view?usp=share_link
//         original: "https://www.googleapis.com/drive/v3/files/1AuWz4_xvNnNoA-WjuDytLff4YNzPQ4Jd?alt=media&key=AIzaSyAW1N-unBdofqJl5KlM_n4GBMZIJk1pSF4"
//       },
//       40: {
//         //https://drive.google.com/file/d/1msfvrlDe_hr_zeB7jw4FF1r80Qeuh-kr/view?usp=share_link
//         spliced: "https://www.googleapis.com/drive/v3/files/1msfvrlDe_hr_zeB7jw4FF1r80Qeuh-kr?alt=media&key=AIzaSyAW1N-unBdofqJl5KlM_n4GBMZIJk1pSF4",
//         //https://drive.google.com/file/d/1BVFysXiC6P-frWTKtJkyk5o2ctBUJQ64/view?usp=share_link
//         original: "https://www.googleapis.com/drive/v3/files/1msfvrlDe_hr_zeB7jw4FF1r80Qeuh-kr?alt=media&key=AIzaSyAW1N-unBdofqJl5KlM_n4GBMZIJk1pSF4"
//       },
//       50: {
//         //https://drive.google.com/file/d/1CLDTfAKxZL81CN6SRTehDjT21yG13BON/view?usp=share_link
//         spliced: "https://www.googleapis.com/drive/v3/files/1CLDTfAKxZL81CN6SRTehDjT21yG13BON?alt=media&key=AIzaSyAW1N-unBdofqJl5KlM_n4GBMZIJk1pSF4",
//         //https://drive.google.com/file/d/1x7E5xCCGRzEZrV3RTAx4y4YcrzLYU68o/view?usp=share_link
//         original: "https://www.googleapis.com/drive/v3/files/1CLDTfAKxZL81CN6SRTehDjT21yG13BON?alt=media&key=AIzaSyAW1N-unBdofqJl5KlM_n4GBMZIJk1pSF4"
//       }
//     }
//   },
//   "motorbike": {
//     qualities: {
//       20: {
//         //https://drive.google.com/file/d/1_mu1-BS810uLxzuZrK67d1AQdWM-iVbg/view?usp=share_link
//         spliced: "https://www.googleapis.com/drive/v3/files/1_mu1-BS810uLxzuZrK67d1AQdWM-iVbg?alt=media&key=AIzaSyAW1N-unBdofqJl5KlM_n4GBMZIJk1pSF4",
//         original: "https://www.googleapis.com/drive/v3/files/1_mu1-BS810uLxzuZrK67d1AQdWM-iVbg?alt=media&key=AIzaSyAW1N-unBdofqJl5KlM_n4GBMZIJk1pSF4"
//       },
//       30: {
//         //https://drive.google.com/file/d/14Bhswv4_2E41C3BL-S20Si_X-YMbPy9L/view?usp=share_link
//         spliced: "https://www.googleapis.com/drive/v3/files/14Bhswv4_2E41C3BL-S20Si_X-YMbPy9L?alt=media&key=AIzaSyAW1N-unBdofqJl5KlM_n4GBMZIJk1pSF4",
//         //https://drive.google.com/file/d/1MTdOnPBq7cnHr0emo1tNRX0jiN7ODsqf/view?usp=share_link
//         original: "https://www.googleapis.com/drive/v3/files/14Bhswv4_2E41C3BL-S20Si_X-YMbPy9L?alt=media&key=AIzaSyAW1N-unBdofqJl5KlM_n4GBMZIJk1pSF4"
//       },
//       40: {
//         //https://drive.google.com/file/d/1eX_0qphgJQ_3CBH4xVKIqcBxMhd6oKFR/view?usp=share_link
//         spliced: "https://www.googleapis.com/drive/v3/files/1eX_0qphgJQ_3CBH4xVKIqcBxMhd6oKFR?alt=media&key=AIzaSyAW1N-unBdofqJl5KlM_n4GBMZIJk1pSF4",
//         //https://drive.google.com/file/d/1KDzFOMPe2jchQF3N_BqYbaLuMx50tbf0/view?usp=share_link
//         original: "https://www.googleapis.com/drive/v3/files/1eX_0qphgJQ_3CBH4xVKIqcBxMhd6oKFR?alt=media&key=AIzaSyAW1N-unBdofqJl5KlM_n4GBMZIJk1pSF4"
//       },
//       50: {
//         //https://drive.google.com/file/d/1cgmh0xR7qbDhAzP6NHi_P4GPdBZQnYy8/view?usp=share_link
//         spliced: "https://www.googleapis.com/drive/v3/files/1cgmh0xR7qbDhAzP6NHi_P4GPdBZQnYy8?alt=media&key=AIzaSyAW1N-unBdofqJl5KlM_n4GBMZIJk1pSF4",
//         //https://drive.google.com/file/d/1UPJHdmbaXmJ3u9JYSF33VynCIHKkztPK/view?usp=share_link
//         original: "https://www.googleapis.com/drive/v3/files/1cgmh0xR7qbDhAzP6NHi_P4GPdBZQnYy8?alt=media&key=AIzaSyAW1N-unBdofqJl5KlM_n4GBMZIJk1pSF4"
//       }
//     }
//   }
// };

const videos = {
  "bbb": {
    qualities: {
      20: {
        //https://drive.google.com/file/d/1glgLM4dVw7O0ls3QI8R-CL69whL8HjLl/view?usp=share_link
        spliced: "videos/bbb_qp20.mp4",
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
    qualities: {
      20: {
        //https://drive.google.com/file/d/19cG8frcsRyzNzSobVJ1aGXlOEwpt8FN7/view?usp=share_link
        spliced: "videos/no-event_qp20.mp4",
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
    qualities: {
      20: {
        //https://drive.google.com/file/d/1_mu1-BS810uLxzuZrK67d1AQdWM-iVbg/view?usp=share_link
        spliced: "videos/motorbike_qp20.mp4",
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


video1.src = videos[videoSelect.value].qualities[qualitySelect.value].spliced;
video2.src = videos[videoSelect.value].qualities[qualitySelect.value].original;
video2Label.textContent = `Reference Video: Unspliced Version (QP ${qualitySelect.value})`;

function resetVideos(){
  video1.currentTime = 0;
  video2.currentTime = 0;
  pauseAll();
};

function pauseAll(){
  video1.pause();
  video2.pause();
  startBtn.textContent = 'Start';
}


// Event Listeners

video1.addEventListener('stalled', function(){
    video2.currentTime = video1.currentTime;
    pauseAll();
});

video2.addEventListener('stalled', function(){
  video1.currentTime = video2.currentTime;
  pauseAll();
});

video1.addEventListener('readystatechange', function() {
  if (video1.readyState >= 4 && video2.readyState >= 4) {
    alert("Both videos are loaded")
  }
});

video2.addEventListener('readystatechange', function() {
  if (video1.readyState >= 4 && video2.readyState >= 4) {
    alert("Both videos are loaded")
  }
});

videoSelect.addEventListener('change', () => {
  video1.src = videos[videoSelect.value].qualities[qualitySelect.value].spliced;
  video2.src = videos[videoSelect.value].qualities[qualitySelect.value].original;
  resetVideos();
});

qualitySelect.addEventListener('change', () => {
  video1.src = videos[videoSelect.value].qualities[qualitySelect.value].spliced;
  if (comparisonSelect.value !== 'reference'){
    video2.src = videos[videoSelect.value].qualities[qualitySelect.value].original;
    video2Label.textContent = `Reference Video: Unspliced Version (QP ${qualitySelect.value})`;
  }
  resetVideos();
});

comparisonSelect.addEventListener('change', () => {
  if (comparisonSelect.value === 'reference') {
    video2.src = videos[videoSelect.value].qualities[20].original;
    video2Label.textContent = 'Reference Video: High Quality (QP 20)';
  } else {
    video2.src = videos[videoSelect.value].qualities[qualitySelect.value].original;
    video2Label.textContent = `Reference Video: Unspliced Version (QP ${qualitySelect.value})`;
  }
  resetVideos();
});

startBtn.addEventListener('click', () => {
  if (video1.paused && video2.paused) {
    if (video1.readyState >= 4 && video2.readyState >= 4){
      video1.play();
      video2.play();
      startBtn.textContent = 'Stop';
    } 
    else
      alert("Please wait for both videos to finish loading")
  }else {
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
  mute.textContent = video1.muted ? 'Unmute' : ' Mute ';
});
