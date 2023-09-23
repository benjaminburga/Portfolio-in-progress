
// Mostrar u ocultar el botón de "Ir arriba"
window.onscroll = function() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Desplazarse hacia arriba al hacer clic en el botón de "Ir arriba"
function scrollToTop() {
    document.body.scrollTop = 0; // Para navegadores Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}

const navbar = document.getElementById('navbar');
const navbar2 = document.getElementById('darkModeToggle');


const navbarHeight = navbar.offsetHeight;





window.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById('darkModeToggle');

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});

const bodyEl = document.body;
const barEl = document.querySelector('.bar');

const updateBar = () => {
    let scrollPos = (window.scrollY / (bodyEl.scrollHeight - window.innerHeight)) * 100;
    barEl.style.width = `${scrollPos}%`;
    requestAnimationFrame(updateBar);
}

updateBar();
