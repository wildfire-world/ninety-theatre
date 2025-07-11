import Service from '@ember/service';
import ScrollReveal from 'scrollreveal';

export default class ScrollAnimateService extends Service {
   revealElement(element) {
    setTimeout(() => {
      ScrollReveal().clean(element); // pehle se lagi animation ko remove karo
      ScrollReveal().reveal(element, {
        distance: '30px',
        origin: 'bottom',
        duration: 1000,
        easing: 'ease-in-out',
        reset: false
      });
    }, 100);
  }
}
