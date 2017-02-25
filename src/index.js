import dva from 'dva';
import './index.css';
import createLoading from 'dva-loading';

// 用于去除 hashHistory 下的 _k 查询参数
import { useRouterHistory } from 'dva/router';
import { createHashHistory } from 'history';


const app = dva({
  history: useRouterHistory(createHashHistory)({ queryKey: false }),
});

app.use(createLoading());

app.model(require('./models/count'));
app.model(require('./models/zhihu'));

app.router(require('./router'));

app.start('#root');
