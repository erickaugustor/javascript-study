


    window.addEventListener('keydown', function(e){
        // e é um objeto cheio de dados: console.log(e);

        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        if(!audio) return; //nada, quando é apertado alguma tecla que não existe
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        
        audio.currentTime = 0; //seta o tempo para zero! toca mais vezes
        audio.play();

        key.classList.add('playing');
        //reome, para remover
        
    });

    function removeTransition(e){
        if(e.propertyName !== 'transform') return; //não transforme
        this.classList.remove('playing');
    }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
