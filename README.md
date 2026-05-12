# 搞不明白AI的Pandas — 个人主页

基于 Vue 3 + Vite 构建的 GitHub Pages 个人项目展示页。

**线上地址：** https://handsomeman118.github.io/

## 特性

- 明暗主题切换（自动记忆用户偏好）
- 响应式布局，适配移动端和桌面端
- 打字机动画效果
- 卡片鼠标追踪光晕
- 拉绳式回到顶部
- 无障碍支持（`prefers-reduced-motion`）
- GitHub Actions 自动部署

## 开发

```bash
npm install
npm run dev       # 启动开发服务器
npm run build     # 构建生产版本
npm run preview   # 预览构建产物
```

## 技术栈

- Vue 3（Composition API + `<script setup>`）
- Vite 8
- 纯 CSS 主题系统（CSS 自定义变量）
- GitHub Actions + GitHub Pages

## 项目结构

```
src/
├── main.js              # 应用入口
├── App.vue              # 根组件
├── style.css            # 全局样式和主题变量
├── assets/avatar.webp   # 头像
├── components/
│   ├── HeroSection.vue  # 顶部英雄区
│   ├── ProjectGrid.vue  # 项目网格
│   ├── ProjectCard.vue  # 项目卡片
│   ├── ThemeToggle.vue  # 主题切换
│   └── PullCord.vue     # 拉绳回顶
└── data/
    ├── profile.js       # 个人信息
    └── projects.js      # 项目列表
```

详细开发文档见 [CLAUDE.md](./CLAUDE.md)。
