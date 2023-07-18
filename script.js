if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('sw.js');
    });
}
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    console.log('👍', 'beforeinstallprompt', event);
    window.deferredPrompt = event;
    divInstall.classList.toggle('hidden', false);
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
