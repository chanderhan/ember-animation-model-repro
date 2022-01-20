import Controller from '@ember/controller';
import { fadeIn, fadeOut } from 'ember-animated/motions/opacity';
import { printSprites } from 'ember-animated';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class ApplicationController extends Controller {
  queryParams = ['year'];
  @tracked year = '2022';
  
  @action
  changeYear(year) {
    this.year = year;
  }

  get modelAsArray() {
    return this.model.toArray();
  }

  *transition({
    receivedSprites,
    sentSprites,
    removedSprites,
    insertedSprites,
  }) {
    printSprites(arguments[0]);
    // debugger
    // received and sent sprites are flying above all the others
    receivedSprites.concat(sentSprites).forEach((sprite) => {
      sprite.applyStyles({
        'z-index': '1',
      });
    });

    receivedSprites.forEach(fadeIn);
    sentSprites.forEach(fadeOut);

    removedSprites.forEach(fadeOut);
    insertedSprites.forEach(fadeIn);
  }
}
