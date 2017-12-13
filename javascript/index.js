//Criando o canvas
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);



//setando imagem do fundo
let bgReady = false;
const bgImage = new Image();

//evento de onload, quando carregar, colocar true.
bgImage.onload = function(){
    bgReady = true;
};

bgImage.src = 'images/background.png';



//Imagem do herói
let heroiReady = false;
const heroImage = new Image();

//quando carregar
heroImage.onload = function(){
    heroiReady = true;
}

heroImage.src = 'images/hero.png';




//Imagem do monstro
let monsterReady = false;
const monsterImage = new Image();

monsterImage.onload = function(){
    monsterImage = true;
}

monsterImage.src = 'images/monster.png';



//Objetos do jogo
const hero = {
    speed: 256 //movimento de pixels por segundo
};

const monster = {};

let monstersCaught = 0;



//Eventos do teclado
const keysDown = {};

//window é quase o document, é pro escopo global do DOM, todos os eventos da janela
window.addEventListener('keydown', function(e){
    keysDown[e.keyCode] = true;
}, false);