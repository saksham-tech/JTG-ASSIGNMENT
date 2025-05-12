document.addEventListener("DOMContentLoaded", function () {
  
  const video = document.getElementById('demo-video');
  const playIcon = document.getElementById('play-icon');

  playIcon.style.display = video.paused ? 'block' : 'none';

  video.addEventListener('click', function () {
    if (video.paused) {
      video.play();
      playIcon.style.display = 'none';
    } else {
      video.pause();
      playIcon.style.display = 'block';
    }
  });

  video.addEventListener('ended', function () {
    playIcon.style.display = 'block';
  });

  const testimonials = document.querySelectorAll(".testimonial");
  const dots = document.querySelectorAll(".dot");
  let current = 0;

  function showTestimonial(index) {
    testimonials.forEach((t, i) => {
      t.classList.toggle("active", i === index);
      dots[i].classList.toggle("active", i === index);
    });
    current = index;
  }

  function showNextTestimonial() {
    const next = (current + 1) % testimonials.length;
    showTestimonial(next);
  }

  let timer = setInterval(showNextTestimonial, 5000);

  dots.forEach((dot, index) => {
    dot.dataset.index = index;
    dot.addEventListener("click", () => {
      clearInterval(timer);
      showTestimonial(index);
      timer = setInterval(showNextTestimonial, 5000);
    });
  });

  showTestimonial(0);

  const modal = document.getElementById("success-modal");
  const closeBtn = document.querySelector(".close-modal");

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const sendButton = document.getElementById("send-btn");
  const contactForm = document.getElementById("contact-form");

  function showModal() {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; 
  }

  function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = ""; 
  }


  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();  

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

   
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    
    showModal();

    
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  });

 
  closeBtn.addEventListener("click", closeModal);


  window.onclick = function (event) {
    if (event.target === modal) {
      closeModal();
    }
  };
});
