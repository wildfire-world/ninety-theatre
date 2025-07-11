import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
// import ScrollReveal from 'scrollreveal';
import { service } from '@ember/service';

export default class PlaysByYear extends Component {
  @tracked briefVisible = true;
@service('scroll-animate') scrollAnimator;

  //  animateReveal(element) {
  //   setTimeout(() => {
  //     ScrollReveal().reveal(element, {
  //       distance: '20px',
  //       origin: 'bottom',
  //       duration: 1000,
  //       easing: 'ease-in-out',
  //       reset: false
  //     });
  //   }, 100);
// }

 @action
  animateReveal(element) {
    this.scrollAnimator.revealElement(element);
  }



  @action
  showBrief() {
    // console.log("Brief clicked");

    let tableWrapper = document.getElementById('tableWraper');
    tableWrapper?.classList.toggle('brief-collapsed');

    const allBriefData = document.querySelectorAll('.showBriefData');
    const openSymbol = document.querySelector('.open-symbol');
    const closeSymbol = document.querySelector('.close-symbol');

    allBriefData.forEach(element => {
      element.classList.toggle('hide-brief');
    });

    if (this.briefVisible) {
      openSymbol.style.display = "none";
      closeSymbol.style.display = "inline";
    } else {
      openSymbol.style.display = "inline";
      closeSymbol.style.display = "none";
    }

    this.briefVisible = !this.briefVisible;
  }
}
