import request from '../utils/request';

export async function queryNewsLatests() {
  return request('https://lovestreet.leanapp.cn/zhihu/news/latest');
}

export async function queryNewsDetail(id) {
  return request('https://lovestreet.leanapp.cn/zhihu/news/' + id)
}

export async function queryNewsMore(time) {
  return request('https://lovestreet.leanapp.cn/zhihu/before/' + time)
}