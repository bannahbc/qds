

const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentSlide = 0;
let slideInterval;

function nextSlide() {
  slides[currentSlide].style.opacity = '0';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.opacity = '1';
}

function prevSlide() {
  slides[currentSlide].style.opacity = '0';
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].style.opacity = '1';
}

function startSlideInterval() {
  slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

function stopSlideInterval() {
  clearInterval(slideInterval);
}

nextBtn.addEventListener('click', () => {
  stopSlideInterval();
  nextSlide();
  startSlideInterval();
});

prevBtn.addEventListener('click', () => {
  stopSlideInterval();
  prevSlide();
  startSlideInterval();
});

startSlideInterval(); // Start auto-sliding when the page loads


// const projectPrev = document.querySelector('#project_prev')
// const projectNext = document.querySelector('#project_next')
// console.log(projectNext)
// const contentProject = document.querySelector('.project-cols')
// let currentIndex = 0;
// const itemWidth = contentProject.offsetWidth;
// projectPrev.addEventListener('click',()=>{
//   currentIndex--;
//   if(currentIndex<0){
//     currentIndex =contentProject.children.length-1;
//   }
//   contentProject.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
// });
// projectNext.addEventListener('click',()=>{
//   currentIndex++;
//   if(currentIndex>=contentProject.children.length){
//     currentIndex=0;

//   }
//   contentProject.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
// })




// navbar
window.addEventListener('scroll',()=>{
  const navbar = document.querySelector('nav');
  if(window.scrollY>300&&screen.width>849){
    navbar.classList.add('scrolled-nav')
  }else{
    navbar.classList.remove('scrolled-nav')

  }
});
const navBtn = document.getElementById('navBtn');

const navItems = document.querySelector('.nav-items');
navBtn.addEventListener('click', () => {
  navItems.style.display = navItems.style.display === 'block' ? 'none' : 'block';
  navItems.classList.toggle('resposiveNav')
});
function checkWindowSize() {
  if (window.innerWidth > 850) {
    navItems.style.display = 'block';
  } else {
    navItems.style.display = 'none';
  }
}

checkWindowSize(); // Check initial window size

window.addEventListener('resize', checkWindowSize); 

const navLinks = navItems.querySelectorAll('ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default link behavior

    const targetId = link.getAttribute('href').substring(1);   
 // Get the target ID
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,   

        behavior: 'smooth'   
 // Enable smooth scrolling
      });
    }
  });
});