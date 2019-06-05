import request from '@/utils/request'

export default {
  a_page: (params) => {
    return request({
      url: '/article/list',
      method: 'get',
      params
    })
  },
}
