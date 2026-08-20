---
name: 开放研究资料库
description: 面向长篇公开研究的横向档案索引系统。
colors:
  archival-blue: "#07398d"
  archival-blue-deep: "#06285f"
  accession-red: "#d83a2f"
  paper: "#fbfaf6"
  paper-deep: "#f2f0e8"
  ink: "#10182a"
  muted-ink: "#5f6d82"
  rule: "#b9c2d0"
typography:
  display:
    fontFamily: '"Segoe UI", "Microsoft YaHei UI", "Microsoft YaHei", system-ui, sans-serif'
    fontSize: "clamp(2.4rem, 5.8vw, 6rem)"
    fontWeight: 760
    lineHeight: 1.06
    letterSpacing: "-.055em"
  body:
    fontFamily: '"Segoe UI", "Microsoft YaHei UI", "Microsoft YaHei", system-ui, sans-serif'
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.78
  label:
    fontFamily: '"Segoe UI", "Microsoft YaHei UI", "Microsoft YaHei", system-ui, sans-serif'
    fontSize: ".71rem"
    fontWeight: 760
    letterSpacing: ".12em"
rounded:
  archival: "0px"
spacing:
  tight: ".8rem"
  row: "1.35rem"
  reading: "clamp(2.4rem, 7vw, 6rem)"
components:
  finding-aid-row:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.archival-blue}"
    rounded: "{rounded.archival}"
    padding: "1.35rem 0"
  toc-toggle:
    backgroundColor: "transparent"
    textColor: "{colors.archival-blue}"
    rounded: "{rounded.archival}"
    padding: ".8rem 1.2rem"
---

# Design System: 开放研究资料库

## Overview

**Creative North Star: "横向档案索引"**

这是一个供检索与细读使用的公开研究书架，不是社交信息流。深钴蓝档案带承担识别与进入，纸色内容面承担证据和阅读，朱红只作为正在被检索的编目记号。页面通过水平规则、编号行与资料卡片式元数据让读者先判断范围，再进入完整正文。

**Key Characteristics:**

- 大尺度压缩字形与留白组成档案封面，而非营销横幅。
- 直角、细规则、编号和数据截止日期构成可扫描的检索语法。
- 长文页把目录、阅读进度和宽表格处理为阅读工具，而不是装饰。

## Colors

颜色以档案盒、无酸纸与朱红索引签为材料隐喻；每一屏的红色只用于活动状态、日期或指向。

### Primary

- **档案蓝：** 作为专题登记带、主要标题和导航锚点，建立稳定的资料库身份。
- **深档案蓝：** 只用于页脚与站点外沿，提供收束和深度。

### Secondary

- **朱红索引签：** 只表示编号、数据截止日、进度与方向箭头；不作为大面积背景。

### Neutral

- **无酸纸：** 站点底面和阅读载体。
- **深纸色：** 行内代码与低对比内容层。
- **墨色与灰蓝：** 正文、次级说明和分隔线的层级组合。

**The Accession Mark Rule.** 朱红必须服务于定位或状态；它的稀少使编目动作可见。

## Typography

**Display Font:** 系统无衬线中文栈（Segoe UI / Microsoft YaHei UI / Microsoft YaHei / system-ui）

**Body Font:** 同一系统无衬线中文栈

**Character:** 高权重、紧字距的展示文字像档案盒正面大号题签；正文保持常规字重与较宽行距，服务长时间阅读。

### Hierarchy

- **Display：** 用于登记带和正文主标题；大幅响应式尺寸、760 字重与负字距。
- **Headline：** 用于章节入口；使用蓝色和细分隔线建立结构。
- **Title：** 用于卷名和目录行；强调编号与路径。
- **Body：** 16px、1.78 行高、最大 74ch，限定长文行宽。
- **Label：** .71rem、760 字重、.12em 字距，用于英文小标签和档案元数据。

**The Two-Speed Type Rule.** 只让登记层使用强烈、压缩的展示尺度；证据正文维持安静且可持续的阅读节奏。

## Layout

专题页采用“登记带 → 红色入藏签 → 白色导读页”的垂直序列：蓝色首屏确认主题，下面的双栏导读让说明与两卷路径并行。卷列表是可点击的水平编目行，而非等宽卡片网格。

长文在桌面采用左侧粘性目录与右侧 74ch 正文；800px 以下变为单栏，目录折叠为可展开按钮，表格保留独立横向滚动。整体容器最大约 94–100rem，页面边距使用 `clamp()` 而非固定像素。

## Elevation & Depth

系统以色块、规则和文档层叠表现深度，默认保持平面；只有朱红入藏签使用轻微投影以确认其跨越蓝色登记带和纸色内容面的层级。

**The Flat Archive Rule.** 内容行、正文和导航不使用卡片投影；结构由纸、墨、规则和间距承担。

## Shapes

形状语言是档案式直角（0px）：规则、表格、标签、目录与可点击行都保持方正。入藏签以垂直书写和跨界位置作为签名几何，不用圆角徽章替代。

## Components

### Navigation

- **Style:** 纸色顶栏、墨色文字，当前项以朱红底边确认状态。
- **Mobile:** 保留同一极简导航，目录在正文页独立折叠。

### Finding-aid Rows

- **Shape:** 直角水平行，首行使用更重的墨色顶线。
- **Color:** 蓝色编号和卷名、灰蓝摘要、朱红日期与箭头。
- **Behavior:** 整行可点击；悬停只将文字转为朱红，不改变布局。

### Article Table of Contents

- **Style:** 桌面粘性侧栏、灰蓝目录链接与压入式子级。
- **Mobile:** 纸色折叠条，按钮同步更新 `aria-expanded`；展开内容限高并可滚动。

### Attachment Row

- **Style:** 与卷行同一规则语法，用朱红 CSV 标签区分可下载资料。

### Reading Progress

- **Style:** 顶部 4px 朱红细线，仅在阅读页滚动时延展。

## Do's and Don'ts

### Do:

- **Do** 使用深蓝登记面与纸色阅读面之间的明确切换来组织路径。
- **Do** 把数据截止、卷号、资料类型和来源等检索信息放在规则化的水平行中。
- **Do** 在窄屏保留长文的目录、锚点和表格可访问性。

### Don't:

- **Don't** 把专题入口改成带阴影的营销卡片网格。
- **Don't** 为了“活跃”加入评论、点赞、订阅或虚构的读者数据。
- **Don't** 大面积使用朱红，或把它变成与证据层级无关的装饰色。
