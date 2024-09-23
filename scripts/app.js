onload = () =>{
    document.body.classList.remove("container");
};

// Seleccionamos el elemento div con clase "message" y el elemento de audio
const messageDiv = document.querySelector('.message');
const myAudio = document.getElementById('myAudio');

// Añadimos un evento de clic al div para reproducir el audio
messageDiv.addEventListener('click', function() {
    myAudio.play();
});
