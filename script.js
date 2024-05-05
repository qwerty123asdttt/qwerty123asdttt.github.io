// Lógica para controlar la reproducción del audio con un botón
document.addEventListener('DOMContentLoaded', function() {
    var botonAudio = document.getElementById('botonAudio');
    var audioFeliz = document.getElementById('audioFeliz');
    botonAudio.addEventListener('click', function() {
        if (audioFeliz.paused) {
            audioFeliz.play();
            botonAudio.textContent = 'Pausa';
        } else {
            audioFeliz.pause();
            botonAudio.textContent = 'Reanudar';
        }
    });
});
