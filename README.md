# 个人主页项目

线上地址：https://xyz-lly.github.io
代码仓库：https://github.com/xyz-lly/xyz-lly.github.io

## 技术栈

单 HTML 文件，零外部依赖（SortableJS 已移除），全部内联 CSS + JS。

## 版本历史

| 版本 | 内容 | tag |
|------|------|-----|
| v7.4 | 桌面内联拖拽 + initEditorDrag touch 支持 | v7.4 |
| v7.3 | 编辑器拖拽排序（makeSortable） | v7.3 |
| v7.2 | 消敏处理（删EMB、模糊经历） | v7.2 |
| v7.1 | 经历展开详情 + 编辑器美化 | v7.1 |
| v7 | 项目截图+链接 / 编辑器自动保存 / 快捷键 | v7 |
| v6.5 | 修复 P0 bug | v6.5 |
| v6.4 | 首次访客自动加载已发布内容 | v6.4 |
| v6.3 | 导航当前板块下滑线指示器 | v6.3 |
| v6.2 | 修复 reveal 默认不隐藏 | v6.2 |
| v6.1 | 修复 reveal 观察者时序 | v6.1 |
| v6 | 滚动进场动画 + 阅读进度条 | v6 |
| v5.1 | 技能标签支持拖拽排序 | v5.1 |
| v5 | 编辑入口 - 内容管理面板 | v5 |
| v4.x | 导航、分享、OG 标签 | v4+ |
| v3 | 头像+简历本地管理 & GitHub 发布通道 | v3 |
| v2 | 头像视觉升级 + 简历下载通道 | v2 |
| v1 | 初始版本 | v1 |

## 已实现功能

- 导航栏（6 section 平滑跳转 + 移动端折叠菜单）
- Hero 首屏（头像 + 旋转渐变边框 + 姓名/tagline/描述/按钮）
- 关于我 + 技能标签
- 项目卡片（3 个项目，支持截图 + GitHub 链接 + 技术标签）
- 经历时间线（支持展开/收起详细描述）
- 简历（本地 PDF 上传 + 预览 + 下载）
- 联系方式（邮箱/微信/GitHub）
- 暗色/亮色主题切换
- 阅读进度条 + 滚动进场动画
- OG/Twitter 分享标签 + 分享按钮
- 编辑器面板（管理所有内容 + 自动保存 + 发布到 GitHub）
- 发布时可同时推送头像、简历、内容到 GitHub Pages

## 编辑器功能

- 编辑：名称、tagline、hero 描述、关于、技能、项目、经历、联系方式
- 技能支持拖拽排序（HTML5 inline drag events，电脑可拖，手机不可）
- 项目支持拖拽排序（⑦）
- 经历支持拖拽排序（⑦）
- 联系方式支持拖拽排序（⑦）
- 项目支持上传截图（canvas 缩放 + webp 压缩）
- 自动保存（debounce 1s 写 localStorage）
- 快捷键：Ctrl+S 保存关闭，Esc 关闭
- 发布：推送到 GitHub Pages（需配置 GitHub Token）

## 已知问题

1. **移动端拖拽不生效**（OPPO 自带浏览器、微信内置浏览器不支持 HTML5 drag）。Feishu/QQ 内置浏览器（Chrome WebView）正常
2. **飞书内置浏览器缓存** — 普通刷新不更新。原因：GitHub Pages CDN + 飞书 webview 双重缓存。系统浏览器正常
3. **回到顶部按钮** — 已修复（CSS 缺少 position:fixed）
4. **照片隐私** — 用户发的图片识别后自动删除临时文件，除非要求保留

## 工作流

- 改代码前先出方案，用户确认后再动手
- 每个版本打 git tag
- 推送方式：由于 git push 经常因远程仓库不同步被拒绝，直接使用 GitHub API（contents API PUT）推送文件
- 构建：git commit → python 脚本获取 SHA → curl PUT → GitHub Pages 自动构建（约 1-2 分钟）
- 遇到 bug 先用 agent-browser 截图验证，再用 Python 检查 HTML 源码

## 用户偏好

- 中文输出
- 改代码前先出方案，确认后动手
- 发布链接时附上线上地址（https://xyz-lly.github.io）
- 隐私内容不曝光（EMB 等工程细节已从线上删除）
- 项目/经历区分：项目=成果视角，经历=时间线角色视角
- 内容消敏：公开展示的内容需模糊化处理

## 拖拽问题调试记录

**问题：** 编辑器项目/经历/联系在 OPPO 自带浏览器和微信内无法拖拽排序
**尝试过的方案：**
1. HTML5 `draggable` + `addEventListener` on container → 电脑可，手机不可
2. 内联 `ondragstart/ondragover/ondrop/ondragend`（同技能标签）→ 同上
3. touch 事件（touchstart/touchmove/touchend）→ 手机不生效
4. pointer 事件（pointerdown/pointermove/pointerup）+ setPointerCapture → 电脑和手机都不可
5. SortableJS 库嵌入 → 部署后不生效（原因未查明）
6. `touch-action: none` CSS → 无效
**当前方案：** v7.4 = 桌面用内联 HTML5 drag（同技能），手机用 initEditorDrag 的 touch 事件
**结论：** OPPO 自带浏览器和微信不支持任何形式的触摸拖拽。Feishu/QQ 正常。

## 相关链接

- 搜索引擎（QMD）：`D:\知识库\.qmd\src\`
- 知识库 vault：`D:\知识库\`
- 项目目录：`D:\CodeProjects\projects\个人主页\`
