import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const List = []
const List1 = []
const count = 100

const baseContent = '<p>我是测试数据我是测试数据</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>'
const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'

const http_uri = 'https://www.baidu.com/'
const fileList =  [
  {title: '3HX03FB 1.3A.pdf', classCode:'file', url: 'http://172.19.30.79:8888/cadb/static/plugina/3HX03FB 1.3A.pdf'},
  {title: '1-2299988-1-CVM.zip', classCode:'file', url: 'http://172.19.30.79:8888/cadb//static/plugina/1-2299988-1-CVM.zip'}
  ]
const imageList = [
  {title: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
  {title: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
  ]

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    title: '@title(5, 10)',
    timestamp: +Mock.Random.date('T'),
    'filter|1': [0, 10,11, 20, 21],
    http_uri:http_uri,
    fileList:fileList,
    imageList:imageList,
  }))
}

for (let i = 0; i < count; i++) {
  List1.push(Mock.mock({
    id: '@increment',
    timestamp: +Mock.Random.date('T'),
    author: '@first',
    reviewer: '@first',
    title: '@title(5, 10)',
    content_short: '我是测试数据',
    content: baseContent,
    forecast: '@float(0, 100, 2, 2)',
    importance: '@integer(1, 3)',
    'type|1': ['CN', 'US', 'JP', 'EU'],
    'status|1': ['published', 'draft', 'deleted'],
    'sel': '选项2',
    display_time: '@datetime',
    comment_disabled: true,
    pageviews: '@integer(300, 5000)',
    image_uri,
    platforms: ['a-platform']
  }))
}

export default {
  getList: config => {
    const { importance, type, title, page = 1, limit = 20, sort } = param2Obj(config.url)

    let mockList = List.filter(item => {
      if (importance && item.importance !== +importance) return false
      if (type && item.type !== type) return false
      if (title && item.title.indexOf(title) < 0) return false
      return true
    })

    if (sort === '-id') {
      mockList = mockList.reverse()
    }
    console.log('page---->',page)
    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))


    return {
      code: 20000,
      total: mockList.length,
      items: pageList
    }
  },
  getPv: () => ({
    pvData: [{ key: 'PC', pv: 1024 }, { key: 'mobile', pv: 1024 }, { key: 'ios', pv: 1024 }, { key: 'android', pv: 1024 }]
  }),
  getArticle: (config) => {
    const { id } = param2Obj(config.url)
    for (const article of List) {
      if (article.id === +id) {
        return article
      }
    }
  },
  createArticle: () => ({
    data: 'success'
  }),
  updateArticle: () => ({
    data: 'success'
  })
}
