import dva from 'dva';
import './index.css';

// 去除 hashHistory 下的 _k 查询参数
import { useRouterHistory } from 'dva/router';
import { createHashHistory } from 'history';

// 1. Initialize
const app = dva({
  history: useRouterHistory(createHashHistory)({ queryKey: false }),
});

app.model(require('./models/count'));

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
