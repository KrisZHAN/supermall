import axios from 'axios'

export function homeRequest(config) {
  // 1. 创建axios实例
  const homeOne = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 10000,
  })

  // 请求拦截器
  homeOne.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })

  // 响应拦截器
  homeOne.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  return homeOne(config)
}

export function homeRequestData(config) {
  const homeTwo = axios.create({
    baseURL: "http://152.136.185.210:7878/api/m5",
    timeout: 10000,
  })

  homeTwo.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })

  homeTwo.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })
  return homeTwo(config)
}
