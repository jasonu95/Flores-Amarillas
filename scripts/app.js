/* onload = () =>{
    document.body.classList.remove("container");
};

// Seleccionamos el elemento div con clase "message" y el elemento de audio
const messageDiv = document.querySelector('.message');
const myAudio = document.getElementById('myAudio');

// Añadimos un evento de clic al div para reproducir el audio
messageDiv.addEventListener('click', function() {
    myAudio.play();
}); */


// Al cargar la página, se esconde el contenido principal
window.onload = () => {
    document.getElementById('playButton').addEventListener('click', () => {
        // Desvanecer la pantalla de inicio
        const introScreen = document.getElementById('introScreen');
        introScreen.classList.add('fade-out');
        
        // Mostrar el contenido principal después de la animación
        setTimeout(() => {
            introScreen.style.display = 'none';
            document.getElementById('mainContent').style.display = 'block';

            // Iniciar la animación y la música
            document.getElementById('myAudio').play();
        }, 1000); // Coincide con la duración de la animación de desvanecimiento
    });
};
