<!-- ───────────────────────────────────────────────────────────── -->
<!-- ────────── Overview ────────── -->
# <span style="color:#ED1C24">Overview</span>

Our React codebase follows a **single, repeatable template** so every file feels familiar at a glance.  
Two pillars define the shape of a component:

1. **Import Order** – a strict, top-to-bottom taxonomy  
2. **Component Body** – a clear, linear flow from setup → render

---

## <span style="color:#ED1C24">1&nbsp;&nbsp;Import Order</span>

```tsx
// fundamental libraries     (e.g. React, useState, useEffect)
import React, { useState } from 'react';

// component libraries       (e.g. Material-UI, Radix UI)
import { Button, TextField } from '@mui/material';

// custom components         (local, first-party building blocks)
import Card from '@/components/Card';

// external libraries        (3rd-party helpers)
import dayjs from 'dayjs';

// utilities                 (pure functions, no side effects)
import { formatPrice } from '@/utils/format';

// types                      (shared & local TypeScript defs)
import type { Product } from '@/types';

// styles
import './ProductCard.css';
---

## <span style="color:#ED1C24">Component Anatomy</span>

Each component follows a strict top-to-bottom order to keep every file instantly scannable:

```tsx
// ╔═ Imports ══════════════════════════════════════════════════════════╗
import React from 'react';                     // fundamental libraries
import { Button } from '@mui/material';        // component libraries
import Card from '@/components/Card';          // custom components
import dayjs from 'dayjs';                     // external libraries

import { parsePrice } from '@/utils/format';   // utilities
import type { Product } from '@/types';        // types

import './styles.css';                         // styles
// ╚══════════════════════════════════════════════════════════════════╝

// ╔═ Init ════════════════════════════════════════════════════════════╗
const mutated = {};                            // mutable refs / helpers

// ╠═ Hooks ═══════════════════════════════════════════════════════════╣
const { register, handleSubmit } = useFormZX();

// ╠═ State ═══════════════════════════════════════════════════════════╣
const [isLoading, setLoading] = useState(false);

// ╠═ Derived data & helpers ══════════════════════════════════════════╣
// …

// ╠═ Side effects ═══════════════════════════════════════════════════╣
// …

// ╠═ Render ═════════════════════════════════════════════════════════╣
if (isLoading) return <Spinner />;

return (
  <Card as="form" onSubmit={handleSubmit(onSubmit)}>
    …
  </Card>
);
// ╚══════════════════════════════════════════════════════════════════╝
