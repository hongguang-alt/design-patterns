/**
 * 主要功能是进行转化匹配，母的是复用已有的功能，而不是来实现新的接口。
 * 访问者需要的功能应该是已经实现好的，不需要适配器模式来实现，适配器模式主要是负责把不兼容的接口转换成访问者期望的格式而已。
 */

/**
 * 翻译官场景，比如老板张三去国外谈合作，带了个翻译官李四
 * 那么李四就是作为讲不同语言的人之间交流的适配器
 * 老板张三的话的内容含义没有变化，翻译官将老板的话转换成国外客户希望的形式。
 */

var chinaPlug = {
  type: "中国插头",
  chinaInPlug() {
    console.log("开始供电");
  },
};

var japanPlug = {
  type: "日本插头",
  japanInPlug() {
    console.log("开始供电");
  },
};

/* 日本插头电源适配器 */
function japanPlugAdapter(plug) {
  return {
    chinaInPlug() {
      return plug.japanInPlug();
    },
  };
}

/**
 * 使用的例子：
 * jQuery.ajax 适配 Axios
 * Vue 计算属性
 */

japanPlugAdapter(japanPlug).chinaInPlug();

/* 适配器 */
function ajax2AxiosAdapter(ajaxOptions) {
  return axios({
    url: ajaxOptions.url,
    method: ajaxOptions.type,
    responseType: ajaxOptions.dataType,
    data: ajaxOptions.data,
  })
    .then(ajaxOptions.success)
    .catch(ajaxOptions.error);
}

/* 经过适配器包装 */
$.ajax = function (options) {
  return ajax2AxiosAdapter(options);
};

$.ajax({
  url: "/demo-url",
  type: "POST",
  dataType: "json",
  data: {
    name: "张三",
    id: "2345",
  },
  success: function (data) {
    console.log("访问成功！");
  },
  error: function (err) {
    console.err("访问失败～");
  },
});
