import Component from '@glimmer/component';
import { action } from '@ember/object';
// import Swiper, { EffectCards } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/effect-cards';

// 🟢 Register the effect
// Swiper.use([EffectCards]);

export default class AnimationSwipper extends Component {
  @action
  animateStack(element) {
    element.addEventListener('click', () => {
      const topCard = element.firstElementChild;
      topCard.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
      topCard.style.transform = 'scale(0.8) translateY(100px)';
      topCard.style.opacity = '0';

      setTimeout(() => {
        topCard.style.transition = 'none';
        topCard.style.transform = 'none';
        topCard.style.opacity = '1';
        element.appendChild(topCard);
      }, 600);
    });
  }
}
