document.addEventListener('DOMContentLoaded', () => {
    // Create background particles
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.position = 'fixed';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.background = '#1d4ed8';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        particle.style.opacity = Math.random() * 0.5;
        particle.style.boxShadow = '0 0 10px #1d4ed8';
        
        document.querySelector('.particles').appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 4000);
    }
    
    setInterval(createParticle, 500);

    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});