export const site = Object.freeze({
  title: '开放研究资料库',
  description: '公开、可检索的研究笔记、分析与专题资料。',
  baseUrl: 'https://huan-ye.github.io',
  homePath: '/',
  topics: [
    {
      slug: 'japan-lost-decades', path: '/research/japan-lost-decades/', index: '专题 001',
      title: '日本“失落三十年”的阶段机制及其对当代中国的借鉴', description: '两卷历史机制、跨国比较与社会结构研究。',
      lede: '以日本资产负债表调整的阶段史为起点，分别检验宏观金融传导和社会结构后果如何适用于、又如何不适用于当代中国。', accession: 'JLD · 2026',
      note: '历史机制研究与跨国压力测试；不构成证券、职业或个性化决策指令。',
      volumes: [
        { path: '/research/japan-lost-decades/volume-1.html', source: 'content/research/japan-lost-decades/volume-1.md', title: '第一卷：宏观、金融与九阶段历史', cutoff: '2026-07-15', summary: '从泡沫形成、资产负债表衰退到金融修复，解释日本长期低增长的阶段机制，并以同一变量框架检验中国的可比与不可比之处。' },
        { path: '/research/japan-lost-decades/volume-2.html', source: 'content/research/japan-lost-decades/volume-2.md', title: '第二卷：社会结构与“求稳社会”', cutoff: '2026-07-26', summary: '追踪长期低增长如何通过岗位入口、家庭兜底、教育、迁移、家庭形成与风险偏好沉淀为社会结构结果。' },
      ],
      attachment: { path: '/research/japan-lost-decades/data/japan-national-civil-service-applications.csv', source: 'content/research/japan-lost-decades/data/japan-national-civil-service-applications.csv', title: '日本国家公务员申请数据（CSV）' },
    },
    {
      slug: 'ai-agent-economy', path: '/research/ai-agent-economy/', index: '专题 002',
      title: 'AI Agent：宏观经济、行业重组与社会结构', description: '三份关于 AI Agent 经济传导、行业转型与社会后果的研究。',
      lede: '从任务成本、企业边界与市场结构出发，检验 AI Agent 如何经由行业重组、职业入口和公共信任进入真实经济。', accession: 'AAE · 2026',
      note: '宏观、产业与社会结构研究；不构成证券、职业或个性化决策指令。',
      volumes: [
        { path: '/research/ai-agent-economy/volume-1.html', source: 'content/research/ai-agent-development/volume-1.md', title: '第一卷：宏观、产业与实体经济', cutoff: '2026-08-05', summary: '从任务成本到企业边界、市场结构与社会反馈，讨论 Agent 的经济传导条件。' },
        { path: '/research/ai-agent-economy/industry-matrix.html', source: 'content/research/ai-agent-development/industry-matrix.md', title: '行业转型矩阵', cutoff: '2026-08-05', summary: '按八个行业区分局部优化、流程替代、企业重组与产业重构的条件。' },
        { path: '/research/ai-agent-economy/volume-2.html', source: 'content/research/ai-agent-development/volume-2.md', title: '第二卷：社会结构', cutoff: '2026-08-05', summary: '从产业重组到职业入口、分配、家庭、地区与公共信任。' },
        { path: '/research/ai-agent-economy/sources.html', source: 'content/research/ai-agent-development/sources.md', title: '来源记录', cutoff: '2026-07-15', summary: '正文 [Sxx] 编号对应的公开来源、支持主张与局限。' },
      ],
    },
  ],
});
