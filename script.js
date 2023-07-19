if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('sw.js?v=2');
    });
}
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    console.log('👍', 'beforeinstallprompt', event);
    window.deferredPrompt = event;
});
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
