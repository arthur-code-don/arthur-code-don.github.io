/******************************** Toggle icon navbar **********************************/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


/******************************** Scroll sections active link **********************************/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id +']').classList.add('active')
      });
    };
  }); 
  
/******************************** Sticky navbar **********************************/
  let header = document.querySelectorAll('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  /*********** remove toggle icon and navbar when click navbar link (scroll) **********/

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

};

/******************************** Scroll reveal **********************************/

ScrollReveal({ 
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
 
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container .portfolio-box, .contact form',{ origin: 
'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',{ origin: 'left'}); 
ScrollReveal().reveal('.home-content p, .about-content',{ origin: 'right'}); 

/******************************** type js **********************************/

const typed = new Typed('.multiple-text', {
  strings: ['Software Engineer','Web Developer', 'Frontend', 'Backend', 'App Developer', 'Smart Contracts', 'NFTs & Token Creation', 'Blockchain'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});


// Email Contact Button ACTIVE 

function sendEmail() {
  Email.send({
    SecureToken : "b283dff0-c615-4b5c-8ecf-7198e0da4bb3",
    To : 'kingarthurcarverharbor@gmail.com',
    From: 'kingarthurcarverharbor@gmail.com',
    /*From : document.getElementById("email").value,*/
    Subject : "New Contact Form Inquiriy",
    Body : "Name: " + document.getElementById("name").value
    + "<br> Email: " + document.getElementById("email").value
    + "<br> Email-Subject: " + document.getElementById("email-subject").value
    + "<br> Phone no: " + document.getElementById("phone").value
    + "<br> Message: " + document.getElementById("message").value
}).then(
  message => alert("Message Sent Successfully")
);

}