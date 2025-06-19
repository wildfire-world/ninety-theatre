import Model, { attr } from '@ember-data/model';

export default class PlayModel extends Model {
  @attr slug;
  @attr modules;

}
