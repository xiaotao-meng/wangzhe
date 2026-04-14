# 王者农场种植助手

这是一个可直接发布到 GitHub Pages 的静态站版本。

它保留了王者农场的：

- 作物名称
- 作物时长分组
- 极限收割计算逻辑
- 播种排期逻辑
- 农场数据中心表格

同时做了这些整理：

- 重做了页面 UI
- 去掉了原作者个人信息和外部下载入口
- 去掉了统计脚本
- 增加了 `.nojekyll`，适合 GitHub Pages 直接托管

## 目录

- `index.html`: 网站主页面
- `.nojekyll`: 告诉 GitHub Pages 按纯静态站发布

## 直接发布到 GitHub Pages

1. 在 GitHub 新建一个仓库
2. 把当前目录里的 `index.html`、`README.md`、`.nojekyll` 上传到仓库根目录
3. 打开仓库 `Settings`
4. 进入 `Pages`
5. 在 `Build and deployment` 里选择 `Deploy from a branch`
6. Branch 选择 `main`
7. Folder 选择 `/ (root)`
8. 保存

几分钟后，GitHub 会给你一个公开网址。

## 仓库名建议

- 普通仓库名：`hok-farm-helper`
- 如果你想用个人主页地址，可以建成：`你的用户名.github.io`

## 上线后网址长什么样

- 普通仓库通常是：`https://你的用户名.github.io/仓库名/`
- 个人主页仓库通常是：`https://你的用户名.github.io/`

## 你后面最常改的地方

- 页面标题：`<title>`
- 顶部主标题：`王者农场种植助手`
- 配色：`:root` 里的颜色变量
- 默认排期时长：`window.currentDurationMins`
- 表格数据：`cropData`、`farmData`、`stallData`、`fieldData`
