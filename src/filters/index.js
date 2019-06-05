// set function parseTime,formatTime to filter
export { parseTime, formatTime } from '@/utils'
// 1. 业务

// 2.通用
export function formatFloat(val,decimals) {
  return parseFloat(val).toFixed(decimals).toString()
}

//2.1 真假
export function formatTF(val) {
  if(val){
    return "T"
  }else{
    return "F"
  }
}

//2.2 时间
function formatFilerTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

export function formatCheck(val) {
  val = parseInt(val)
  let rs_name = '<span style=\'font-size: 20px\'>●</span>'
  switch(val)
  {
    case 0:
      rs_name = '<span style=\'font-size: 20px\'>●</span>'
      break;
    case 10:
      rs_name = '<span style=\'color:red; font-size: 20px\'>●</span>'
      break;
    case 11:
      rs_name = "<span style='color:orange; font-size: 20px'>●</span>"
      break;
    case 20:
      rs_name = '<span style=\'color:red; font-size: 20px\'>●</span>'
      break;
    case 21:
      rs_name = '<span style=\'color:#13ce66; font-size: 20px\'>●</span>'
      break;
    default:
      rs_name = '<span style=\'font-size: 20px\'>●</span>'
  }
  return rs_name
}

export function formatFilter(val ,filterName) {
  return eval(filterName);
}

