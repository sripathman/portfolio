// SHOW MENU

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)

    if(toggle && nav){
          toggle.addEventListener('click', () =>{
                nav.classList.toggle('show')
          });
    }
}

showMenu('nav_toggle','nav_menu')

// ACTIVE & REMOVE ACTIVE
const navLink = document.querySelectorAll('.nav_link')
navLink.forEach(n => n.classList.remove('active'))

function linkAction(){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


/* PROJECTS SECTION  (Image slider) */

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');  


let slideIndex = 0;

function showSlide(n)  
 {
  if (slides.length === 0) return; // Prevent infinite loop

  slideIndex = (n + slides.length) % slides.length; 
  // Handle negative and out-of-bounds indices

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex].style.display = 'block';
}

function nextSlide() {
  showSlide(slideIndex  + 1);
}

prevBtn.addEventListener('click', () => {
  showSlide(slideIndex - 1);
});

nextBtn.addEventListener('click', () => {
  showSlide(slideIndex + 1);
});

showSlide(slideIndex);  


// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);
