document.addEventListener("DOMContentLoaded", function() {

// ANIMAÇÃO DE DIGITAÇAO NO TEXTO h2
function escrevendoLetra() {
    function ativaLetra(elemento) {
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((letra, i) => {
            setTimeout(() => {
                elemento.innerHTML += letra;
            }, 75 * i);
        });
    }

    const titulo = document.querySelector('.digitando');
    ativaLetra(titulo);
}
// ANIMAÇÃO DE DIGITAÇAO NO PARAGRAFO
function escrevendoLetraParagrafo() {
    function ativaLetraParagrafo(elemento) {
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((letra, i) => {
            setTimeout(() => {
                elemento.innerHTML += letra;
            }, 30 * i);
        });
    }
    const paragrafo = document.querySelector('.descricao');
    ativaLetraParagrafo(paragrafo);
}

const ativaMenu = document.querySelector('.fa-bars');
const navMenu = document.querySelector('header .navegacao-primaria')

ativaMenu.addEventListener('click', ()=>{
    ativaMenu.classList.toggle('fa-x')
    navMenu.classList.toggle('ativado')
});

// Chame as funções de animação de digitação
escrevendoLetra();
escrevendoLetraParagrafo();
});