window.onload = function () {
    const video = document.querySelector(".videos");

    window.playVideo = function() {
        video.play();
    }
    window.playpause = function() {
        video.pause();
    }
    window.playstop = function() {
        video.pause();
        video.currentTime = 0;
    }
    window.playback = function() {
        video.currentTime = Math.max(0, video.currentTime - 10);
    }
    window.playforward = function() {
        video.currentTime = Math.min(video.duration, video.currentTime + 10);
    }
    window.playspeedup = function() {
        video.playbackRate += 0.1;
    }
    window.playspeeddown = function() {
        video.playbackRate = Math.max(0.1, video.playbackRate - 0.1);
    }
    window.playspeedreset = function() {
        video.playbackRate = 1;
    }
} // <= 무조건 window.load(화면 로딩 전부 다 될때까지 기다리기)
// <= window.함수명 (전역 함수 선언)