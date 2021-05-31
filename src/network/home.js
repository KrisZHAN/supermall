import { homeRequest, homeRequestData } from "network/request";

// homeOne
export function getHomeRequest() {
  return homeRequest({
    url: "/home/multidata"
  })
}

// homeTwo
export function getHomeGoods(type, page) {
  return homeRequestData({
    url: '/home/data',
    params: {
      type,
      page,
    }
  })
}