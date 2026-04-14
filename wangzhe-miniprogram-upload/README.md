# 王者农场种植助手（微信小程序）

这个目录是可直接导入微信开发者工具的小程序源码。

## 目录结构

- `app.js` / `app.json` / `app.wxss`
- `pages/index/index.js`
- `pages/index/index.wxml`
- `pages/index/index.wxss`
- `project.config.json`
- `sitemap.json`

## 导入方式

1. 打开微信开发者工具
2. 选择「导入项目」
3. 项目目录选择当前目录：`F:\codex\harvest-lab\wechat-miniprogram`
4. `AppID` 可先用测试号（游客模式）
5. 点击导入后直接编译预览

## 功能说明

- 极限收割计算器（保留原逻辑）
- 全周期播种排期
- 农场数据中心（作物/农场/小摊/农田）
- 支持作物表排序

## 备注

- 小程序无法像网页那样直接拉起系统日历，所以这里改成了「复制提醒时间」。
