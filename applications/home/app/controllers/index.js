import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';


export default class IndexController extends Controller {
  @service store;
  briefVisible = true;
  @tracked viewData = 'listform'; // Default 'list'
  @tracked selectedYear = [1989];

  @tracked activeYear = 1989;

  years = [1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000];

  @action
  handleActiveYear(year) {
    // console.log(this.selectedYear)
    this.activeYear = year;
    if (!this.selectedYear.includes(year)) {
      this.selectedYear = [...this.selectedYear, year];
    }

    this.selectedYear.forEach((year) => {
  console.log("Visited year:", year);
});


  }

  @action
  handleListview() {
    this.viewData = 'listform';
  }

  @action
  handleCardview() {
    this.viewData = 'cardform';
  }

}



