if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('sw.js');
    });
}
document.querySelector("#debug").addEventListener("click", function() {
    const wave = document.querySelector("#wave");
    if (wave.paused) {
        wave.play();
        document.querySelector("#debug").value = "Böcek Ayıklamayı Durdur";
    }
    else {
        wave.pause();
        document.querySelector("#debug").value = "Böcek Ayıkla";
    }
});
document.querySelector("#wave").onended = function() {
    wave.play();
}
