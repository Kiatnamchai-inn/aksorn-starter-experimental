<!-- README.md -->

# React Component Structure
> This document outlines the standardized structure for React components to ensure consistency and readability across the codebase.

---

## Table of Contents
1. [Guiding Principles](#guiding-principles)  
2. [Import Order](#import-order)  
3. [Component Body](#component-body)  

---

## Guiding Principles

| Principle&nbsp; | Why it matters |
| --------------- | -------------- |
| **Fixed import order** | Reduces cognitive load—similar things are always in the same place. |
| **Linear component body** | Lets you read top-to-bottom without hunting for logic. |
| **Reduce merge conflicts** | Reduce and flatten merge conflicts. |

---

## Import Order

Imports are organized into a specific order:

```tsx
// 1. Core Library
import React, { useState, useEffect } from 'react';
import Link from 'next/link'

// 2. UI Libraries
import { Button, Card  } from '@antd';

// 3. Custom Components
import Card from '@components/Card';

// 4. External Libraries
import dayjs from 'dayjs';

// 5. Utilities
import { formatPrice } from '@utils/format';

// 6. Types
import type { Product } from '@types';

// 7. Styles
import './styles.css';
```

## Component Logic

```tsx
// ╔═══════════════════╗
// ║   Component Logic ║
// ╚═══════════════════╝

// Props & Default Props (if any)
type MyComponentProps = {};
export default function MyComponent({ firstProps, secondProps, ...})

// Init (in case you need to mutate the props before using in the react component)
const mutatedFirstProps = transform(firstProps)

// Hooks
const router = useRouter();
const counterStore = useCounterStore();
const { register, handleSubmit } = useForm();

// State
const [isLoading, setLoading] = useState(false);

// Derived Data & Memoized Values (useMemo, useCallback)
const formattedPrice = useMemo(() => formatPrice(price), [price]);

// Event Handlers & Other Functions
const handleClick = () => {};

// Side Effects (Effects, Events)
// Effects should be used as escape hatch only
useEffect(() => { /* ... */ }, [dependencies]);

// ╔═══════════════════╗
// ║       Render      ║
// ╚═══════════════════╝
// conditional rendering logic first
if (isLoading) return <Spinner />;

// actual rendering logic with jsx
return (
  <Card>
    {/* ... JSX ... */}
  </Card>
 );

export default
```