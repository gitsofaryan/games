document.addEventListener('DOMContentLoaded', () => {
  const animatedText = document.querySelector('.animated-text');

  animatedText.addEventListener('mouseover', () => {
    animatedText.style.animation = 'rotateText 1s forwards';
  });

  document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('.animated-img');
    
    // Example: Start the animation when the page loads
    img.style.animation = 'moveLeftToRight 5s linear infinite';
    
    // Example: Control the animation with JavaScript (optional)
    // img.style.animationPlayState = 'paused'; // To pause
    // img.style.animationPlayState = 'running'; // To resume
});

  animatedText.addEventListener('mouseout', () => {
    animatedText.style.animation = 'colorChange 3s infinite alternate';
  });
});
const faqQuestions = document.querySelectorAll('.faq-question');
  const faqAnswers = document.querySelectorAll('.faq-answer');

  faqQuestions.forEach((question, index) => {
    question.addEventListener('click', () => {
      faqAnswers[index].style.display = faqAnswers[index].style.display === 'block' ? 'none'   
 : 'block';
    });
  });

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-button').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

@keyframes rotateText {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
