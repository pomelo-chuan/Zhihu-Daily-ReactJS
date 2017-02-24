// import * as types from '../types.js/zhihu-types'
import axios from 'axios'
import { queryNewsLatests, queryNewsDetail } from '../services/zhihu-request'
import pathToRegexp from 'path-to-regexp';

export default {
    namespace: 'newslatest',
    state: {
        NewsLatest: {},
        NewsDatail: {}
    },

    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(({pathname}) => {
                if (pathname === '/') {
                    dispatch({ type: 'FetchNewsLatest' })
                };
                const matchDetailId = pathToRegexp('/detail/:id').exec(pathname);
                if (matchDetailId) {
                    dispatch({ type: 'FetchNewsDetail', payload: matchDetailId[1] })
                }
            })
        },
    },

    effects: {
        *FetchNewsLatest({}, { call, put }) {
            const data = yield call(queryNewsLatests);
            yield put({ type: 'DoneNewsLatest', data });
            console.log("第一页列表:", data)
        },
        *FetchNewsDetail({payload}, {call, put}) {
            const data = yield call(queryNewsDetail, payload);
            yield put({ type: 'DoneNewsDetail', data });
            console.log("详细信息：", data)
        }
    },

    reducers: {
        DoneNewsLatest(state, items) {
            const data = items.data;
            return { ...state, NewsLatest: data };
        },
        DoneNewsDetail(state, items) {
            const data = items.data;
            String.prototype.replaceAll = function (s1, s2) {
                return this.replace(new RegExp(s1, "gm"), s2);
            };
            data.data.body = data.data.body.replaceAll('src=\"', 'src=\"http://lovestreet.leanapp.cn/zhihu/resource?url=')
            data.data.body = data.data.body.replaceAll('<div class=\"img-place-holder\"></div>', '')
            return { ...state, NewsDatail: data };
        }
    },

};
