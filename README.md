# 开放研究资料库

这是一个低维护、公开可检索的个人研究资料库。它收录完成后的研究、分析、公司简报或其他可供有需要的读者自由查阅的材料；不追求更新频率，也不设置账号、评论或数据收集。

当前首个专题是：

- [日本“失落三十年”的阶段机制及其对当代中国的借鉴](https://huan-ye.github.io/research/japan-lost-decades/)
- [AI Agent：宏观经济、行业重组与社会结构](https://huan-ye.github.io/research/ai-agent-economy/)

## 内容与边界

- `content/` 是可编辑的公开 Markdown 原稿；原始研究文件保持在本仓库之外。
- `docs/` 是构建后的静态网站；GitHub Pages 从 `main` 分支的 `/docs` 目录发布。
- 文章保留历史、机制、证据、反方材料和来源链接；已移除原研究中面向特定个人的背景与行动建议。
- 这些内容仅供研究与信息参考，不构成证券、法律、职业或个性化财务建议。

## 本地构建

需要 Node.js 22 或更高版本。

```powershell
node scripts/build.mjs
node --test tests/content-policy.test.mjs tests/build.test.mjs
```

浏览器烟雾测试还需要 Playwright 与可执行的 Chromium 内核浏览器；本仓库在维护环境中使用系统 Edge。

```powershell
node --test tests/browser-smoke.test.mjs
```

发布时先运行构建，再提交 `content/`、站点源文件和生成的 `docs/`。GitHub Pages 设置为 `main` 分支的 `/docs` 后，推送即可更新公开页面。

## 技术说明

网站是原生静态 HTML、CSS 和 JavaScript：无框架、无服务端、无分析脚本。Markdown 渲染使用随仓库附带的 [Marked](https://marked.js.org/)（MIT License）；许可文本见 [`vendor/MARKED-LICENSE.md`](vendor/MARKED-LICENSE.md)。

视觉方向采用“横向档案索引”：深钴蓝档案带、无酸纸色正文与少量朱红索引标记。早期视觉方向曾使用 AI 生成的概念图帮助选择构图；公开站点不依赖该图或任何外部图片资产。
