let menuIcon = document.querySelector('#menu-Icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');


window.onscroll = () => {
    sections.forEach(src => {
        let top = window.scrollY;
        let offset = src.offsetTop - 150;
        let height = src.offsetHeight;
        let id = src.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a
                [href^=" + id + ' ]').classList.add
                 ('active');
            })
        }
    })
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
