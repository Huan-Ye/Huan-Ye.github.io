export const site = Object.freeze({
  title: '开放研究资料库',
  description: '公开、可检索的研究笔记、分析与专题资料。',
  baseUrl: 'https://huan-ye.github.io',
  homePath: '/',
  topicPath: '/research/japan-lost-decades/',
  topicTitle: '日本“失落三十年”的阶段机制及其对当代中国的借鉴',
  topicDescription: '两卷历史机制、跨国比较与社会结构研究。',
  volumes: [
    {
      slug: 'volume-1',
      path: '/research/japan-lost-decades/volume-1.html',
      source: 'content/research/japan-lost-decades/volume-1.md',
      title: '第一卷：宏观、金融与九阶段历史',
      cutoff: '2026-07-15',
      summary: '从泡沫形成、资产负债表衰退到金融修复，解释日本长期低增长的阶段机制，并以同一变量框架检验中国的可比与不可比之处。',
    },
    {
      slug: 'volume-2',
      path: '/research/japan-lost-decades/volume-2.html',
      source: 'content/research/japan-lost-decades/volume-2.md',
      title: '第二卷：社会结构与“求稳社会”',
      cutoff: '2026-07-26',
      summary: '追踪长期低增长如何通过岗位入口、家庭兜底、教育、迁移、家庭形成与风险偏好沉淀为社会结构结果。',
    },
  ],
  attachment: {
    path: '/research/japan-lost-decades/data/japan-national-civil-service-applications.csv',
    source: 'content/research/japan-lost-decades/data/japan-national-civil-service-applications.csv',
    title: '日本国家公务员申请数据（CSV）',
  },
});
