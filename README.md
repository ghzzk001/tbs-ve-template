# tbs-ve-template
基于elementUI的结合日常开发功能扩展组件

[项目地址：tbs-ve-template](https://github.com/ghzzk001/tbs-ve-template)

## 前言
结合日常开发，封装常用功能，提高开发效率。让程序猿兄弟姐妹们也有时间约约女票，逗逗男票，做做自己想做的事情，不要天天在办公室造轮子！
* [1.通用Table](#1)

## 思路
## 一级标题
类似easy-ui的table加载方式
## 环境简述

**开发框架:基于vue-admin-template** 

github:https://github.com/PanJiaChen/vue-admin-template

**JS 包管理工具: Yarn** 
 
安装方法：https://www.cnblogs.com/xiangsj/p/8083094.html

**项目 启动:**
**第一步：yarn install 下载所有依赖包** 
**第二步：yarn run dev 下载所有依赖包** 
**第三步：访问http://localhost:9528** 

## 项目结构
 **说明：为了避免代码过长不易浏览，讲vue代码与js代码分开编辑。** 
![图片描述][1]

## <a name="1">1. 通用Table</a>
#### **显示效果** 
![图片描述][2]

#### **支持类型** 
类型：`文本` | `链接` | `文档` | `图片`

#### **用法** 
![图片描述][3]

**相关属性 ** 
***Table 属性:*** 

参数|说明|类型|可选值|默认值
--|--|--|--|--
listLoading|动画效果|boolean|—|true
columns|table 的列（column）的配置对象，更多细节请参见列（column）属性。|array|—|—
ui|table显示效果的配置对象，更多细节请参见列（ui）属性|array|—|—
data|显示数据集合，一般从远程获取数据后进行赋值|array|—|—
page|table分页配置对象，更多细节请参见列（page）属性|array|—|—

***Table列（Column）属性:*** 

参数|说明|类型|可选值|默认值
--|--|--|--|--
label|列的标题文本|string|—|—
field|列的字段名,与data属性中的名称对应|string|—|—
width|列的宽度|number|—|—
showtype|列的类型，normal：为文本类型|string|normal、http、file、image|normal
filter|过滤器，类似easyui中formatter属性，用于格式数据|string|—|—

***Table样式（ui）属性:*** 

参数|说明|类型|可选值|默认值
--|--|--|--|--
tableHeight|Table高|string、number|—|—
tableWidth|Table宽度|string、number|—|—

***Table分页（page）属性:*** 

参数|说明|类型|可选值|默认值
--|--|--|--|--
total|总条目数|number|—|—
listQuery|分页参数，listQuery：{ page：当前页码，limit:每页条目数 }|number|—|—
 

## 有问题反馈
在使用中有任何问题，欢迎反馈给我，可以用以下联系方式跟我交流

* QQ: 375766253
* 邮件:375766253@qq.com


  [1]: https://segmentfault.com/img/bVbtGMS?w=980&h=784
  [2]: https://github.com/ghzzk001/tbs-ve-template/tree/master/static/github/table1.gif
  [3]: https://segmentfault.com/img/bVbtGS0?w=728&h=530