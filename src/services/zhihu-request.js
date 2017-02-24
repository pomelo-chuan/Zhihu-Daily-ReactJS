import request from '../utils/request';

export async function queryNewsLatests() {
  return request('http://lovestreet.leanapp.cn/zhihu/news/latest');
}

export async function queryNewsDetail(id) {
  return request('http://lovestreet.leanapp.cn/zhihu/news/' + id)
}