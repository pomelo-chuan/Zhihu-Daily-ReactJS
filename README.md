## 知乎日报

> ReatJs练习作品—知乎日报

#### [live demo](https://pomelo-chuan.github.io/)

#### dva:

dva封装了网络请求用到的fetch、路由react-router、redux、redux-sega，结合起react，是一个完整的前端框架。

[dva地址](https://github.com/dvajs/dva/blob/master/README_zh-CN.md)



#### 数据流向:

>  这个项目用来练习react跟dva，其中最重要的一点是数据流向

1. subscription检测路由为'/'时，发送一个action，这个action为FetchNewsLatest

   ```javascript
   if (pathname === '/') {
                       dispatch({ type: 'FetchNewsLatest' })
                   };
   ```

   ​

2. FetchNewsLatest是一个effect，用来进行异步操作，比如进行网络请求，网络请求成功之后，发送一个action，这个action是DoneNewsLatest

   ```javascript
   *FetchNewsLatest({}, { call, put, select }) {
               const state = yield select(state => state);
               // 如果NewsRoot有数据则不进行请求，防止从其他页面切到'/'时，导致数据重复请求的问题
               if(state.newslatest.NewsRoot.length == 0) {
                   const data = yield call(queryNewsLatests);
                   yield put({ type: 'DoneNewsLatest', data });
                   console.log("第一页列表:", data);
               }
           },
   ```

   ​

3. DoneNewsLatest是一个reducer，用来进行同步操作，比如将effect中请求得到的值放到state中

   ```javascript
   DoneNewsLatest(state, items) {
               const data = items.data;
               const NewsRoot = state.NewsRoot.concat(data);
               return { ...state, NewsLatest: data, NewsRoot };
           }
   ```

   ​

4. state得到reducer传来的值之后，会自动将数据刷新到组件当中（组件使用mapStateToProps连接state）

   ```javascript
       state: {
           NewsLatest: {},
       }

   ```

   ​
