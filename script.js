const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const modal = document.querySelector('.modal');
const buttonReset = document.querySelector('#reset');

const jump = () => {
    mario.classList.add('jump'); /*Adiciona pulo*/

    setTimeout(() => { /*Espera um tempo e remove a class de pulo*/
        mario.classList.remove('jump');
    }, 500)

}


const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); // (+) transforma o texto em número
    const cloudsPosiiton = +window.getComputedStyle(clouds).right.replace('px', '');;


    //SE O MARIO ENCOSTA NO TUBO, PARE O JOGO 
    if (pipePosition <= 165 && pipePosition > 0 && marioPosition < 100) {

        //amostrando o modal
        modal.style.display = 'block';


        //parando o pipe()tubo
        pipe.style.animation = 'nome';
        pipe.style.left = `${pipePosition}px`;

        //trocando a imagem do Mario
        mario.style.animation = 'nome';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = './imagens/game-over.png';
        mario.style.width = '80px';
        mario.style.height = '200px';
        mario.style.marginLeft = '80px';


        //parando as nuvens
        clouds.style.animation = 'nome';
        clouds.style.right = `${cloudsPosiiton}px`;

        clearInterval(loop);
    }

}, 10)


//fechar o modal
buttonReset.addEventListener('click', () => {
    //escondendo o modal
    modal.style.display = 'none';


   


})



window.addEventListener('click', jump);