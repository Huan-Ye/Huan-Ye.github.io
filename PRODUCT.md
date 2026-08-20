# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated and approved: a locally generated static HTML/CSS/JavaScript site, published from `main:/docs` through GitHub Pages. Markdown remains the editable source; the public site has no server, database, framework, analytics, login, comments, or subscription system.

## Users

The primary user is a reader who arrives through a shared link or search result with a specific interest in a niche research question. They may not know GitHub and should be able to understand the topic, navigate a long report, inspect sources, and download a supporting file without an account.

The publisher uses the site as a low-maintenance public shelf for research notes, company briefs, analyses, and other materials that may be useful to a small, self-selecting audience.

## Product Purpose

The site makes completed research artifacts publicly readable and downloadable without turning publication into an ongoing content business. Success means that each artifact has a stable URL, clear scope and data cutoff, legible evidence boundaries, source links, and enough wayfinding for a reader to decide whether it is useful.

## Positioning

This is a public research shelf rather than a social feed: finished artifacts are organized for retrieval and close reading, while popularity signals, posting cadence, engagement prompts, and audience growth mechanics are deliberately absent.

## Operating Context

The first release is a two-volume study of Japan’s “lost decades” and its implications for contemporary China. Volume 1 covers macroeconomics, finance, and historical stages; Volume 2 covers social structure and the emergence of a “stability-seeking society.” Readers move from the library homepage to a topic guide, then into either complete volume and its source links or data attachment.

## Capabilities and Constraints

- Public, static, search-engine-readable HTML at `https://huan-ye.github.io/`.
- Independent URLs for the library homepage, topic guide, and each volume.
- Long-form Markdown rendering with heading anchors, table of contents, responsive tables, reading progress, source links, and downloadable CSV data.
- Original research files remain unchanged; only sanitized public copies are published.
- Individualized financial, career, housing, marriage, and family advice is excluded.
- Worker, household, youth, firm, and individual behavior remains when it is an analytical subject.
- System fonts only; no external font or image dependency.
- No custom domain in the first release.

## Evidence on Hand

- `content/research/japan-lost-decades/volume-1.md`: sanitized macro-financial and historical volume with direct source links and a 2026-07-15 data cutoff.
- `content/research/japan-lost-decades/volume-2.md`: sanitized social-structure volume with direct source links and a 2026-07-26 data cutoff.
- `content/research/japan-lost-decades/data/japan-national-civil-service-applications.csv`: supporting civil-service application data.
- No testimonials, readership metrics, proprietary institutional datasets, logo, photography, or third-party brand endorsement exists; future work must not fabricate them.

## Product Principles

1. Retrieval over engagement: help the right reader find and use an artifact without manufacturing social activity.
2. Evidence before posture: surface dates, definitions, sources, counterevidence, and uncertainty.
3. Public copies, private process: publish complete artifacts without exposing personal context or internal research management files.
4. Stable snapshots: treat each release as a dated research object; corrections and later editions remain traceable.
5. Quiet maintenance: prefer static, durable mechanisms that do not require continuous operation.

## Accessibility & Inclusion

The site must support keyboard navigation, visible focus, semantic headings, reduced motion, responsive reading at a 390-pixel viewport, horizontal access to wide tables, and sufficient text contrast. Chinese is the primary interface and document language.
