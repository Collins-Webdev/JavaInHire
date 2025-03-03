// Ajoutez des animations et des interactions ici
document.addEventListener('DOMContentLoaded', function() {
    // Exemple d'animation pour les cartes de fonctionnalités
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'transform 0.3s ease';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // Exemple de popup pour le bouton d'inscription
    const signupButton = document.querySelector('.btn-signup');
    signupButton.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Inscription bientôt disponible!');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Exemple d'animation pour les cartes de fonctionnalités
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'transform 0.3s ease';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // Exemple de popup pour le bouton d'inscription
    const signupButton = document.querySelector('.btn-signup');
    signupButton.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Inscription bientôt disponible!');
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Exemple d'animation pour les cartes de fonctionnalités
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'transform 0.3s ease';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // Exemple de popup pour le bouton d'inscription
    const signupButton = document.querySelector('.btn-signup');
    signupButton.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Inscription bientôt disponible!');
    });
});