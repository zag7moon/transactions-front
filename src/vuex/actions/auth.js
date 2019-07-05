import * as type from '../types';
import { throwError } from '../../utils';

export default {
  [type.AUTH]: ({ commit, getters }, { username, password } = {}) => {
    const name = type.AUTH;
    commit(type.LOADING, name);
    return getters
      .POST('/token/', {username, password})
      .then(model => {
        commit(type.SET_MODEL, {name, model})
        localStorage.setItem('ACCESS_TOKEN', model.access)
        localStorage.setItem('REFRESH_TOKEN', model.refresh)
      })
      .catch(throwError(commit, 'Ошибка получения'))
      .finally(() => commit(type.LOADED, name));
  }
};
