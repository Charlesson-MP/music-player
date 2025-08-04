const fileInput = document.querySelector('#file');
const player = document.querySelector('audio');
const nomeMusica = document.querySelector('#nomeMusica');
const msgMusica = document.querySelector('#msgMusica')

fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];

    if(file && file.type.startsWith("audio/")) {
        nomeMusica.textContent = file.name;
        msgMusica.classList.add('desaparece');

        const urlMusica = URL.createObjectURL(file);
        player.src = urlMusica;
        player.play();
    }else {
        msgMusica.classList.remove('desaparece');
    }
});