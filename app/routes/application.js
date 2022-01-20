import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service store;
  queryParams = {
    year: {
      refreshModel: true,
    },
  };
  async model(params) {
    return await this.store.query('movie', {
      ...params,
    });
  }
}
