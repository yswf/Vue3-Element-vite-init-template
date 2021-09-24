import { createStore } from 'vuex';
import user from './userInfo';

export default createStore({
  modules: {
    user,
  },
});
