# 项目说明

handsomeman118 的个人 GitHub Pages 主页，用于展示项目和技术实践。

线上地址：https://handsomeman118.github.io/

## 技术栈

- **Vue 3** + Composition API（`<script setup>` 语法）
- **Vite 8** 构建工具
- **纯 CSS** 主题系统（无 UI 框架、无 CSS 预处理器）
- **GitHub Actions** 自动部署到 GitHub Pages

依赖极简：运行时只有 `vue`，开发时只有 `vite` 和 `@vitejs/plugin-vue`。

## 开发命令

```bash
npm run dev      # 启动开发服务器（http://localhost:5173）
npm run build    # 构建生产版本到 dist/
npm run preview  # 预览构建产物
```

开发阶段不需要每次改动都 build，只在部署前统一构建即可。

## 项目结构

```
├── index.html                   # 入口 HTML（SEO meta 标签在这里）
├── vite.config.js               # Vite 配置（base: '/'）
├── public/
│   └── favicon.svg              # SVG 图标
├── src/
│   ├── main.js                  # Vue 应用入口
│   ├── App.vue                  # 根组件（布局 + 子组件组装）
│   ├── style.css                # 全局样式 + 主题变量 + 动画
│   ├── assets/
│   │   └── avatar.webp          # 头像图片
│   ├── components/
│   │   ├── HeroSection.vue      # 顶部英雄区（头像、名字、打字机标语）
│   │   ├── ProjectGrid.vue      # 项目卡片网格布局
│   │   ├── ProjectCard.vue      # 单个项目卡片（鼠标光晕、渐变边框）
│   │   ├── ThemeToggle.vue      # 明暗主题切换按钮
│   │   └── PullCord.vue         # 拉绳回顶组件
│   └── data/
│       ├── profile.js           # 个人信息（displayName, username, tagline）
│       └── projects.js          # 项目列表数据
└── .github/workflows/
    └── deploy.yml               # GitHub Actions 部署流水线
```

## 架构设计

### 组件规范

- 所有组件使用 `<script setup>` + Composition API
- 每个 `.vue` 文件按 `<script setup>` → `<template>` → `<style scoped>` 顺序组织
- 样式全部 scoped，避免全局污染（全局样式只在 `style.css`）
- 组件不持有业务数据，数据从 `src/data/` 导入

### 数据与视图分离

内容数据集中在 `src/data/` 目录，修改内容不需要触碰组件代码：

- `profile.js` — 个人信息（显示名、用户名、标语）
- `projects.js` — 项目列表数组，每个项目包含 `name`、`description`、`tags`、`github`、`demo` 字段

### 主题系统

通过 `data-theme` 属性 + CSS 自定义变量实现明暗切换：

- `style.css` 的 `:root` 定义暗色主题（默认）
- `[data-theme='light']` 覆盖为亮色主题
- 组件中使用 `var(--color-xxx)` 引用颜色，不硬编码色值
- `ThemeToggle.vue` 负责切换 `data-theme` 属性并持久化到 `localStorage`

关键变量：

| 变量 | 暗色 | 亮色 | 用途 |
|------|------|------|------|
| `--color-bg` | `#0d1117` | `#ffffff` | 页面背景 |
| `--color-bg-card` | `#161b22` | `#f6f8fa` | 卡片背景 |
| `--color-border` | `#30363d` | `#d0d7de` | 边框 |
| `--color-text-primary` | `#e6edf3` | `#1f2328` | 主文字 |
| `--color-text-secondary` | `#8b949e` | `#656d76` | 次文字 |
| `--color-accent` | `#58a6ff` | `#0969da` | 强调色 |

### 动画规范

- 所有动画组件都提供 `@media (prefers-reduced-motion: reduce)` 回退
- 全局入场动画使用 `fadeUp` 关键帧（`style.css` 中定义）
- 卡片有交错动画延迟：`animationDelay = 0.1 + index * 0.1s`
- 过渡时长统一：入场 0.3-0.5s，交互反馈 0.15-0.25s

### 响应式断点

- 移动端断点：`768px`
- 内容最大宽度：`1100px`（`--max-width` 变量）
- 所有组件都需适配 768px 以下

### Z-Index 层级

| 层级 | 元素 |
|------|------|
| 200 | 顶部进度条（如启用） |
| 100 | 主题切换按钮（.top-bar） |
| 90 | 拉绳回顶（.pull-cord） |
| 1 | 卡片内容 |
| 0 | 卡片光晕 |

新增固定定位元素时注意不要与现有层级冲突。

## 常见修改指南

### 添加新项目

编辑 `src/data/projects.js`，在数组中追加：

```js
{
  name: '项目名称',
  description: '项目简介',
  tags: ['Vue 3', 'Vite'],
  github: 'https://github.com/handsomeman118/xxx',
  demo: null,  // 没有在线演示填 null
}
```

ProjectGrid 会自动渲染新卡片，无需修改其他文件。

### 修改个人信息

编辑 `src/data/profile.js`：

```js
export const profile = {
  displayName: '显示名称',
  username: 'github用户名',
  tagline: '一句话标语',
}
```

### 替换头像

将新图片放入 `src/assets/`，修改 `HeroSection.vue` 中的 import 路径。推荐 WebP 格式，控制在 50KB 以内。

### 添加新组件

1. 在 `src/components/` 创建 `.vue` 文件
2. 使用 `<script setup>` 语法
3. 样式使用 scoped + CSS 自定义变量
4. 如有动画，添加 `prefers-reduced-motion` 回退
5. 在 `App.vue` 或父组件中 import 并使用

### 修改主题颜色

编辑 `src/style.css` 中 `:root` 和 `[data-theme='light']` 的 CSS 变量值。

## 部署流程

推送到 `main` 分支自动触发 GitHub Actions：

1. `npm ci` 安装依赖
2. `npm run build` 构建到 `dist/`
3. `actions/upload-pages-artifact` 上传构建产物
4. `actions/deploy-pages` 部署到 GitHub Pages

不需要手动操作 GitHub Pages 设置，Actions 流水线全权处理。

注意事项：
- 不要将 `dist/` 目录提交到 Git（已在 `.gitignore` 中排除）
- 构建产物由 Actions 在 CI 环境中生成
- `index.html` 中的 `<meta>` 标签影响 SEO 和社交分享预览
