// Working of email button
document.getElementById('email-button').addEventListener('click', function() {
    window.location.href = 'form.html'; 
});

// To know the screen size
const screenWidth = window.innerWidth;

if (screenWidth <= 1023) {
    document.getElementById('call-button').addEventListener('click', function() {
    window.location.href = 'tel:+919704882298';
  })
} else if (screenWidth >= 1024) {
    document.getElementById('call-button').addEventListener('click', function() {
    alert("Our Mobile Number: +919704882298")
  })
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  for (var i = 0; i < 4; i++){
    const element = document.querySelectorAll('.exam-card')[i];
  
  if (isElementInViewport(element)) {
    element.classList.add('active');
  }
  }
  
}
handleScroll();
// calls handleScroll function when the site is scrolled
window.addEventListener('scroll', handleScroll);




