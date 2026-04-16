let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const header = document.querySelector('header');

    if (scrollTop > lastScrollTop) {
        header.classList.add('shrunk');
    } else {
        header.classList.remove('shrunk');
    }

    lastScrollTop = scrollTop;
});