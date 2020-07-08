import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import { getRemoteList } from '../service/index';
const UserModel= {
  namespace: 'users',
  state: {
  },
  effects: {
    *getRemote({ payload }, { call, put }) {
      const data= yield call(getRemoteList)
      console.log( '334',data);
      yield put ({
        type:'getList',
        payload:{data}
      })
    },
  },
  reducers: {
    getList(state, {payload}) {
      console.log(payload);
      payload=payload.data
      return payload;
    },
    // 启用 immer 之后
    // save(state, action) {
    //   state.name = action.payload;
    // },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/user') {
          dispatch({
            type: 'getRemote',
          })
        }
      });
    }
  }
};
export default UserModel;