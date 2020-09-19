//所有对首页的请求
import { request } from "./request";

export function getHomeMultidata() {
  return request({
    url: "/home/multidata"
  });
}
//获取首页，针对三个不同的情况获取数据需要传参数，不同的类还有对应的页码
export function getHomeGoods(type,page) {
  return request({
    url: "/home/data",
    params: {
      type,
      page
    }
  });
}
