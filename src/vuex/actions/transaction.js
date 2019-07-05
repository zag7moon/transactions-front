import * as type from '../types';
import { throwError } from '../../utils';

export default {
  [type.FETCH_TRANSACTIONS]: ({ commit, getters }, { limit, offset } = {}) => {
    const name = type.TRANSACTIONS;
    commit(type.LOADING, name);
    // console.log(getters.headers)
    return getters
      .GET('/transaction/', {limit, offset})
      .then(list => {
        commit(type.SET_LIST, {name, list})
      })
      .catch(throwError(commit, 'Ошибка получения'))
      .finally(() => commit(type.LOADED, name));
  }
};
