export const table = {
  listLoading:true,
  columns:[
    // {label: "系统编号", field: "id", width: 100},
    {label: "普通文本", field: "title", width: 100},
    {label: "时间类型", field: "timestamp", filter: "formatFilerTime(val,'{y}-{m}-{d} {h}:{i}:{s}')"},
    {label: "filter", field: "filter", filter: "formatCheck(val)"},
    {label: "http地址", field: "http_uri", width: 100 , showtype: 'http' },
    {label: "文档列表", field: "fileList", width: 100, showtype: 'file' },
    {label: "图片列表", field: "imageList", width: 100, showtype: 'image'}
  ],
  ui:{
    tableHeight: window.innerHeight - 300,
    tableWidth: "100%"
  },
  data: [],
  page:{
    total: 0,
    listQuery: {
      page: 1,
      limit: 10,
      importance: undefined,
      title: undefined,
      type: undefined,
      sort: '+id'
    }
  },
}
