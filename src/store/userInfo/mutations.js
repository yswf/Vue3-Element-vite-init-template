import { MUTATION_TYPE } from './types';

export default {
  [MUTATION_TYPE.LOAD_SUCCESS](state, payload) {
    state.userInfo = { ...state.userInfo, ...payload };
    state.userInfo.token
      && window.sessionStorage.setItem('token', state.userInfo.token);
    window.location.href = '#/index/info';
  },
  [MUTATION_TYPE.LOAD_FAILURE]() {

  },
};
