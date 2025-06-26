import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';


export default class IndexController extends Controller {
  @service store;
  briefVisible = true;
  @tracked plays;
  @tracked model;




  // filter
  // @action
  // onload() {
  //   console.log("hello world")
  //   this.plays = this.model.plays;
  // }

  @action
  showBrief() {
    let tableWrapper = document.getElementById('your-table-wrapper-id');
    tableWrapper.classList.toggle('brief-collapsed');

    const allBriefData = document.querySelectorAll('.showBriefData');
    const openSymbol = document.querySelector('.open-symbol');
    const closeSymbol = document.querySelector('.close-symbol');

    allBriefData.forEach(element => {
      element.classList.toggle('hide-brief');
    })

    if (this.briefVisible) {
      openSymbol.style.display = "none";
      closeSymbol.style.display = "inline";
    } else {
      openSymbol.style.display = "inline";
      closeSymbol.style.display = "none";
    }
    this.briefVisible = !this.briefVisible;
  }




  // Filter
  // @action
  //  filterData(e) {
  //   e.preventDefault()
  //   let form = new FormData(e.target);
  //   const year = form.get('year')
  //   const language = form.get('language')
  //   // console.log(form.get('year'), form.get('language'));
  //   console.log(year, language)
  //   // console.log(this.plays.map(p => p.modules.year));
  // }
}





