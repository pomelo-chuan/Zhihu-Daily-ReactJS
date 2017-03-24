import {queryNewsLatests, queryNewsDetail, queryNewsMore} from '../services/zhihu-request'
import pathToRegexp from 'path-to-regexp';
var moment = require('moment');

export default {
  namespace: 'newslatest',
  state: {
    NewsRoot: [],
    NewsLatest: {},
    NewsDatail: {},
    time: moment()
  },

  subscriptions: {
    setup({dispatch, history}) {
      history.listen(({pathname}) => {
        if (pathname === '/detail') {
          dispatch({type: 'FetchNewsLatest'})
        }
        ;
        const matchDetailId = pathToRegexp('/detail/:id').exec(pathname);
        if (matchDetailId) {
          dispatch({type: 'FetchNewsDetail', payload: matchDetailId[1]})
        }
      })
    },
  },

  effects: {
    *FetchNewsLatest({}, {call, put, select}) {
      const state = yield select(state => state);
      // 如果NewsRoot有数据则不进行请求，防止从其他页面切到'/'时，导致数据重复请求的问题
      if (state.newslatest.NewsRoot.length == 0) {
        const data = yield call(queryNewsLatests);
        yield put({type: 'DoneNewsLatest', data});
        console.log("第一页列表:", data);
      }
    },
    *FetchNewsDetail({payload}, {call, put}) {
      const data = yield call(queryNewsDetail, payload);
      yield put({type: 'DoneNewsDetail', data});
      console.log("详细信息：", data);
    },
    *FetchNewsMore({}, {call, put, select}) {
      const time = yield select(state => state.newslatest.time);
      const data = yield call(queryNewsMore, time.format('YYYYMMDD'));
      yield put({type: 'DoneNewsMore', data})
      console.log("下一天信息：", data);
    }
  },

  reducers: {
    DoneNewsLatest(state, items) {
      const data = items.data;
      const NewsRoot = state.NewsRoot.concat(data);
      return {...state, NewsLatest: data, NewsRoot};
    },
    DoneNewsDetail(state, items) {
      const data = items.data;
      String.prototype.replaceAll = function (s1, s2) {
        return this.replace(new RegExp(s1, "gm"), s2);
      };
      data.data.body = data.data.body.replaceAll('src=\"', 'src=\"http://lovestreet.leanapp.cn/zhihu/resource?url=')
      data.data.body = data.data.body.replaceAll('<div class=\"img-place-holder\"></div>', '')
      return {...state, NewsDatail: data};
    },
    DoneNewsMore(state, items) {
      const data = items.data;
      const NewsRoot = state.NewsRoot.concat(data);
      const time = state.time.subtract(1, "days");
      return {...state, NewsRoot, time};
    }
  },

};
