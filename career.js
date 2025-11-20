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
    const href = link.getAttribute('href');

    // Only intercept internal anchors
    if (href && href.startsWith('#')) {
      event.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    }
    // External links will now redirect normally
  });
});



// document.querySelector("form").addEventListener("submit", function(e){
// e.preventDefault();
// alert("Thank you for applying. We will get back to you.");
// this.reset();
// });

const alertBox = document.getElementById("alertBox");


document.querySelector("form").addEventListener("submit", function(e){
e.preventDefault();


alertBox.classList.add("show");


setTimeout(()=>{
alertBox.classList.remove("show");
}, 2500);


this.reset();
});