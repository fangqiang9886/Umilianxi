import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import { getRemoteList, editRecord, deleteRecord } from '../service/index';
import {
  message 
} from 'antd';
const UserModel= {
  namespace: 'users',
  state: {
  },
  effects: {
    *getRemote({ payload }, { call, put }) {
      const data= yield call(getRemoteList)
      // console.log( '334',data);
      yield put ({
        type:'getList',
        payload:{data}
      })
    },
    *edit({ payload:{id,values} }, { call, put }) {
      const data= yield call(editRecord,{id,values})
      // // console.log( '334',data);
      // yield put ({
      //   type:'getList',
      //   payload:{data}
      // })
      // console.log('edit here',payload);
      
    },
    *delete({ payload: { id } }, { put, call, select }) {
      const data = yield call(deleteRecord, { id });
      if (data) {
        message.success('Delete successfully.');
        const { page, per_page } = yield select(
          (state) => state.users.meta,
        );
        yield put({
          type: 'getRemote',
          payload: {
            page,
            per_page,
          },
        });
      } else {
        message.error('Delete failed.');
      }
    },
  },
  reducers: {
    getList(state, {payload}) {
      
      payload = payload.data
      console.log(payload);
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