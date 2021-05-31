import { homeRequestData } from "./request"

export function getDetail(iid) {
  return homeRequestData({
    url: "/detail",
    params: {
      iid
    }
  })
}