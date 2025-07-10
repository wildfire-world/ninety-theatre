import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SeeMore extends Component {
    @tracked showBrief = false;

  @action
  toggleBrief() {
    this.showBrief = !this.showBrief;
  }
}
