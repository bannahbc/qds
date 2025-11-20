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



document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault(); // prevent form submission

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  // Simple email regex
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!emailPattern.test(email)) {
    message.textContent = "Invalid email";
    message.style.color = "red";
  } else if (password === "") {
    message.textContent = "Password required";
    message.style.color = "red";
  } else {
    message.textContent = "Invalid Email or password ! please try again"; 
    message.style.color = "red";
  }
});
