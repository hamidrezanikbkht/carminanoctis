let scrollSpeed = 0.4;
let currentScroll = window.scrollY;
let targetScroll = window.scrollY;
let isScrolling = false;

window.addEventListener("wheel", (e) => {
  e.preventDefault();
  targetScroll += e.deltaY * scrollSpeed;
  targetScroll = Math.max(0, Math.min(targetScroll, document.body.scrollHeight - window.innerHeight));

  if (!isScrolling) {
    isScrolling = true;
    smoothScroll();
  }
}, { passive: false });

function smoothScroll() {
  currentScroll += (targetScroll - currentScroll) * 0.1;
  window.scrollTo(0, currentScroll);

  if (Math.abs(targetScroll - currentScroll) > 0.5) {
    requestAnimationFrame(smoothScroll);
  } else {
    isScrolling = false;
  }
}
window.addEventListener("scroll", () => {
    document.querySelectorAll(".parallax-text").forEach((el) => {
      let speed = el.getAttribute("data-speed") || 10; 
      let y = window.scrollY / speed;
      el.style.transform = `translateY(-${y}px)`; 
    });
  });
  const images = [
    document.querySelector(".parallax-1"),
    document.querySelector(".parallax-2"),
    document.querySelector(".parallax-3"),
    document.querySelector(".parallax-4")
  ];
  
  images.forEach(image => {
    image.style.transform = "translateY(100%)";
  });
  
  function moveImage(image) {
    image.style.transition = "transform 0.1s ease-in-out";
    image.style.transform = "translateY(0)";
    setTimeout(() => {
      image.style.transition = "transform 0.1s ease-in-out";
      image.style.transform = "translateY(100%)";
    }, 100);
  }
  
  images.forEach(image => {
    const randomStartDelay = Math.floor(Math.random() * 4000) + 500; 
    const randomInterval = Math.floor(Math.random() * 6000) + 5000; 
  
    setTimeout(() => {
      moveImage(image);
      setInterval(() => moveImage(image), randomInterval);
    }, randomStartDelay);
  });
  const sec = document.getElementById('sec');
const sec2 = document.getElementById('sec2');
const sec3 = document.getElementById('sec3');
const sec4 = document.getElementById('sec4');

sec.style.transition = "opacity 0.5s ease-in-out";
sec2.style.transition = "opacity 0.5s ease-in-out";
sec3.style.transition = "opacity 0.5s ease-in-out";
sec4.style.transition = "opacity 0.5s ease-in-out";

window.addEventListener('scroll', () => {
  let c = window.scrollY; 
  console.log('scroll position:', c);

  // استفاده از getBoundingClientRect() برای دریافت موقعیت دقیق
  let secOffset = sec.getBoundingClientRect().top + c; 
  let sec2Offset = sec2.getBoundingClientRect().top + c; 
  let sec3Offset = sec3.getBoundingClientRect().top + c; 
  let sec4Offset = sec4.getBoundingClientRect().top + c; 

  console.log('sec offset:', secOffset);
  console.log('sec2 offset:', sec2Offset);

  sec.style.opacity = c > secOffset ? 1 : 0;
  sec2.style.opacity = c > sec2Offset ? 1 : 0;
  sec3.style.opacity = c > sec3Offset ? 1 : 0;
  sec4.style.opacity = c > sec4Offset ? 1 : 0;
});


  
  