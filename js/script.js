let scrollBtn = document.getElementById("scrollToTop");
let lastScrollTop = 0;

window.onscroll = () => {
    let top = window.scroll;

    if (top > 300 && top > lastScrollTop) {
        scrollBtn.style.display = "block"
    } else {
        scrollBtn.style.display = "none"
    }
}

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar a");

window.onscroll = () => {
    let top = window.scroll;

    sections.forEach((section) => {
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
                link.classList.remove("active");

                let activeLink = document.querySelectorAll(`.navbar a[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add("ative");
                }
            });
        }
    });
};

scrollBtn.addEventListener("click", () =>{
    window.scrollTo({top: 0,
        behavior: "smooth"
    });
});
















// ---------toggle icon--------------
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// ---------scroll sections active link--------------
// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('.header .navbar a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scroll;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height ) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.header navbar a[href*='+ id + ']').classList.add('active');
            });

        };
    });
};
    // ---------sticky navbar--------------
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.onscroll > 100);

    // ---------remove toggle icon and navbar when click navbar link (scroll)--------------
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

 // ---------scroll reveal--------------
 ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration:2000,
    delay: 200
 });

 ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
 ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact-form', {origin: 'bottom'});
 ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
 ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});


  // ---------typed js--------------
  const typed = new typed ('.multiple-text', {
    strings: ['Frontend Developr', 'Youtuber', 'Blogger',],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });