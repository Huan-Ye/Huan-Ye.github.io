# 来源记录

检索日期：2026-07-15  
语言：中文、英文  
来源类型：法律法规、监管文件、标准与协议、公司原始公告、法学论文、安全框架

## 检索策略

### 关键词组

- 美国：`electronic agent contract UETA`、`ESIGN electronic agent`、`customer identification program person`、`beneficial owner natural person`、`agent payments protocol authorization mandate`、`algorithmic entity LLC`、`agentic AI common law agency`。
- 中国：`民法典 代理 数据电文`、`公司登记 实名认证`、`银行账户 客户身份识别 受益所有人`、`智能体支付 开放协议`、`人工智能 法律主体`、`反电信网络诈骗 出租账户`。
- 安全：`agentic identity privilege abuse`、`tool misuse`、`memory poisoning`、`deepfake identity financial fraud`。

### 纳入标准

- 直接涉及自动交易、主体资格、授权、账户、记忆、审计、责任或 Agent 支付；
- 法律与监管优先使用官方全文；
- 产业趋势优先使用协议发布方或支付网络公告；
- 学术观点须能验证论文题名、作者、年份和发布载体。

### 排除标准

- 仅讨论模型能力、与经济行动无关的内容；
- 无法核验出处的转载和搜索摘要；
- 把产品宣传数据直接当作独立市场规模证据；
- 纯粹讨论 AI 意识或道德人格、不能回答制度问题的文献。

## 核心来源

