// The EventSource is in this github 
// https://github.com/mattboldt/typed.js

// Typed is the Object

const typed = new Typed(".multiple-text" , {
    strings:["Frentend Developer","Backend Developer","QA Manuale Tester"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

let menuIcon = document.querySelectorAll('section');
let navbar = document.querySelectorAll('header nav a');

menuIcon.onclik = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
};




// ---scroll section ovtive link---

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scroll >100);

    //remove toggle icon and navbar when click navbar links 
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

//scrollreveal
ScrollReveal({
    reset: true,
    distance: '800px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading',{origin: 'top'});
ScrollReveal().reveal('.home-img, .skills-container, .portfolio-box, .contact form',{origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',{origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content',{origin: 'rigth'});