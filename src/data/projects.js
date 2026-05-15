/**
 * 项目数据列表
 * @property {string} name - 项目名称
 * @property {string} description - 项目简介
 * @property {string[]} tags - 技术栈标签
 * @property {string} github - GitHub 仓库地址
 * @property {string|null} demo - 在线演示地址，没有则填 null
 */
export const projects = [
  {
    name: 'handsomeman118-github-pages',
    description: '我的个人GitHub Pages，现代前端开发的实践。',
    tags: ['Vue 3', 'Vite', 'javascript', 'CSS'],
    github: 'https://github.com/handsomeman118/handsomeman118.github.io',
    demo: null,
  },
  {
    name: 'acDL',
    description: '个人深度学习研究实验工具包，将日常实验中重复使用的内容工程化封装，方便快速开展实验。',
    tags: ['Python', 'PyTorch', 'sklearn'],
    github: 'https://github.com/handsomeman118/acDL',
    demo: null,
  },
  {
    "name": "ex-skill",
    "description": "基于前任skill做的记忆优化，将聊天记录划分为不同的事件，从总结概括变为故事分析",
    "tags": ["LLM", "Prompt Engineering", "NLP"],
    "github": "https://github.com/handsomeman118/ex-skill",
    "demo": null
  }

]
