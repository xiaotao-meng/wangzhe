# 王者农场种植助手

王者农场种植助手是一个前端工具项目，提供三类能力：

- 极限收割计算：根据总时长、剩余种植时间和剩余水量，计算是否进入斩杀线以及后续操作节点
- 全周期排期：根据作物时长和种下时间，生成补水与收割时间点
- 数据中心：展示作物收益、农场升级、小摊升级、农田开垦等对照数据

## 技术实现

- 网页版：单文件实现（`index.html`），包含 HTML、CSS、JavaScript
- 小程序版：位于 `wechat-miniprogram`，使用原生微信小程序结构（WXML、WXSS、JS）

## 目录结构

- `index.html`：网页端入口与全部页面逻辑
- `.nojekyll`：用于 GitHub Pages 静态托管
- `wechat-miniprogram/`：微信小程序源码
- `wechat-miniprogram/pages/index/index.wxml`：小程序首页结构
- `wechat-miniprogram/pages/index/index.wxss`：小程序首页样式
- `wechat-miniprogram/pages/index/index.js`：小程序首页交互与计算逻辑

## 核心数据说明

网页端与小程序端都包含作物数据表，字段含义如下：

- `name`：农作物名称（含图标）
- `sell`：出售总价
- `time`：总时长（秒）
- `expH`：经验值（每小时）
- `coinH`：金币值（每小时）
- `advice`：种植建议

## 功能模块

- 极限收割计算器：`calculate()` 负责核心推演与结果输出
- 播种排期器：`generateTimeline()` 负责时间线生成
- 数据中心：作物表支持排序，升级表按静态数据渲染

## 页面与样式

- 主视觉采用海蓝系主色与暖色强调
- 网页端采用卡片化布局、分区信息结构、响应式适配
- 小程序端同步网页视觉语言，保证跨端风格一致

## 运行与部署

- 网页端可直接作为静态站托管（例如 GitHub Pages）
- 小程序端可在微信开发者工具中导入 `wechat-miniprogram` 目录进行编译与发布
