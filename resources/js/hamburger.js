const button = document.getElementById('header-hamburger');
button.addEventListener('click', toggleClass);

function toggleClass() {
    button.classList.toggle("is-active");
}
