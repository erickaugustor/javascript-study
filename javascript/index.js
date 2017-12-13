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
//passando o proprio evento pela função
//o e é o evento
//keysdown é o objeto, e ele adiciona a propriedade, depois do momento da criação
//notação [] 
//propriedade keyCode
window.addEventListener('keydown', function(e){
    keysDown[e.keyCode] = true;
    //ele pega o codigo da tecla que está digitando
    //ele pega o código da tecla
    //dependendo da tecla, ele vai atribuir o valor para true
    //ele está apertando a tecla mesmo
}, false);

window.addEventListener('keyup', function(e){
    delete keysDown[e.keyCode];
    //quando eu soltar, ele vai deletar o evento da tecla
}, false);



//Resetar o jogo quando for pego o monstro
//expressão de função
const reset = function(){
    hero.x = canvas.width/2;
    hero.y = canvas.height/2;

    monster.x = 32 + (Math.random() * (canvas.width - 64));
    monster.y = 32 + (Math.random() * (canvas.width - 64));
};


//Atualizar objeto do jogo
//quando a função for chamada, o modifier, receberá valor de calculo, que atualizara o tempo
const updtade = function(modifier){
    //cada tecla tem um valor, 38 é um valor da seta
    if(38 in keysDown){ 
        hero.y -= hero.speed * modifier;
    }
    if(40 in keysDown){
        hero.y += hero.speed * modifier;
    }
    if(37 in keysDown){
        hero.x -= hero.speed * modifier;
    }
    if(39 in keysDown){
        hero.x += hero.speed * modifier;
    }

    //se os personagem se encostarem?
    if(
         hero.x <= (monster.x + 32)
         && monster.x <= (hero.x + 32)
         && hero.y <= (monster.y + 32)
         && monster.y <= (hero.y + 32)
    ){
        ++monstersCaught;
    }
};