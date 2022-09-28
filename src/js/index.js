const burgerSpan = document.querySelector('.header-body__nav_burger');
const burgerMenu = document.querySelector('.header-body__nav_menu');
const body = document.querySelector('body');
const anchors = document.querySelectorAll('a[href*="#"]');
const commentBtn = document.querySelector('.why-flex .buttons')
const comments = document.querySelectorAll('.why-flex__section')

for (let anchor of anchors) {
  anchor.addEventListener('click', (e) => {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substring(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
};

burgerSpan.addEventListener("click", () =>{
    burgerSpan.classList.toggle('_active');
    burgerMenu.classList.toggle('_active');
    body.classList.toggle('lock')
});

commentBtn.addEventListener("mousedown", () =>{
    for (const iterator of comments) {
        iterator.classList.add('_active');
    }
    commentBtn.innerHTML = 'Close';
});

commentBtn.addEventListener("mouseup", () =>{
    for (const iterator of comments) {
        iterator.classList.remove('_active');
    }
    commentBtn.innerHTML = 'View more';
});