<!-- --------------------------------------------------------------
  aksorn-starter-experimental
  -------------------------------------------------------------- -->

<p align="center">
  <img src="https://img.shields.io/badge/Aksorn Starter-ED1C24?style=for-the-badge&labelColor=000000&logo=next.js&logoColor=white" alt="Aksorn Starter badge">
</p>

> **A unified, battle-tested Next.js project template for Aksorn.**  
> Clone it, fork it, or copy-paste it—either way, you start every project with the same clean architecture and sensible defaults.

---

## ✨ Highlights

- **Consistent architecture** – shared conventions, barrel files, feature modules.
- **Zero-to-prod ready** – ESLint, Prettier, TypeScript, testing & CI hooks included.
- **Minimal surface area** – only what you need to ship the first commit.

---

## 📂 Project structure (abridged)

```text
frontend/
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── public/
│   ├── logo.svg
│   └── images/
│       └── default-profile.webp
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   └── (protected)/
│   │       └── project/
│   │           └── create/
│   │               └── page.tsx
│   ├── components/
│   │   ├── common/
│   │   │   └── button/
│   │   │       ├── Button.tsx
│   │   │       └── BackButton.tsx
│   │   └── layout/
│   │       └── header/
│   │           ├── UserBadge.tsx
│   │           └── index.ts
│   ├── configs/
│   │   ├── index.ts
│   │   └── navigation/
│   │       └── nav-bar-items.tsx
│   ├── hooks/
│   │   └── useBeforeUnload.ts
│   ├── services/
│   │   └── project.service.ts
│   └── utils/
│       └── formatter/
│           └── enum.ts
└── test/
    └── **mock**/
```
