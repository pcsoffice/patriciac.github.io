document.getElementById('quem-sou-link').addEventListener('click', function(event) {
    event.preventDefault();
    toggleVisibility('quem-sou-content');
});

document.getElementById('formacao-link').addEventListener('click', function(event) {
    event.preventDefault();
    toggleVisibility('formacao-content');
});

document.getElementById('portfolio-link').addEventListener('click', function(event) {
    event.preventDefault();
    toggleVisibility('portfolio-content');
});

document.getElementById('contato-link').addEventListener('click', function(event) {
    event.preventDefault();
    toggleVisibility('contato-content');
});

function toggleVisibility(contentId) {
    var content = document.getElementById(contentId);
    if (content.classList.contains('visible')) {
        content.classList.remove('visible');
    } else {
        content.classList.add('visible');
    }
}
