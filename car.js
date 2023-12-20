
const backToTopButton = document.querySelector('.back-to-top')
    const backToTop = () => {
    if (window.scrollY >= 100) {
    backToTopButton.classList.add('show')
    } else {
    backToTopButton.classList.remove('show')
    }
    }

    window.addEventListener('scroll', function () {
    backToTop()
    })
    function scrollToTop(event) {
      event.preventDefault()

      const href = event.Target.getAttribute('href');

      const ancora = document.querySelector('href')

      ancora.scrollIntoview({
        behavior: 'smooth',
        block: start,
      })
    }




// Verifica a posição da página para mostrar ou ocultar o botão
window.onscroll = function() {
scrollFunction();
};

function scrollFunction() {
const btnTop = document.getElementById("btnTop");
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
btnTop.style.display = "block";
} else {
btnTop.style.display = "none";
}
}
var meuBotao = document.getElementById('btnTop');

meuBotao.addEventListener('click', function() {
// Define a propriedade de estilo para tornar o background transparente
meuBotao.style.background = 'hidden';
});
// Animação suave ao clicar no botão e ocultar após o clique
function goToTop() {
const scrollStep = -window.scrollY / (1000 / 15 ); // 500 é a duração da animação em milissegundos
const scrollInterval = setInterval(function(){
if (window.scrollY !== 0) {
window.scrollBy(0, scrollStep);
} else {
clearInterval(scrollInterval);
}
}, 15);

const btnTop = document.getElementById("btnTop");
btnTop.style.transform = "translateY(-100%)";

// Adiciona um atraso para permitir que a animação de desaparecimento seja concluída
setTimeout(() => {
btnTop.style.display = "none";
btnTop.style.transform = "translateY(0)";
}, 500);
}


