// Working of email button
document.getElementById('email-button').addEventListener('click', function() {
    window.location.href = 'form.html'; 
});
// icons
document.getElementById('whatsapp-icon').addEventListener('click', function() {
  alert("Our Whatsapp Number: +919704882298")
})

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

function lastChild(el){
  console.log(el.childNodes);
  var last = el.childNodes.length - 1;
  return el.childNodes[last];
  
}

// details of exam onclick
function displayInfo(el){
  const element = el;
  var infoBlock = lastChild(element);
  if (infoBlock.style.display === 'none')
  {
    console.log('working')
  }
}

handleScroll();
// calls handleScroll function when the site is scrolled
window.addEventListener('scroll', handleScroll);


for (var i = 0; i < 4; i++){
  const element = document.querySelectorAll('.exam-card')[i];
  element.addEventListener('click',displayInfo);
}



// add click event to all .exam-card
// Get all elements with class "exam-card"
const examCards = document.querySelectorAll('.exam-card');

// Add click event listeners to each "exam-card" element
examCards.forEach((card) => {
    card.addEventListener('click', () => {
        // Find the card-content element within the clicked "exam-card"
        const cardContent = card.querySelector('.text-box');

        // Toggle the display of the card-content element
        if (cardContent.style.display === 'none' || cardContent.style.display === '') {
            cardContent.style.display = 'block';
            card.style.height = 'auto';
        } else {
            cardContent.style.display = 'none';
            if(screenWidth <= 576)
            {
              card.style.height = '130px';
            }else{
              card.style.height = '150px';
            }
        }
    });
});



