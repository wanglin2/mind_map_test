(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ba309"],{"35c4":function(s,t,a){"use strict";a.r(t);var v=function(){var s=this;s._self._c;return s._m(0)},_=[function(){var s=this,t=s._self._c;return t("div",[t("h1",[s._v("RichText插件")]),t("blockquote",[t("p",[s._v("v0.4.0+")])]),t("blockquote",[t("p",[s._v("注意：这是一个测试性质和不完善的功能")])]),t("p",[s._v("该插件提供节点富文本编辑的能力，注册了即可生效。")]),t("p",[s._v("默认节点编辑只能对节点内所有文本统一应用样式，通过该插件可以支持富文本编辑的效果，目前支持：加粗、斜体、下划线、删除线、字体、字号、颜色、背景颜色。不支持上划线、行高。")]),t("p",[s._v("该插件的原理是使用"),t("a",{attrs:{href:"https://github.com/quilljs/quill"}},[s._v("Quill")]),s._v("编辑器实现富文本编辑，然后把编辑后生成的"),t("code",[s._v("DOM")]),s._v("节点直接作为节点的文本数据，并且在渲染的时候通过"),t("code",[s._v("svg")]),s._v("的"),t("code",[s._v("foreignObject")]),s._v("标签嵌入"),t("code",[s._v("DOM")]),s._v("节点。")]),t("p",[s._v("这样也造成了一个问题，就是导出为图片的功能受到了影响，原本将"),t("code",[s._v("svg")]),s._v("导出为图片的原理很简单，获取到"),t("code",[s._v("svg")]),s._v("字符串，然后创建为"),t("code",[s._v("type=image/svg+xml")]),s._v("类型的"),t("code",[s._v("blob")]),s._v("数据，再使用"),t("code",[s._v("URL.createObjectURL")]),s._v("方法生成"),t("code",[s._v("data:url")]),s._v("数据，再创建一个"),t("code",[s._v("Image")]),s._v("标签，将"),t("code",[s._v("data:url")]),s._v("作为该图片的"),t("code",[s._v("src")]),s._v("，最后再将这个图片绘制到"),t("code",[s._v("canvas")]),s._v("对象上进行导出，但是经过测试，当"),t("code",[s._v("svg")]),s._v("中嵌入了"),t("code",[s._v("DOM")]),s._v("节点，这种方式导出会出错，并且尝试了多种方式后都无法实现完美的导出效果，目前的方式是遍历"),t("code",[s._v("svg")]),s._v("中的"),t("code",[s._v("foreignObject")]),s._v("节点，使用"),t("a",{attrs:{href:"https://github.com/niklasvh/html2canvas"}},[s._v("html2canvas")]),s._v("将"),t("code",[s._v("foreignObject")]),s._v("节点内的"),t("code",[s._v("DOM")]),s._v("节点转换为图片再替换掉"),t("code",[s._v("foreignObject")]),s._v("节点，这种方式可以工作，但是非常耗时，因为"),t("code",[s._v("html2canvas")]),s._v("转换一次的时间很长，导致转换一个节点都需要耗时差不多2秒，这样导致节点越多，转换时间越慢，所以如果无法忍受长时间的导出的话推荐不要使用该插件。")]),t("p",[s._v("如果你有更好的方式也欢迎留言。")]),t("h2",[s._v("注册")]),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" MindMap "),t("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'simple-mind-map'")]),s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" RichText "),t("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'simple-mind-map/src/RichText.js'")]),s._v("\n\nMindMap.usePlugin(RichText, opt?)\n")])]),t("p",[s._v("注册完且实例化"),t("code",[s._v("MindMap")]),s._v("后可通过"),t("code",[s._v("mindMap.richText")]),s._v("获取到该实例。")]),t("h3",[s._v("注册选项")]),t("p",[t("code",[s._v("opt")]),s._v("选项可以传递以下参数：")]),t("ul",[t("li",[t("code",[s._v("opt.fontFamilyList")])])]),t("p",[s._v("替换富文本编辑时内置字体列表。内置的列表为：")]),t("pre",{staticClass:"hljs"},[t("code",[s._v("[\n  "),t("span",{staticClass:"hljs-string"},[s._v("'宋体, SimSun, Songti SC'")]),s._v(",\n  "),t("span",{staticClass:"hljs-string"},[s._v("'微软雅黑, Microsoft YaHei'")]),s._v(",\n  "),t("span",{staticClass:"hljs-string"},[s._v("'楷体, 楷体_GB2312, SimKai, STKaiti'")]),s._v(",\n  "),t("span",{staticClass:"hljs-string"},[s._v("'黑体, SimHei, Heiti SC'")]),s._v(",\n  "),t("span",{staticClass:"hljs-string"},[s._v("'隶书, SimLi'")]),s._v(",\n  "),t("span",{staticClass:"hljs-string"},[s._v("'andale mono'")]),s._v(",\n  "),t("span",{staticClass:"hljs-string"},[s._v("'arial, helvetica, sans-serif'")]),s._v(",\n  "),t("span",{staticClass:"hljs-string"},[s._v("'arial black, avant garde'")]),s._v(",\n  "),t("span",{staticClass:"hljs-string"},[s._v("'comic sans ms'")]),s._v(",\n  "),t("span",{staticClass:"hljs-string"},[s._v("'impact, chicago'")]),s._v(",\n  "),t("span",{staticClass:"hljs-string"},[s._v("'times new roman'")]),s._v(",\n  "),t("span",{staticClass:"hljs-string"},[s._v("'sans-serif'")]),s._v(",\n  "),t("span",{staticClass:"hljs-string"},[s._v("'serif'")]),s._v("\n]\n")])]),t("ul",[t("li",[t("code",[s._v("opt.fontSizeList")])])]),t("p",[s._v("替换富文本编辑时内置字号列表。内置的列表为：")]),t("pre",{staticClass:"hljs"},[t("code",[s._v("["),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(", "),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(", "),t("span",{staticClass:"hljs-number"},[s._v("3")]),s._v(", .."),t("span",{staticClass:"hljs-number"},[s._v(".100")]),s._v("]\n")])]),t("h2",[s._v("方法")]),t("h3",[s._v("selectAll()")]),t("p",[s._v("选中全部。当节点正在编辑中可以通过该方法选中节点内的所有文本。")]),t("h3",[s._v("focus()")]),t("blockquote",[t("p",[s._v("v0.4.7+")])]),t("p",[s._v("聚焦。")]),t("h3",[s._v("formatText(config = {})")]),t("ul",[t("li",[t("code",[s._v("config")]),s._v("：对象，键为样式属性，值为样式值，完整的配置如下：")])]),t("pre",{staticClass:"hljs"},[t("code",[s._v("{\n    "),t("span",{staticClass:"hljs-attr"},[s._v("font")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'字体'")]),s._v(",\n    "),t("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'12px,'")]),s._v(" "),t("span",{staticClass:"hljs-comment"},[s._v("// 字号")]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("bold")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 是否加粗，true/false ")]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("italic")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 是否斜体，true/false ")]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("underline")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 是否显示下划线，true/false ")]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("strike")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 是否显示删除线，true/false ")]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("color")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'#333'")]),s._v(" "),t("span",{staticClass:"hljs-comment"},[s._v("// 颜色")]),s._v("\n}\n")])]),t("p",[s._v("格式化当前选中的文本。")]),t("h3",[s._v("formatRangeText(range, config = {})")]),t("ul",[t("li",[t("code",[s._v("range")]),s._v("："),t("code",[s._v("Quill")]),s._v("的范围对象，格式如下：")])]),t("pre",{staticClass:"hljs"},[t("code",[s._v("{\n    index,\n    length\n}\n")])]),t("ul",[t("li",[t("code",[s._v("config")]),s._v("：同"),t("code",[s._v("formatText")]),s._v("方法")])]),t("p",[s._v("格式化指定范围的文本。")]),t("h3",[s._v("formatAllText(config = {})")]),t("ul",[t("li",[t("code",[s._v("config")]),s._v("：同"),t("code",[s._v("formatText")]),s._v("方法")])]),t("p",[s._v("格式化当前编辑节点的所有文本。")]),t("h3",[s._v("removeFormat()")]),t("blockquote",[t("p",[s._v("v0.4.1+")])]),t("p",[s._v("清除当前选中文本的样式。")]),t("h3",[s._v("normalStyleToRichTextStyle(style)")]),t("p",[s._v("将普通节点样式对象转换成富文本样式对象。因为非富文本编辑时的节点样式属性和富文本样式属性是存在差异的，所以需要一个转换操作。比如：")]),t("pre",{staticClass:"hljs"},[t("code",[s._v("{\n    "),t("span",{staticClass:"hljs-attr"},[s._v("fontFamily")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'xxx'")]),s._v("\n}\n\n"),t("span",{staticClass:"hljs-comment"},[s._v("// 转换后")]),s._v("\n\n{\n    "),t("span",{staticClass:"hljs-attr"},[s._v("font")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'xxx'")]),s._v("\n}\n")])]),t("h3",[s._v("richTextStyleToNormalStyle(config)")]),t("p",[s._v("将富文本样式对象转换成普通节点样式对象。比如：")]),t("pre",{staticClass:"hljs"},[t("code",[s._v("{\n    "),t("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'16px'")]),s._v("\n}\n\n"),t("span",{staticClass:"hljs-comment"},[s._v("// 转换后")]),s._v("\n\n{\n    "),t("span",{staticClass:"hljs-attr"},[s._v("fontSize")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("16")]),s._v("\n}\n")])]),t("h3",[s._v("handleSvgDomElements(svg)")]),t("ul",[t("li",[t("code",[s._v("svg")]),s._v("： "),t("code",[s._v("svg")]),s._v("节点")])]),t("p",[s._v("将"),t("code",[s._v("svg")]),s._v("中嵌入的"),t("code",[s._v("dom")]),s._v("元素转换成图片，返回一个"),t("code",[s._v("Promise")]),s._v("。")]),t("h3",[s._v("transformAllNodesToNormalNode()")]),t("p",[s._v("将所有节点转换成非富文本节点。")])])}],l={},n=l,i=a("2877"),e=Object(i["a"])(n,v,_,!1,null,null,null);t["default"]=e.exports}}]);