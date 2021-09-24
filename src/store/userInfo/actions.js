import { ElMessage } from 'element-plus';
import { ACTION_TYPE, MUTATION_TYPE } from './types';
import api from '../../api';

export default {
  async [ACTION_TYPE.LOAD_REQUEST]({ commit }, payload) {
    try {
      const { data: result } = await api.postLogin(payload);
      if (result.meta.status !== 200) {
        return ElMessage.error(result.meta.msg); // 密码错误不能算请求失败
      }
      ElMessage.success(result.meta.msg);
      commit(MUTATION_TYPE.LOAD_SUCCESS, result.data);
    } catch (error) {
      commit(MUTATION_TYPE.LOAD_FAILURE);
    }
  },
};
