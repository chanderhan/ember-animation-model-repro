import Model, { attr } from '@ember-data/model';

export default class MovieModel extends Model {
  @attr('string') title;
  @attr('number') year;
}
