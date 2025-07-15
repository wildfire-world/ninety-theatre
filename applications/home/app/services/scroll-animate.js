import Service from '@ember/service';
import ScrollReveal from 'scrollreveal';

export default class ScrollAnimateService extends Service {
  revealElement(element) {
    // Ensure initial state
    element.classList.remove('sr-hidden');

    requestAnimationFrame(() => {
      ScrollReveal().clean(element); // Remove old animation
      ScrollReveal().reveal(element, {
        distance: '30px',
        origin: 'bottom',
        duration: 600,
        opacity: 0,
        easing: 'ease-in-out',
        reset: false
      });
    });
  }
}
