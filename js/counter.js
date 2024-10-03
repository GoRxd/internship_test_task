document.addEventListener("DOMContentLoaded", () => {
    const animateCounter = (counter) => {
      const target = +counter.getAttribute("value");
      const duration = 1750;
      const increment = target / (duration / 20);
  
      let currentValue = 0;
      const updateCount = () => {
        currentValue += increment;
  
        if (currentValue < target) {
          counter.innerText = Math.floor(currentValue);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };
  
      updateCount();
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });
  
    document.querySelectorAll('.counter').forEach(counter => observer.observe(counter));
  });
  