| # | 来源与日期 | 类型 | 支持的主张 | 质量 | 主要局限 |
|---|---|---|---|---|---|
| 1 | [15 U.S.C. §7006, E-SIGN definitions](https://uscode.house.gov/view.xhtml?edition=prelim&num=0&req=granuleid%3AUSC-prelim-title15-section7006)，截至 2026-07-08 | 美国联邦法 | “电子代理”可在无人即时复核时发起或响应行动；但电子签名仍要求由“person”采纳并具有签名意图 | A | 定义本身不解决所有合同归责问题 |
| 2 | [California Civil Code §§1633.2, 1633.9, 1633.14](https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?article=&chapter=&division=3.&lawCode=CIV&part=2.&title=2.5.) | 州法（UETA） | 电子代理之间可在无人知晓或审阅具体行动时形成合同；电子记录仍需归属于某个 person | A | 加州法示例，不等于所有州细节完全一致 |
| 3 | [31 C.F.R. §1020.220](https://www.law.cornell.edu/cfr/text/31/1020.220) | 美国银行客户识别规则 | 银行须形成对客户真实身份的合理信念；个人、公司、合伙或信托等需提供身份或设立证明 | A | LII 是权威法律转录而非发布机关网页；规则不专为 AI 制定 |
| 4 | [FinCEN CDD Final Rule](https://www.fincen.gov/resources/statutes-and-regulations/cdd-final-rule) 与 [2026 FAQs](https://www.fincen.gov/resources/statutes-and-regulations/cdd-rule-faqs) | 美国监管 | 法律实体客户仍需识别自然人受益所有人和控制人；不接受名义人替代实际控制关系 | A | 适用范围和豁免复杂，不能外推到全部支付产品 |
| 5 | [CRS, Preemption and Privacy Law](https://www.congress.gov/crs-product/R48667)，2025-08-29 | 国会研究处报告 | 美国没有单一综合联邦隐私法，州法和行业法并存 | A- | 属解释性报告，不是成文法 |
| 6 | [California Privacy Protection Agency ADMT regulations](https://cppa.ca.gov/regulations/ccpa_updates.html)，2025-09-22，2026-01-01 生效 | 州监管 | 某些自动化决策触发风险评估、审计、访问或退出权，显示 Agent 记忆与决策将面对州级差异化治理 | A | 仅代表加州；适用门槛需结合具体业务 |
| 7 | [NIST AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/) | 美国官方自愿框架 | 组织需明确人机配置中的角色、责任与监督 | A- | 自愿框架，不能证明法律义务 |
| 8 | [中华人民共和国民法典：总则、代理](https://www.cac.gov.cn/2020-06/01/c_1592561777268319.htm) 与 [合同编](https://www.cac.gov.cn/2020-06/01/c_15925617772683192.htm) | 中国法律 | 民事主体为自然人、法人和非法人组织；代理、授权范围、无权代理、数据电文意思表示和电子合同已有规则 | A | 未专门规定 AI Agent；AI 行为如何归属于人需个案解释 |
| 9 | [中华人民共和国公司法（2023 修订）](https://www.npc.gov.cn/npc/c2/c30834/202312/t20231229_433999.html) | 中国法律 | 法定代表人由执行公司事务的董事或经理担任；公司治理职位有民事能力与责任要求 | A | 未直接写明“AI 不得任职”，结论来自主体与任职规则的体系解释 |
| 10 | [公司登记管理实施办法](https://www.samr.gov.cn/zw/zfxxgk/fdzdgknr/fgs/art/2024/art_6580c00811be45bfa304c1273b74e294.html)，2025-02-10 生效 | 中国部门规章 | 法定代表人、董事、高管和股东等存在实名认证要求，代理登记也须标明身份并提交授权 | A | 公司登记不等同于全部组织活动 |
| 11 | [中国人民银行：企业银行结算账户管理办法](https://www.pbc.gov.cn/chubanwu/114566/114579/4356048/4356270/2021100915352066755.pdf) | 中国金融规则 | 企业账户落实实名、身份识别、营业执照和法定代表人或授权人核验 | A | 规则早于当前 Agent 浪潮，但仍说明账户主体结构 |
| 12 | [金融机构客户受益所有人识别管理办法](https://www.pbc.gov.cn/zhengwugongkai/attachDir/2025/12/2025122909330031237.pdf)，2026-01-20 生效 | 中国金融规则 | 金融机构须穿透识别受益所有人，强化 Agent 背后的自然人或组织责任链 | A | 具体适用与豁免需结合客户类型 |
| 13 | [中华人民共和国个人信息保护法](https://www.miit.gov.cn/jgsj/zfs/fl/art/2022/art_515a4b20c12f430eab54bb4f56d89f56.html) 与 [个人信息保护合规审计管理办法](https://www.cac.gov.cn/2025-02/14/c_1741233507681519.htm) | 中国法律与规章 | 个人信息处理者是组织或个人；自动化决策强调透明、公平、影响评估、解释和拒绝机制 | A | 不直接规定 Agent 记忆所有权 |
| 14 | [生成式人工智能服务管理暂行办法](https://www.cac.gov.cn/2023-07/13/c_1690898327029107.htm) | 中国部门规章 | 义务主要落在服务提供者；对输入和使用记录、违法内容、备案和安全评估作出要求 | A | 面向公众生成式 AI 服务，不覆盖全部企业内部 Agent |
| 15 | [人工智能生成合成内容标识办法](https://www.cac.gov.cn/2025-03/14/c_1743654684782215.htm)，2025-09-01 生效 | 中国部门规章 | 生成内容需显式/隐式标识并保留部分日志，显示监管倾向于可追溯与平台责任 | A | 主要规制内容，不等于所有 Agent 行为都需同样标识 |
| 16 | [中华人民共和国反电信网络诈骗法](https://www.miit.gov.cn/jgsj/zfs/fl/art/2022/art_d30139b442a141f48f05775d8c0b3cee.html) | 中国法律 | 禁止非法买卖、出租、出借银行/支付/互联网账号及提供实名核验帮助或虚构代理关系 | A | 仅直接覆盖违法场景；合法企业授权需另行判断 |
| 17 | [Google Cloud: Agent Payments Protocol (AP2)](https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol)，2025-09-16 | 原始协议公告 | 用 Intent Mandate、Cart Mandate 和可验证凭证证明授权、真实性与责任链 | B+ | 发布方有推广利益；协议采用程度仍在演进 |
| 18 | [Visa Intelligent Commerce](https://www.visa.com/en-us/solutions/intelligent-commerce) 与 [2025 发布公告](https://investor.visa.com/news/news-details/2025/Find-and-Buy-with-AI-Visa-Unveils-New-Era-of-Commerce/default.aspx) | 支付网络公告 | Agent 专用凭证、限额、条件、认证和争议信号已成为产品方向 | B | 产品仍处部署过程；厂商预测不可视为独立证据 |
| 19 | [Mastercard Agent Pay](https://newsroom.mastercard.com/news/press/2025/april/mastercard-unveils-agent-pay-pioneering-agentic-payments-technology-to-power-commerce-in-the-age-of-ai/)，2025-04-29 | 支付网络公告 | Agentic Tokens 与可信 Agent 识别被纳入支付网络 | B | 产品公告，缺少独立采用数据 |
| 20 | [Stripe Shared Payment Tokens / ACP](https://stripe.com/newsroom/news/stripe-openai-instant-checkout)，2025-09-29；[2026 扩展](https://stripe.com/blog/supporting-additional-payment-methods-for-agentic-commerce) | 支付服务商公告 | 凭证可按商户、金额和购物车限缩，Agent 不直接接触底层支付凭证 | B | 仅代表 Stripe 生态；商业宣传偏差 |
| 21 | [中国银联 APOP 智能体支付开放协议框架](https://cn.unionpay.com/upowhtml/cn/templates/newInfo-nosub/7885004da382485e8bde5a0ba000fdd3/20260403105759.html)，2026-04-03 | 支付网络公告 | 明确提出 Agent 身份、用户身份、意图和支付授权四类管理能力，并完成白名单生产验证 | B+ | 尚处早期，五笔验证交易不能证明规模化成熟 |
| 22 | [支付宝 MCP 支付服务](https://www.antgroup.com/en/news-media/press-releases/1744704000000)，2025-04-15 | 支付平台公告 | 中国平台已开放 Agent 调用支付、查询和退款能力 | B | 公司自述；最终法律授权仍依赖账户和用户流程 |
| 23 | [Deborah DeMott, “When Agentic AI Met the Common Law of Agency”](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6838660)，2026-05-27 | 法学工作论文（forthcoming） | 主张 Agentic AI 因缺乏法律上的 person capacity，并非普通法意义上的 agent，而更像工具；表见权限仍可能约束部署者 | B- | 尚未正式出版；属于学者解释，不是判例 |
| 24 | [Lynn LoPucki, “Algorithmic Entities”](https://journals.library.wustl.edu/lawreview/article/id/3143/)，2018 | 法学期刊 | 算法可借公司实体获得交易身份和资产外壳，也可能放大匿名、迁移和反社会用途 | B+ | 早于 LLM Agent；部分风险是假设性推演 |
| 25 | [“AI智能体的私法构造与行为边界”](https://cnki.istiz.org.cn/kcms/detail/detail.aspx?dbcode=CJFD&dbname=CJFD2026&filename=DFFX202601002)，2026 | 中国法学论文 | 提出 AI 智能体不是法律主体，可用“用户—提供者—第三方”三面结构分析内外部关系 | B | 本次仅核验到摘要与元数据，未获得全文逐段核验 |
| 26 | [Gunther Teubner, “Digital Personhood?”](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3177096)，2018 | 私法理论论文 | 区分自主风险、人与软件结合风险、网络风险，并反对简单复制完整人格 | B | 理论性强、并非中美实证法结论 |
| 27 | [OWASP Top 10 for Agentic Applications 2026](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/) 与 [Memory Is a Feature. It Is Also an Attack Surface](https://genai.owasp.org/2026/05/13/memory-is-a-feature-it-is-also-an-attack-surface/) | 行业安全框架 | 工具滥用、身份与权限滥用、记忆污染是 Agent 特有或被放大的风险 | B+ | 非法律标准；事件选择可能偏向安全社区关注的问题 |
| 28 | [FinCEN deepfake fraud alert](https://www.fincen.gov/news/news-releases/fincen-issues-alert-fraud-schemes-involving-deepfake-media-targeting-financial)，2024-11-13 | 美国监管风险通报 | 金融机构已观察到利用生成式 AI 伪造身份材料、绕过身份验证的可疑活动增加 | A- | 主要是深度伪造，不直接等于自主 Agent 犯罪 |
| 29 | [IETF RFC 6749: OAuth 2.0](https://www.rfc-editor.org/info/rfc6749/)，2012 | 技术标准 | 通过范围、期限与可撤销令牌实现有限委托，避免第三方持有资源所有者主凭证；为 Agent 授权层提供历史类比 | A- | 授权对象主要是 HTTP 资源访问，不含支付、合同和自然语言任务语义 |
| 30 | [NIST SP 800-207](https://csrc.nist.gov/pubs/sp/800/207/final) 与 [SP 800-207A](https://csrc.nist.gov/pubs/sp/800/207/a/final) | 美国技术标准 | 零信任要求对用户、设备、应用与服务身份进行动态认证和授权，说明非人身份治理已有成熟制度前身 | A- | 属自愿安全标准；不能证明企业会采购独立 Agent 产品 |
| 31 | [PCAOB AS 2201](https://pcaobus.org/oversight/standards/auditing-standards/details/AS2201) | 美国审计标准 | 自动化控制也必须验证设计有效性；授权、能力、管理层凌驾和 IT 一般控制影响审计风险 | A | 只直接适用于财务报告内部控制审计，不覆盖所有 Agent 行为 |
| 32 | [财政部等：《企业内部控制基本规范》](https://kjs.mof.gov.cn/zhengcefabu/200807/t20080704_55982.htm) 与 [采购业务指引](https://www.gov.cn/gzdt/att/att/site1/20100505/001e3741a2cc0d4b0f9c01.pdf) | 中国官方规范 | 企业需实行授权审批、不相容职责分离、预算和采购全流程控制；Agent 进入采购不会消除这些控制目标 | A | 规范早于 Agent，具体技术实现需重新设计 |
| 33 | [财政部：资金活动内部控制解读](https://kjs.mof.gov.cn/zhengcejiedu/201005/t20100528_320204.htm) | 中国官方解释 | 资金支付需写明用途、金额、时间并进行分级授权、复核和凭证留存 | A- | 属政策解读，不是 Agent 专门规则 |
| 34 | [U.S. Census Bureau BTOS AI supplement](https://www.census.gov/library/working-papers/2026/adrm/CES-WP-26-25.html)，2026 | 美国官方调查工作论文 | 2025-11 至 2026-01 约 18% 企业在至少一项业务职能中使用 AI，按就业加权为 32%；多数采用者范围仍有限 | A- | 统计的是广义 AI 而非自主 Agent；调查口径在 2025 年改变 |
| 35 | [U.S. Census Bureau：Large Firms Biggest AI Users](https://www.census.gov/library/stories/2026/05/ai-use-businesses.html)，2026-05-26 | 美国官方统计解读 | 2026 年春企业 AI 使用约 17%—20%，大型企业和信息、金融行业明显更高 | A- | 不能直接推断 Agent 交易采用；企业自报存在测量误差 |
| 36 | [国家统计局：第五次全国经济普查企业数字化结果](https://www.stats.gov.cn/sj/sjjd/202502/t20250227_1958814.html)，数据期 2023 | 中国官方统计 | 规模以上企业中 16.4% 应用人工智能，管理和购销存等环节数字化基础较广 | A | AI 定义宽于生成式 AI 和 Agent；数据期早于当前 Agent 协议 |
| 37 | [工信部：2025 年中小企业 AI 典型应用场景征集](https://www.miit.gov.cn/jgsj/qyj/wjfb/art/2025/art_88cf3f9631d948af960e64f1179d2f84.html) | 中国政策与场景文件 | 政策明确关注采购供应、营销售后、经营管理和具备自主决策能力的智能体场景 | A- | 征集方向反映政策意图，不证明实际采用率或经济效果 |
| 38 | [Acemoglu & Restrepo, “Automation and New Tasks”](https://www.aeaweb.org/articles?id=10.1257%2Fjep.33.2.3)，2019 | 同行评审经济学论文 | 自动化改变任务而非机械地消灭整个职业；新的人类任务会产生再配置效应 | A- | 通用劳动经济框架，不是 Agent 岗位的直接实证研究 |
| 39 | [Autor, “Why Are There Still So Many Jobs?”](https://pubs.aeaweb.org/doi/10.1257/jep.29.3.3)，2015 | 同行评审经济学论文 | 技术既替代也补充劳动，职业变化取决于任务互补、适应性和需求扩张 | A- | 早于生成式 AI；不能给出具体职业数量预测 |
| 40 | [U.S. GAO AI Accountability Framework](https://www.gao.gov/products/gao-21-519sp)，2021 | 美国政府问责框架 | AI 问责需覆盖治理、数据、绩效与持续监测，且审计需要可复现决策的文档和变更记录 | A- | 主要面向联邦机构和问责实践，属于框架而非强制通用规则 |
| 41 | [FBI 2025 IC3 Annual Report](https://www.fbi.gov/file-repository/2025_ic3report.pdf)，2026 发布 | 美国执法统计 | 2025 年网络赋能欺诈报告损失约 176.97 亿美元，为“既有欺诈基础设施已具规模”提供基线 | A- | 投诉数据存在漏报与分类偏差，且不能识别 Agent 带来的增量损失 |
| 42 | [NIST NCCoE Zero Trust implementation](https://pages.nist.gov/zero-trust-architecture/VolumeA/ProjectOverview.html) | 美国技术实施指南 | 访问判断可同时使用非人实体身份、角色、设备状态、行为异常与业务流程逻辑 | A- | 技术示范项目，不能代表统一市场实践 |

## 来源分布与偏差

- 法律与监管来源占多数，适合回答制度边界，但不能证明职业一定形成。
- 产业协议集中于支付领域，可能高估“交易型 Agent”而低估不涉及支付的组织变化。
- 美国资料在开放协议和公司法思想实验方面较多；中国资料在实名、平台责任和支付基础设施方面较多，这既反映制度差异，也受公开资料可得性影响。
- 新职业与长期制度没有直接历史数据，只能由任务经济学、既有授权/内控结构以及已观测到的协议变化进行条件式推演。

## 检索限制

- 未进行付费数据库中的全面法学文献综述；
- 未取得所有论文全文，未核验到全文的来源仅用于观点分布，不支撑关键法律事实；
- 未访问支付机构内部风控、争议率或真实 Agent 交易损失数据；
- 没有足够公开数据估算创业市场规模，报告只进行需求成熟度排序。

---

## 2026-07-27 双卷重构补充来源

本轮把来源范围从法律、授权与支付扩展到金融稳定、银行模型风险、劳动任务、收入分配、企业组织和灰产治理。原编号 1—42 保留，新增如下。

| # | 来源与日期 | 类型 | 支持的主张 | 质量 | 主要局限 |
|---|---|---|---|---|---|
| 43 | [FSB, *The Financial Stability Implications of Artificial Intelligence*](https://www.fsb.org/2024/11/the-financial-stability-implications-of-artificial-intelligence/)，2024-11-14 | 国际金融稳定机构报告 | AI 可能通过第三方依赖、市场相关性、网络风险、模型与数据治理、欺诈和虚假信息放大金融脆弱性 | A- | 主要识别脆弱性，不证明风险已达到系统重要程度 |
| 44 | [BIS Annual Economic Report 2024, Chapter III](https://www.bis.org/publ/arpdf/ar2024e3.htm)，2024-06-25 | 国际清算银行研究 | 相似算法和自动性可能放大羊群、流动性囤积、挤兑和火售；AI 同时影响生产率、需求和中央银行工作 | A- | 机制与情景分析较多，长期影响不确定 |
| 45 | [BIS Working Paper 1194, *Intelligent financial system*](https://www.bis.org/publ/work1194.htm)，2024-06-13 | 工作论文 | 从金融中介、保险、资管和支付四类功能讨论 GenAI、Agent 与金融监管 | B+ | 作者观点不代表 BIS 正式立场；部分 Agent 内容为前瞻推演 |
| 46 | [美国财政部：AI in Financial Services 报告发布](https://home.treasury.gov/news/press-releases/jy2760)，2024-12-19 | 美国政府报告 | 金融业 AI 使用扩大，同时放大隐私、偏见和第三方风险；建议加强监管协调和行业信息共享 | A- | 基于 103 份征求意见反馈，可能受参与者选择偏差影响 |
| 47 | [美国财政部：Managing AI-Specific Cybersecurity Risks](https://home.treasury.gov/news/press-releases/jy2212)，2024-03-27 | 美国政府风险报告 | 大小金融机构之间存在 AI 能力差距和反欺诈数据差距，需金融业专门的风险共享与治理 | A- | 关注网络与欺诈，不直接测量 Agent 交易 |
| 48 | [英格兰银行/FCA：Artificial intelligence in UK financial services 2024](https://www.bankofengland.co.uk/report/2024/artificial-intelligence-in-uk-financial-services-2024)，2024-11-21 | 监管调查 | 75% 受访机构使用 AI；55% 用例有一定自动决策，但完全自主仅 2%；第三方和供应商集中明显 | A- | 英国样本不能直接代表中美；机构自报 |
| 49 | [美联储/OCC/FDIC：Supervisory Guidance on Model Risk Management](https://www.federalreserve.gov/frrs/guidance/supervisory-guidance-on-model-risk-management.htm)，2026-04-17 | 美国银行监管指引 | 模型风险可导致财务损失和错误决策；生成式和 Agentic AI 虽未直接纳入模型定义，仍应由治理与风险实践控制 | A | 主要针对较大银行且明确排除 GenAI/Agentic AI 的直接适用，需谨慎类推 |
| 50 | [CFPB Circular 2022-03](https://www.consumerfinance.gov/compliance/circulars/circular-2022-03-adverse-action-notification-requirements-in-connection-with-credit-decisions-based-on-complex-algorithms/) 与 [2023 补充指导](https://www.consumerfinance.gov/archive/newsroom/cfpb-issues-guidance-on-credit-denials-by-lenders-using-artificial-intelligence/) | 美国消费者金融监管 | 复杂算法或黑箱不能免除贷款人提供具体、准确不利行动理由的义务 | A | 直接约束信用决定，不覆盖所有金融 Agent 行为 |
| 51 | [FINRA Regulatory Notice 24-09](https://www.finra.org/rules-guidance/notices/24-09)，2024-06-27 | 美国证券自律监管 | 证券机构使用 GenAI 仍承担既有监督、记录、模型、隐私和可靠性义务 | A- | 不创造新的监管要求，且面向 FINRA 会员 |
| 52 | [SEC, *Report to Congress on Algorithmic Trading*](https://www.sec.gov/files/Algo_Trading_Report_2020.pdf)，2020 | 美国监管研究 | 闪崩研究说明算法撤单、流动性枯竭和负反馈的重要性，并讨论熔断与市场韧性 | A- | 研究对象是算法交易，不是通用 Agent；不能机械外推 |
| 53 | [中国证监会：《证券市场程序化交易管理规定（试行）》](https://www.csrc.gov.cn/csrc/c100028/c7480577/content.shtml)，2024-05-15 发布、2024-10-08 实施 | 中国监管规则 | 先报告后交易、实时监测、高频差异化管理、券商客户管理和系统风险控制 | A | 规制程序化证券交易，不覆盖消费、信贷或企业 Agent |
| 54 | [国家金融监督管理总局：《银行业保险业数字金融高质量发展实施方案》](https://www.nfra.gov.cn/cn/view/pages/governmentDetail.html?docId=1239741&generaltype=1&itemId=861)，2025-12-22 | 中国金融监管文件 | 要求加强数字金融治理、算法模型、外包、流动性、数据、网络和生态合作风险管理 | A | 面向银行保险数字金融，不专门定义 Agent |
| 55 | [ILO, *Generative AI and jobs: A 2025 update*](https://www.ilo.org/publications/generative-ai-and-jobs-2025-update)，2025-05-20 | 国际劳工组织任务暴露研究 | 使用近 3 万任务估计职业暴露；约四分之一劳动者所在职业有某种暴露，多数更可能转型而非完全替代 | A- | 暴露度不是采用、失业或工资预测 |
| 56 | [ILO, *What indicators tell us—and what they do not*](https://www.ilo.org/resource/news/new-ilo-brief-explains-what-ai-exposure-indicators-reveal-about-jobs)，2026-04-17 | 国际劳工组织方法说明 | 明确警告不能把暴露指标单独解释为岗位损失，需结合就业、工资、转岗和制度 | A- | 方法边界说明，不提供新的长期因果估计 |
| 57 | [ILO, *Gen AI, occupational segregation and gender equality*](https://www.ilo.org/publications/gen-ai-occupational-segregation-and-gender-equality-world-work)，2026-03-05 | 国际劳工组织研究简报 | 女性主导职业的 GenAI 暴露更高，约 29% 对 16%；多数影响仍更可能通过任务和工作条件发生 | A- | 84 国汇总掩盖国别制度差异；暴露不等于净就业 |
| 58 | [IMF, *AI Adoption and Inequality*](https://www.imf.org/en/publications/wp/issues/2025/04/04/ai-adoption-and-inequality-565729)，2025-04-04 | IMF 工作论文 | 替代、劳动互补和资本回报可使工资不平等与财富不平等方向不同；内生采用会放大财富效应 | B+ | 校准模型而非长期现实结果；作者观点不代表 IMF |
| 59 | [OECD, *Artificial intelligence and wage inequality*](https://www.oecd.org/en/publications/artificial-intelligence-and-wage-inequality_bf98a45c-en.html)，2024-04-10 | OECD 工作论文 | 2014—2018 年未见 AI 增加职业间工资不平等；有迹象表明职业内差距可能下降 | B+ | 数据早于生成式 AI，因果机制仍不确定 |
| 60 | [World Bank, *Digital Progress and Trends Report 2025: Strengthening AI Foundations*](https://www.worldbank.org/en/publication/dptr2025-ai-foundations/report) | 世界银行报告 | 高收入国家主导 AI 创新、算力和创业融资；连接、算力、本地数据和技能造成 AI 访问差距 | A- | 跨国总量不能直接说明个人 Agent 分层 |
| 61 | [Brynjolfsson, Li & Raymond, *Generative AI at Work*](https://www.nber.org/papers/w31161)，2023，修订版 | 企业现场研究/工作论文 | 5,179 名客服人员中生产率平均提高约 14%，收益集中于低经验和低技能员工 | B+ | 单一企业和工作流程；不是通用 Agent，也不测长期就业 |
| 62 | [Dillon et al., *Shifting Work Patterns with Generative AI*](https://www.aeaweb.org/articles?from=f&id=10.1257%2Faeri.20250275)，AER: Insights forthcoming | 多企业随机实验 | 66 家企业、7,137 名知识工作者中，实际使用者每周少花约两小时处理邮件，但未检测到任务数量或构成变化 | B+ | 研究的是个人工具供给，组织流程可能尚未配套改变 |
| 63 | [Noy & Zhang 写作实验的 MIT 说明](https://news.mit.edu/2023/study-finds-chatgpt-boosts-worker-productivity-writing-0714)，2023-07-14 | 随机实验的大学发布说明 | 453 名专业劳动者的短写作任务中，时间下降约 40%、质量提高约 18%，低表现者获益更大 | B | 实验任务短、缺少企业专有背景；此处使用大学说明而非论文全文 |
| 64 | [人力资源社会保障部：2025 年度新职业信息征集](https://chrm.mohrss.gov.cn/%E4%BA%BA%E5%8A%9B%E8%B5%84%E6%BA%90%E7%A4%BE%E4%BC%9A%E4%BF%9D%E9%9A%9C%E9%83%A8%E5%BC%80%E5%B1%952025%E5%B9%B4%E5%BA%A6%E6%96%B0%E8%81%8C%E4%B8%9A%E4%BF%A1%E6%81%AF%E5%BE%81%E9%9B%86%E5%B7%A5/)，2025-09-12 | 中国职业制度文件 | 人工智能被列为新职业重点征集领域，说明中国职业制度化可经官方分类和标准路径推进 | A- | 征集不等于最终职业形成或就业规模 |
| 65 | [人力资源社会保障部：专业技术人才人工智能通识继续教育](https://zsgx.mohrss.gov.cn/zsgx/htmlDocument/2025-07-28/detail_50739.html)，2025-07-28 | 中国人力资本政策 | 自 2025 年起推动专业技术人员 AI 通识、应用和安全继续教育 | A | 反映政策供给，不证明培训效果和工资回报 |
| 66 | [国家发展改革委：以人工智能赋能高质量充分就业](https://www.ndrc.gov.cn/xxgk/jd/jd/202508/t20250829_1400152.html)，2025-08-29 | 中国政策解读 | 政策明确讨论智能代理、人机协同、灵活就业和就业结构调整 | B | 政策叙事和引用的市场数据不能作为净就业因果证据 |
| 67 | [中央网信办：“清朗·整治AI技术滥用”专项行动](https://www.cac.gov.cn/2025-04/30/c_1747719097461951.htm)，2025-04-30 | 中国治理行动 | 明确整治 AI 冒充、诈骗、网络水军、财经误导和未设行业安全控制的高风险问答 | A- | 执法重点不能直接测量全部事件规模 |
| 68 | [最高人民检察院：AI 深度伪造技术对证据审查的影响及应对](https://www.spp.gov.cn/spp/llyj/202509/t20250916_706610.shtml)，2025-09-16 | 中国司法实务研究 | 深度伪造影响电子数据和视听证据审查，需关注来源、完整性与取证规则 | B+ | 实务研究文章，不是司法解释或全国案件统计 |

### 补充来源的结构性偏差

- 金融稳定来源对尾部风险敏感，不能据此判断日常净收益为负；
- 劳动来源大多测量“生成式 AI 助手”或职业暴露，Agent 的持续记忆、预算和外部行动是额外假设；
- 美国公开调查和金融监管材料更丰富，中国资料更多体现政策、官方统计和行业试点，公开微观结果仍不足；
- 家庭、照护、教育、社会信任和长期阶层结果缺少纵向数据，双卷将这些内容明确列为弱推断或待验证。

---

## 2026-08-05 实体经济重构补充来源

### 补充检索策略

- **问题簇：** `AI firm adoption business functions employment`、`task productivity macro productivity diffusion`、`AI firm scope concentration cloud compute`、`AI SMEs core business functions`、`AI manufacturing supply chain robotics`、`AI health education public sector`、`AI early career hiring`、`人工智能+ 实体经济 制造业 中小企业 数字化`。
- **来源范围：** 中美官方统计和政策、国际组织、竞争监管机关、同行评审论文或可核验工作论文；厂商调查只作辅助，未用作核心因果证据。
- **纳入规则：** 必须能回答采用深度、任务效果、流程集成、企业规模、产业组织、行业瓶颈或劳动后果之一；同一采用数字必须保留问卷问题、分母和数据期。
- **主动反证：** 专门检索“生产率未转化”“使用范围浅”“就业影响小”“任务收益在交付端衰减”“暴露不等于失业”和“上游集中但下游仍可进入”的证据。

| # | 来源与日期 | 类型 | 支持的主张 | 质量 | 主要局限 |
|---|---|---|---|---|---|
| 69 | [Acemoglu, *The Simple Macroeconomics of AI*](https://www.nber.org/papers/w32487)，2024；2025 发表于 *Economic Policy* | 任务—宏观模型/同行评审论文 | 总量收益取决于受影响任务份额与任务成本节省，基准估计十年 TFP 累计增幅不超过 0.66%；困难、情境依赖任务可能使外推偏高 | B+ | 参数高度依赖早期任务实验；未计入 AI 创造新任务、产品和科研的长期效应 |
| 70 | [OECD, *Macroeconomic productivity gains from Artificial Intelligence in G7 economies*](https://www.oecd.org/content/dam/oecd/en/publications/reports/2025/06/macroeconomic-productivity-gains-from-artificial-intelligence-in-g7-economies_dcf91c3e/a5319ab5-en.pdf)，2025 | 国际组织微观—宏观情景模型 | 在高暴露且采用较广的 G7 经济体，AI 对年劳动生产率增长的情景估计约 0.4—1.3 个百分点；显示采用、产业结构和参数可造成很宽区间 | B+ | 是模拟而非已实现增长；与 69 的假设、口径不同，不能直接平均 |
| 71 | [Yotzov et al., *Firm Data on AI*](https://www.nber.org/papers/w34836)，2026-02，修订 2026-03 | 四国代表性高管调查/工作论文 | 近 6,000 名高管调查中 69% 企业报告某种 AI 使用，但平均高管使用仅每周 1.5 小时；约九成报告过去三年就业或生产率没有影响 | B+ | “某种使用”定义宽；高管自报和预期不是审计后的财务或就业结果；不含中国 |
| 72 | [Tucker, *You’re (not) Hired*](https://www.census.gov/library/working-papers/2026/adrm/CES-WP-26-27.html)，2026-04 | 美国雇主—雇员行政数据工作论文 | 最暴露行业州单元中 22—24 岁早期职业招聘在 ChatGPT 后相对下降约 9%，十个季度后就业相对下降约 12%；冲击主要经招聘而非裁员体现 | B+ | 非随机采用；疫情、远程办公、教育变化和利率是竞争解释，论文也发现部分更早趋势 |
| 73 | [Demirer, Musolff & Yang, *Writing Code vs. Shipping Code*](https://www.nber.org/papers/w35275)，2026-05 | 10 万余开发者匹配事件研究/工作论文 | 自主编码 Agent 对 commits 的累计效应约 180%，但到项目数量约 50%、实际发布约 30%，显示人类审查和交付弱环节显著稀释任务收益 | B+ | 非随机匹配设计；GitHub 开发者和特定工具不能代表所有软件企业；作者存在微软相关披露 |
| 74 | [Dell’Acqua et al., *Navigating the Jagged Technological Frontier*](https://www.hbs.edu/ris/Publication%20Files/dell-acqua-et-al-2026-navigating-the-jagged-technological-frontier_5c589c8c-fbb5-458f-b285-c944746cd717.pdf)，2026 发表于 *Organization Science* | 企业随机实验/同行评审 | 758 名咨询人员在能力边界内任务上速度、完成率和质量提高，但在边界外任务上过度依赖会降低正确性；证明收益由任务适配与监督决定 | A- | 单一高技能咨询机构、实验任务；不能直接推出行业利润或就业 |
| 75 | [OECD, *Generative AI and the SME Workforce*](https://www.oecd.org/en/publications/generative-ai-and-the-sme-workforce_2d08b99d-en.html)，2025-11-05 | 七国 5,000 多家中小企业代表性调查 | 31% 中小企业报告使用生成式 AI；使用者报告绩效、技能补缺和新产品收益，但整体人员需求变化有限，外包依赖可能下降 | A- | 结果为企业自报且不含中美；使用生成式 AI 不等于自主 Agent |
| 76 | [OECD, *AI adoption by small and medium-sized enterprises*](https://www.oecd.org/content/dam/oecd/en/publications/reports/2025/12/ai-adoption-by-small-and-medium-sized-enterprises_9c48eae6/426399c1-en.pdf)，2025-12-09 | G7/OECD 企业采用综述 | 2024 年 OECD 大企业 AI 使用约 40%，50—249 人企业 20.4%，10—49 人企业 11.9%；G7 核心生产职能采用仍约 1.9%—6.1%，揭示“使用”与“嵌入生产”差距 | A- | 跨国统计问卷不同；大中小企业定义及年份并非完全统一 |
| 77 | [OECD, *AI in manufacturing*](https://www.oecd.org/en/publications/progress-in-implementing-the-european-union-coordinated-plan-on-artificial-intelligence-volume-2_3ac96d41-en/full-report/ai-in-manufacturing_5df4a60d.html)，2026 | 国际组织行业综述与企业访谈 | 制造业主要入口是预测维护、质量保证与供应链优化，但采用仍有限且碎片化；规模化依赖数据、互操作、技能和设备集成 | B+ | 以欧盟为主；案例和访谈不能量化中美净效果 |
| 78 | [International Federation of Robotics, *World Robotics 2025* 发布数据](https://ifr.org/ifr-press-releases/news/global-robot-demand-in-factories-doubles-over-10-years)，2025-09-25 | 国际行业统计 | 2024 年中国新装工业机器人 29.5 万台、在用存量超过 200 万台；美国新装 3.42 万台、在用约 39.37 万台，说明 Agent 与物理自动化结合的初始条件明显不同 | B+ | 行业协会数据；台数不等于利用率、生产率或自主 Agent 水平，经济规模和制造业构成也不同 |
| 79 | [OECD, *Governing with Artificial Intelligence*](https://www.oecd.org/en/publications/2025/06/governing-with-artificial-intelligence_398fa287.html)，2025-09-18 | 200 个政府用例的国际组织报告 | 57% 用例以自动化、简化或定制流程服务为目标；政府采用受遗留系统、技能、预算、隐私、透明和代表性要求约束 | A- | 用例样本非全球统计普查；目标不等于实现效果 |
| 80 | [OECD, *AI Adoption in the Education System*](https://www.oecd.org/content/dam/oecd/en/publications/reports/2025/12/ai-adoption-in-the-education-system_43251cf0/69bd0a4a-en.pdf)，2025 | 国际组织教育综述 | 所引对照研究中教师备课时间下降约 31%且材料质量未降低，但培训、课程重构和互操作不足可能使工具增加而非减少工作负担 | B+ | 单项实验不能推出学习结果、教师就业或整个教育体系效率 |
| 81 | [WHO, *Ethics and governance of AI for health: Guidance on large multi-modal models*](https://www.who.int/publications/i/item/9789240084759)，2025-03-25 | 国际卫生治理指南 | 医疗 AI 的扩展受临床责任、数据质量、偏差、证据和持续监督约束；高后果判断不会因模型生成能力自动变成可无人负责的流程 | A- | 规范性指南，不测量医院生产率或采用收益 |
| 82 | [FTC, *Staff Report on AI Partnerships & Investments 6(b) Study*](https://www.ftc.gov/reports/ftc-staff-report-ai-partnerships-investments-6b-study)，2025-01 | 美国竞争监管调查 | 云商与模型开发者合作包含云支出承诺、权益、信息共享及不同程度的控制／排他安排，可能提高转换成本并影响算力和人才获取 | A- | 只调查三组大型合作；识别潜在竞争含义，不等于已认定违法或下游垄断 |
| 83 | [OECD, *Competition in artificial intelligence infrastructure*](https://www.oecd.org/en/publications/competition-in-artificial-intelligence-infrastructure_623d1874-en/full-report.html)，2025-11-14 | 国际组织竞争政策报告 | 芯片、数据中心和云等多层存在高集中、进入壁垒、纵向整合、交叉持股和供给瓶颈；上游控制可能影响下游进入条件 | A- | 市场变化快；上游集中不能单独证明应用行业集中，报告也指出短缺可吸引替代供给 |
| 84 | [U.S. Copyright Office, *Copyright and Artificial Intelligence*](https://www.copyright.gov/ai/)，2024—2025 | 美国官方版权研究 | 数字复制、可版权性和训练使用已形成分卷政策研究；内容行业的新利润池和争议将围绕授权、来源证明、数字替身和许可形成 | A | 法律政策边界不能证明创作者收入或内容需求的净方向 |
| 85 | [国务院：《关于深入实施“人工智能+”行动的意见》](https://www.nda.gov.cn/sjj/swdt/xwfb/0826/20250826173046592282838_mobile.html)，2025-08-21 | 中国国家政策 | 明确覆盖科技、产业、消费、民生、治理和全球合作，并提出 2027/2030 年智能终端与智能体普及目标，显示中国更可能以产业、公共采购和场景工程推动扩散 | A | 目标和“普及率”口径不等于现实采用、使用深度、生产率或就业结果 |
| 86 | [工信部：工业数据筑基行动、高质量行业数据集先行先试](https://www.miit.gov.cn/jgsj/xxjsfzs/wjfb/art/2026/art_3a68581fca0e42efa4659ec3fd423cb4.htmlCCIA)，2026 | 中国制造业数据政策 | 以行业联合体、可信互联平台、资源库、标准库和高质量数据集支持行业大模型与工业智能体，说明数据协同是制造业 Agent 的前置资产 | A- | 先行先试目标，不证明项目效果；实施信息公开有限 |
| 87 | [工信部：普惠算力赋能中小企业发展专项行动](https://www.miit.gov.cn/jgsj/txs/wjfb/art/2026/art_e5c990d4ec924dbc9da5818da97940ac.html)，2026 | 中国中小企业产业政策 | 针对研发设计、生产制造、设备运维和供应链管理推广低成本、轻量化算力方案，表明政策试图缓解中小企业固定成本劣势 | A- | 行动方向不能证明成本实际下降、企业持续使用或竞争差距收窄 |
| 88 | [国家统计局：第五次全国经济普查企业数字化解读](https://www.stats.gov.cn/xxgk/jd/sjjd2020/202502/t20250227_1958814.html)，2025-02-28，数据期 2023 | 中国官方统计解读 | 148.2 万家规模以上法人单位中 16.4% 使用宽口径 AI；生产和研发端数字化深度明显低于管理端，且该调查无法与 2018 年同比 | A | 与来源 36 同源但补充了分母、口径和不可比说明；排除小微企业，早于当前 Agent 波次 |
| 89 | [OECD, *Strengthening Supply Chains through Efficiency, Resilience, AI and Environmental Performance*](https://www.oecd.org/content/dam/oecd/en/publications/reports/2026/06/strengthening-supply-chains-through-efficiency-resilience-ai-and-environmental-performance_c776c9ff/2a495d96-en.pdf)，2026 | 国际组织供应链报告 | AI 与机器人、物联网结合可改善库存、路由、监测和协调，但韧性目标可能要求冗余，不能把效率最大化等同于供应链最优 | B+ | 综述与情景性证据较多；难以分离 AI、数字化和物流投资的独立贡献 |
| 90 | [White House, *America’s AI Action Plan*](https://www.whitehouse.gov/srv/htdocs/wp-content/uploads/2025/07/Americas-AI-Action-Plan.pdf)，2025-07-23 | 美国联邦政策 | 美国政策主轴包括加速创新、建设芯片／数据中心／能源基础设施和出口全栈 AI，并推进联邦采购；与中国的场景工程路径形成可比较但不同的政策组合 | A | 政策优先级可能变化；行动计划不等于预算落实或企业实际采用 |

### 本轮来源核验与口径冲突

1. **18% 与 69% 并不矛盾。** Census 34 的分母是全体美国雇主企业，问题是近期是否在业务职能中使用；71 是四国分层高管样本，并采用更宽的“积极使用”口径。前者更接近企业普及率，后者更能说明轻量使用的广度。两者都不能当作 Agent 自主运营率。
2. **16.4% 中国企业 AI 使用率不能与美国 18% 直接排名。** 中国数据期为 2023 年、仅覆盖规模以上企业，且 AI 定义和问卷不同；美国数据期为 2025—2026 年、覆盖非农雇主企业。因此只用于说明各自内部的采用结构。
3. **任务收益与总量收益属于不同证据层。** 61、73、74、80 是特定任务或流程的因果／准因果证据；69、70 是依赖采用率和外推参数的宏观模型。报告不把前者的百分比直接乘到 GDP。
4. **暴露不是失业。** 55、56 只说明任务技术可能性；72 提供更接近现实招聘变化的行政数据，但仍未随机识别企业采用。因此“招聘入口受压”列为较强推断，“普遍净失业”仍列为未知。
5. **集中必须分层判断。** 82、83 支持芯片、云和模型层的集中风险；75、76 同时支持生成式工具降低部分中小企业能力门槛。由此只能推出“上游集中、下游可能碎片化或两极化”，不能直接推出大企业吞并所有小企业。

### 来源覆盖偏差

- 当前最强微观效果证据集中于美国和欧洲的知识工作，制造、零售、医疗、教育、农业、建筑和公共部门主要依赖行业调查、政策与机制证据；
- 中国有规模以上企业普查、机器人数据和较丰富政策文件，但缺少与 Census BTOS 类似的高频、按业务职能和人员规模公开微观调查；
- 2026 年资料较多属于新发布工作论文，虽可核验来源和方法，但尚未形成长期重复研究；
- 企业财务、价格、并购和市场集中度的 Agent 专门数据仍不足，因此产业重构部分使用条件式推演，不能给出精确市场份额预测。
