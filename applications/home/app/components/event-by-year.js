import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class EventByYear extends Component {
    @service('scroll-animate') scrollAnimator;

   @action
    animateReveal(element) {
      this.scrollAnimator.revealElement(element);
    }

}
