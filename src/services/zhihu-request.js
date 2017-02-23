import request from '../utils/request';

export async function queryNewsLatests() {
  return request('http://lovestreet.leanapp.cn/zhihu/news/latest');
}
