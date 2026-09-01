// Efeito de scroll paralelo (estilo GTA)
document.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const hero = document.querySelector('.hero');
    
    // Efeito parallax suave na hero
    if (hero) {
        hero.style.transform = `translateY(${scrollY * 0.5}px)`;
    }
});

// Animação de elementos ao entrar na tela
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar cards de projetos, skills, learning e about
document.querySelectorAll('.project-card, .skill-card, .learning-card, .about p').forEach(el => {
    observer.observe(el);
});

// Suavizar navegação por âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Adicionar classe fade-in aos elementos iniciais
document.querySelectorAll('[id]').forEach(el => {
    el.style.scrollMarginTop = '150px';
});

// BONUS: Atualizar números binários aleatoriamente
const binaryDigits = document.querySelectorAll('.binary-digit');
setInterval(() => {
    binaryDigits.forEach(digit => {
        digit.textContent = Math.round(Math.random());
    });
}, 3000); // Muda a cada 1 segundo

// Log de inicialização
console.log('🚀 Portfólio carregado!');
console.log('🔐 Modo hacker ativado...');
console.log('💻 Python · FastAPI · Automação');