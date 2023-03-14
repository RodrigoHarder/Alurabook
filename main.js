const menu = document.querySelector('.cabecalho__menu-hamburguer');

menu.addEventListener('click', () => {
    menu.classList.toggle('menu__hamburguer-ativo')
})

const swiper = new Swiper('.swiper', {
    spaceBetween: 10,
    slidesPerView: 3,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
  }});