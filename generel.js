document.addEventListener('DOMContentLoaded', () => {
    const interBubble = document.querySelector('.interactive');
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(() => {
            move();
        });
    }

    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });

    move();
});

const home = document.getElementById("home");
let bubbleCount = 0;
const maxBubbles = 100;
let lastBubbleTime = 0;
const bubbleInterval = 200;

home.addEventListener("mousemove", function(e) {
  const currentTime = Date.now();
  
  if (bubbleCount < maxBubbles && (currentTime - lastBubbleTime) > bubbleInterval) {
    const bubble = document.createElement("span");
    bubble.classList.add("bubble");
    
    const x = e.clientX;
    const y = e.clientY;
    
    bubble.style.left = x + "px";
    bubble.style.top = y + "px";
    
    home.appendChild(bubble);
    bubbleCount++; 
    lastBubbleTime = currentTime; 

    setTimeout(() => {
      bubble.remove();
      bubbleCount--;
    }, 6000); 
  }
});

let currentSlide = 0;

function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    const totalItems = document.querySelectorAll('.carousel-item').length;

    // Loop around when reaching the ends
    if (index >= totalItems) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalItems - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;  // Each slide is 100% wide
    carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Initialize the first slide
showSlide(currentSlide);


