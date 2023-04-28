const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
const startBtn = document.getElementById('start-stop-btn');
const reset = document.getElementById('restart-btn');
const mute = document.getElementById('mute-btn');
const timeElapsed = document.getElementById('time-elapsed');
const duration = document.getElementById('duration');
const seekBar = document.getElementById('seek-bar');
const seekTooltip = document.getElementById('seek-tooltip');
const seek = document.getElementById('seek');


function formatTime(timeInSeconds) {

    return {
        minutes: Math.floor(timeInSeconds/60),
        seconds: timeInSeconds % 60,
    };
};
function str_pad_left(string, pad, length) {
    return (new Array(length + 1).join(pad) + string).slice(-length);
}
function initializeVideo() {
    const videoDuration = Math.round(video1.duration);
    seek.setAttribute('max', videoDuration);
    const time = formatTime(videoDuration);
    duration.innerText = `${time.minutes}:${time.seconds}`;
    duration.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`)
}
function updateProgress() {
    seek.value = Math.floor(video1.currentTime);
}
function updateTimeElapsed() {
    const time = formatTime(Math.round(video1.currentTime));
    timeElapsed.innerText = str_pad_left(time.minutes, '0', 2) + ':' + str_pad_left(time.seconds, '0', 2);
    timeElapsed.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`)
}
function updateSeekTooltip(event) {
    const skipTo = Math.round((event.offsetX / event.target.clientWidth) * parseInt(event.target.getAttribute('max'), 10));
    seek.setAttribute('data-seek', skipTo)
    const t = formatTime(skipTo);
    seekTooltip.textContent = `${t.minutes}:${t.seconds}`;
    const rect = video1.getBoundingClientRect();
    seekTooltip.style.left = `${event.pageX - rect.left}px`;
}
function skipAhead(event) {
    const skipTo = event.target.dataset.seek ? event.target.dataset.seek : event.target.value;
    video1.currentTime = skipTo;
    video2.currentTime = skipTo;
    seek.value = skipTo;
}

if (video1.readyState >= video1.HAVE_FUTURE_DATA)
    initializeVideo();
else
    video1.addEventListener('canplay', initializeVideo);
video1.addEventListener('timeupdate', updateTimeElapsed);
video1.addEventListener('timeupdate', updateProgress);
seek.addEventListener('mousemove', updateSeekTooltip);
seek.addEventListener('input', skipAhead);
startBtn.addEventListener('click', () => {
    if (!video1.paused) {
        video1.pause();
        video2.pause();
        startBtn.textContent = "Start";
    } else {
        video1.play();
        video2.play();
        startBtn.textContent = "Stop ";
    }
});
reset.addEventListener('click', () => {
    video1.currentTime = 0;
    video2.currentTime = 0;
    video1.play();
    video2.play();
});
mute.addEventListener('click', () =>{
    video1.muted = !video1.muted;
    video2.muted = !video1.muted;
    if(video1.muted)
        mute.textContent = 'Unmute'
    else
        mute.textContent = ' Mute '
} )