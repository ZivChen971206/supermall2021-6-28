import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })

  instance.interceptors.request.use(res1 => {
    return res1
  }, err1 => {

  })

  instance.interceptors.response.use(res2 => {
    return res2.data
  }, err2 => {

  })

return instance(config)
}
