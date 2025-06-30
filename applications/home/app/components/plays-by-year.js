import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PlaysByYear extends Component {
  @tracked briefVisible = true;

  @action
  showBrief() {
    console.log("Brief clicked ✅");

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
