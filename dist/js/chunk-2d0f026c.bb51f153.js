(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f026c"],{"9ac1":function(v,_,p){"use strict";p.r(_);var h=function(){var v=this;v._self._c;return v._m(0)},s=[function(){var v=this,_=v._self._c;return _("div",[_("h1",[v._v("Changelog")]),_("h2",[v._v("0.5.0")]),_("p",[v._v("修改：从0.5.0版本开始，考虑性能问题，节点激活状态只能修改形状相关的样式：")]),_("pre",{staticClass:"hljs"},[_("code",[v._v("[\n  "),_("span",{staticClass:"hljs-string"},[v._v("'fillColor'")]),v._v(",\n  "),_("span",{staticClass:"hljs-string"},[v._v("'borderColor'")]),v._v(",\n  "),_("span",{staticClass:"hljs-string"},[v._v("'borderWidth'")]),v._v(",\n  "),_("span",{staticClass:"hljs-string"},[v._v("'borderDasharray'")]),v._v(",\n  "),_("span",{staticClass:"hljs-string"},[v._v("'borderRadius'")]),v._v("\n]\n")])]),_("h2",[v._v("0.4.7")]),_("p",[v._v("优化：1.富文本编辑时初始聚焦时不再默认全选；2.富文本编辑时使用节点填充色作为背景色，避免节点颜色为白色时看不见。 3.节点激活状态切换不再触发历史记录。 4.短时间多次触发历史记录，只会添加最后一次的数据。 5.优化历史记录添加，当有回退时，再次添加新记录时删除当前指针后面的历史数据。")]),_("p",[v._v("新增：1.支持导入和导出Markdown格式文件。 2.支持配置插入节点时的初始文字。 3.扩展插入节点和删除节点的命令，支持指定节点。")]),_("h2",[v._v("0.4.6")]),_("p",[v._v("新增：1.关联线支持调整控制点。")]),_("p",[v._v("优化：1.添加历史数据时过滤和上一次相比没有改变的数据。")]),_("p",[v._v("修复：1.修复节点编辑时方向键和方向键导航功能的冲突问题。 2.修复拖拽移动节点时节点id的丢失问题，这会导致关联线丢失。")]),_("h2",[v._v("0.4.5")]),_("p",[v._v("新增：1.支持关联线。 2.按住根节点也可以拖动画布。3.按住ctrl键可以调整多选节点。")]),_("h2",[v._v("0.4.4")]),_("p",[v._v("新增：支持响应鼠标的横向滚动。")]),_("h2",[v._v("0.4.3")]),_("p",[v._v("修复：前进回退后没有触发"),_("code",[v._v("data_change")]),v._v("事件的问题。")]),_("p",[v._v("新增：支持自定义鼠标滚轮事件；鼠标滚轮调整为支持缩放视图和上下移动视图。")]),_("h2",[v._v("0.4.2")]),_("p",[v._v("新增："),_("code",[v._v("Node")]),v._v("类的"),_("code",[v._v("setText")]),v._v("方法增加第二个参数，以支持设置富文本内容。")]),_("h2",[v._v("0.4.1")]),_("p",[v._v("新增：1.新增抛出节点鼠标移入和移除事件；2.节点富文本支持设置背景颜色；3.节点富文本支持清除样式。")]),_("p",[v._v("修复：1.Mac系统触控板缩放相反的问题；2.设备window.devicePixelRatio不为1时，当存在富文本节点时导出的图片中富文本节点尺寸会变大的问题。")]),_("h2",[v._v("0.4.0")]),_("p",[v._v("新增：节点支持富文本编辑。")]),_("h2",[v._v("0.3.4")]),_("p",[v._v("新增：节点文本增加自动换行功能。")]),_("p",[v._v("修复：1.修复批量删除的节点中如果存在根节点会出现删除异常的问题。2.修复底边风格的情况下，节点高度过高会和其他节点重叠的问题。")]),_("h2",[v._v("0.3.3")]),_("p",[v._v("修复：根节点文字无法换行的问题。")]),_("h2",[v._v("0.3.2")]),_("p",[v._v("修复：1.修复二级节点拖拽到其他节点或其他节点拖拽到二级节点时节点样式没有更新的问题；2.修复当思维导图实际内容大于屏幕宽高时，导出的时候超出的部分没有绘制水印的问题。")]),_("h2",[v._v("0.3.1")]),_("p",[v._v("修复：1.删除背景图片不生效的问题；2.节点拖拽到根节点时连接线跑到根节点上方的问题。")]),_("p",[v._v("新增：背景图片展示增加位置和大小设置。导出的图片也同步支持该设置。")]),_("h2",[v._v("0.3.0")]),_("p",[v._v("升级为插件化架构，将一些非核心功能抽离出来作为插件，按需注册，减小整体体积。")]),_("h2",[v._v("0.2.24")]),_("p",[v._v("新增：节点自由拖拽改为可配置，默认为"),_("code",[v._v("false")]),v._v("不开启；支持添加水印。")]),_("h2",[v._v("0.2.23")]),_("p",[v._v("新增：支持注册新主题。")]),_("h2",[v._v("0.2.22")]),_("p",[v._v("优化：取消内置"),_("code",[v._v("simple-mind-map")]),v._v("包的主题和结构图片，改为由使用者自行维护，原有图片可在"),_("code",[v._v("web/assets/img/")]),v._v("目录找到。")]),_("h2",[v._v("0.2.21")]),_("p",[v._v("新增：支持节点横线风格。")]),_("h2",[v._v("0.2.20")]),_("p",[v._v("修复：画布距窗口左上角不为0时节点拖拽出现偏移的问题。")]),_("h2",[v._v("0.2.19")]),_("p",[v._v("修复：没有激活节点时随便按什么键都会触发自动聚焦的问题。")]),_("h2",[v._v("0.2.18")]),_("p",[v._v("优化：键盘导航寻找焦点的算法，支持简单算法、区域算法、阴影算法。")]),_("h2",[v._v("0.2.17")]),_("p",[v._v("新增：键盘导航，即通过方向键来切换激活的节点；支持在大纲直接编辑节点文本内容。")]),_("h2",[v._v("0.2.16")]),_("p",[v._v("优化：小地图、拖拽性能。")]),_("h2",[v._v("0.2.15")]),_("p",[v._v("优化：本地文件编辑。")]),_("p",[v._v("新增：支持双击节点内图片进行大图预览。")]),_("h2",[v._v("0.2.14")]),_("p",[v._v("优化：插入子节点时自动展开。")]),_("p",[v._v("修复：小地图关闭时报错的问题。")]),_("h2",[v._v("0.2.13")]),_("p",[v._v("修复：子节点收起状态复制时丢失的问题。")]),_("h2",[v._v("0.2.11")]),_("p",[v._v("修复：修复子节点收起状态复制时丢失的问题。")]),_("p",[v._v("新增：支持小地图。")]),_("h2",[v._v("0.2.10")]),_("p",[v._v("优化：手动创建节点时立即聚焦。")]),_("p",[v._v("修复：连线样式深度更新问题。")]),_("p",[v._v("新增：逻辑结构图、思维导图新增直线连接风格、直连风格。")]),_("h2",[v._v("0.2.9")]),_("p",[v._v("新增：支持新建、打开、保存到电脑本地文件。")]),_("h2",[v._v("0.2.8")]),_("p",[v._v("修复：xmind8版本文件导入失败的问题。")]),_("p",[v._v("新增：支持展开到指定层级。")]),_("h2",[v._v("0.2.7")]),_("p",[v._v("修复：根节点添加多个节点爆栈的问题。")]),_("p",[v._v("新增：支持导入.xmind文件。")]),_("h2",[v._v("0.2.6")]),_("p",[v._v("新增：导出svg增加title标签。")]),_("h2",[v._v("0.2.5")]),_("p",[v._v("修复：节点展开收起的bug。")]),_("p",[v._v("新增：节点支持自定义线条样式。")]),_("h2",[v._v("0.2.4")]),_("p",[v._v("新增：节点支持多种形状。")]),_("h2",[v._v("0.2.3")]),_("p",[v._v("修复：编辑节点文本时快捷键冲突的问题；右键菜单快捷键提示错误；右键菜单快捷键提示。")]),_("h2",[v._v("0.2.2")]),_("p",[v._v("修复：输入字符串'/'和快捷键'/'冲突问题。")]),_("h2",[v._v("0.2.1")]),_("p",[v._v("新增：支持导出为pdf。")]),_("h2",[v._v("0.2.0")]),_("p",[v._v("新增：经典4主题；支持添加概要；支持自由拖拽；上移节点、下移节点、复制节点、剪切节点、粘贴节点、一键整理布快捷键；库打包；Ctrl+左键多选。")]),_("h2",[v._v("0.1.18")]),_("p",[v._v("修复：节点图标不能删除的问题；工具按钮置灰仍然可以点击的问题。")]),_("h2",[v._v("0.1.17")]),_("p",[v._v("新增：增加只读模式。")]),_("h2",[v._v("0.1.16")]),_("p",[v._v("新增：节点备注支持markdown及富文本。")]),_("p",[v._v("修复：不能选中文字的问题；节点标注在节点激活后无法隐藏问题；超链接、备注、标签等文字编辑时返回键和回车键与思维导图快捷键冲突的问题。")]),_("h2",[v._v("0.1.15")]),_("p",[v._v("新增：状态数据支持保存激活状态、视图状态（拖动位置、缩放值）；支持节点拖拽。")]),_("h2",[v._v("0.1.14")]),_("p",[v._v("修复：存在激活节点时设置主题存在的问题。")]),_("h2",[v._v("0.1.13")]),_("p",[v._v("新增：快捷键功能；新增导出为json。")]),_("p",[v._v("优化：一些细节。")]),_("h2",[v._v("0.1.12")]),_("p",[v._v("新增：本地存储；右键菜单功能等。")]),_("h2",[v._v("0.1.0")]),_("p",[v._v("完成基本功能。")])])}],n={},a=n,t=p("2877"),e=Object(t["a"])(a,h,s,!1,null,null,null);_["default"]=e.exports}}]);