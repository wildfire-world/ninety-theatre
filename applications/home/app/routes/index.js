import Route from '@ember/routing/route';
import { service } from '@ember/service';
// import RSVP from 'rsvp';

export default class IndexRoute extends Route {
  @service store;

  async model() {
    let plays = await this.store.query('play', { modules: { content_privacy: 'public' }, page: { limit: -1 }, sort: "title" });
    let milieus = await this.store.query('milieu', { modules: { content_privacy: 'public' }, page: { limit: -1 }, sort: "title" });
    let theatreMilieus = await this.store.query('theatre milieu', { modules: { content_privacy: 'public' }, page: { limit: -1 }, sort: "title" });

    // console.log("fetch error",theatreMilieus)
    return {
      milieus,
      plays,
      theatreMilieus
    }
  }

}
