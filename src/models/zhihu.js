// import * as types from '../types.js/zhihu-types'
import axios from 'axios'
import {queryNewsLatests} from '../services/zhihu-request'
export default {
    namespace: 'newslatest',
    state: {
        NewsLatest: {}
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
            history.listen(({pathname}) => {
                if (pathname === '/') {
                    dispatch({type: 'FetchNewsLatest'})
                }
            })
        },
    },

    effects: {
        *FetchNewsLatest({}, { call, put }) {  // eslint-disable-line
            const data = yield call(queryNewsLatests);
            yield put({ type: 'DoneNewsLatest', data });
        },
    },

    reducers: {
        DoneNewsLatest(state, items) {
            const data = items.data
            return { NewsLatest: data };
        },
    },

};
