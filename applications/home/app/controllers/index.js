import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';


export default class IndexController extends Controller {
  @service store;
  briefVisible = true;
    @tracked viewData = 'listform'; // Default is 'list'

  @tracked selectedYear = 1989;

  years = [1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000];

  @action
  selectYear(year) {
    console.log(year)
    this.selectedYear = year;
  }

  @action
  handleListview() {
    const viewListTypeDataBtn = document.getElementById("list-form")
        this.viewData = 'listform';
    console.log(viewListTypeDataBtn);
  }

  @action
  handleCardview() {
    const viewCardTypeDataBtn = document.getElementById("card-form")
        this.viewData = 'cardform';
    console.log(viewCardTypeDataBtn);
  }

}



