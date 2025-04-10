const demoLink = document.getElementById('demo-link');
const modal = document.getElementById('demoModal');
const closeBtn = document.querySelector('.close-btn');
const iframe = document.getElementById('demoFrame');
const demoUrl = 'https://mateusfacundes.github.io/pokedex/';

demoLink.addEventListener('click', function(e) {
    e.preventDefault();
    iframe.src = demoUrl;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    iframe.src = '';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
        iframe.src = '';
        document.body.style.overflow = 'auto';
    }
});