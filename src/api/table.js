import request from '@/utils/request'

export default {
  a_page: (params) => {
    return request({
      url: '/table/list',
      method: 'get',
      params
    })
  },
}
