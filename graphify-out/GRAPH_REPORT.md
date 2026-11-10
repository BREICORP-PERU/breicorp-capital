# Graph Report - breicorp-capital  (2026-11-10)

## Corpus Check
- 33 files · ~11,866 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 3 file(s) not represented in the graph (top: (none) 1, .ico 1, .css 1)

## Summary
- 142 nodes · 342 edges · 9 communities (8 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.95)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `1a5876d1`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- package.json
- react
- compilerOptions
- index.ts
- FaqSection.tsx
- InvestorForm.tsx
- siteConfig.ts
- BREICORP CAPITAL
- AGENTS.md

## God Nodes (most connected - your core abstractions)
1. `whatsappHref()` - 24 edges
2. `react` - 23 edges
3. `lucide-react` - 18 edges
4. `next` - 18 edges
5. `SectionHeading()` - 17 edges
6. `compilerOptions` - 16 edges
7. `siteConfig` - 15 edges
8. `Button()` - 13 edges
9. `WhatsAppIcon()` - 13 edges
10. `HomePage()` - 10 edges

## Surprising Connections (you probably didn't know these)
- `Captación comercial` --references--> `whatsappHref()`  [INFERRED]
  README.md → src/config/siteConfig.ts
- `InvestorForm()` --calls--> `Button()`  [EXTRACTED]
  src/app/inversionistas/InvestorForm.tsx → src/components/ui/Button.tsx
- `InvestorForm()` --calls--> `WhatsAppIcon()`  [EXTRACTED]
  src/app/inversionistas/InvestorForm.tsx → src/components/ui/WhatsAppIcon.tsx
- `InvestorForm()` --calls--> `whatsappHref()`  [EXTRACTED]
  src/app/inversionistas/InvestorForm.tsx → src/config/siteConfig.ts
- `InversionistasPage()` --calls--> `InvestorForm()`  [EXTRACTED]
  src/app/inversionistas/page.tsx → src/app/inversionistas/InvestorForm.tsx

## Import Cycles
- None detected.

## Communities (9 total, 1 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.08
Nodes (32): eslintConfig, dependencies, lucide-react@^1.71.0, next@16.4.6, react@19.3.0, react-dom@19.3.0, devDependencies, eslint@^9 (+24 more)

### Community 1 - "react"
Cohesion: 0.20
Nodes (22): lucide-react, react, InversionistasPage(), metadata, HomePage(), ContactFormSection(), CreditForm, initialForm (+14 more)

### Community 2 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 3 - "index.ts"
Cohesion: 0.50
Nodes (3): FaqItem, NavItem, ProcessStep

### Community 4 - "FaqSection.tsx"
Cohesion: 0.60
Nodes (3): Accordion(), AccordionItemData, AccordionProps

### Community 5 - "InvestorForm.tsx"
Cohesion: 0.50
Nodes (4): initialForm, InvestorForm(), InvestorFormData, investorWhatsAppMessage()

### Community 6 - "siteConfig.ts"
Cohesion: 0.12
Nodes (17): nextConfig, next, geistMono, geistSans, metadata, RootLayout(), viewport, metadata (+9 more)

### Community 10 - "BREICORP CAPITAL"
Cohesion: 0.40
Nodes (4): BREICORP CAPITAL, Captación comercial, Desarrollo, Verificación

## Knowledge Gaps
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `siteConfig.ts` to `package.json`, `react`, `InvestorForm.tsx`?**
  _High betweenness centrality (0.150) - this node is a cross-community bridge._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.0766488413547237 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `package.json`, `FaqSection.tsx`, `InvestorForm.tsx`, `siteConfig.ts`?**
  _High betweenness centrality (0.142) - this node is a cross-community bridge._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Why does `whatsappHref()` connect `react` to `BREICORP CAPITAL`, `FaqSection.tsx`, `InvestorForm.tsx`, `siteConfig.ts`?**
  _High betweenness centrality (0.088) - this node is a cross-community bridge._
- **Should `siteConfig.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.12477718360071301 - nodes in this community are weakly interconnected._