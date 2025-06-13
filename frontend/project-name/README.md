<!-- README.md -->
<!-- Purpose: Minimalistic & professional formatting for copy-paste -->

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

---

## Import Order

Imports are organized into a specific order:

```tsx
// 1. Core React
import React, { useState, useEffect } from 'react';

// 2. UI Libraries
import { Button, TextField } from '@mui/material';

// 3. Custom Components
import Card from '@/components/Card';

// 4. External Libraries
import dayjs from 'dayjs';

// 5. Utilities
import { formatPrice } from '@/utils/format';

// 6. Types
import type { Product } from '@/types';

// 7. Styles
import './ProductCard.css';

// ╔═══════════════════╗
// ║      Imports      ║
// ╚═══════════════════╝
import React from 'react';
// ... (other imports following the order above)
import './styles.css';

// ╔═══════════════════╗
// ║   Component Logic ║
// ╚═══════════════════╝

// Props & Default Props (if any)
// interface MyComponentProps { /* ... */ }
// const defaultProps = { /* ... */ };

// Mutable refs / helpers (use sparingly)
// const mutableRef = useRef();

// Hooks (e.g., useForm, useContext)
// const { register, handleSubmit } = useForm();

// State (useState, useReducer)
// const [isLoading, setLoading] = useState(false);

// Derived Data & Memoized Values (useMemo, useCallback)
// const formattedPrice = useMemo(() => formatPrice(price), [price]);

// Side Effects (useEffect)
// useEffect(() => { /* ... */ }, [dependencies]);

// Event Handlers & Other Functions
// const handleClick = () => { /* ... */ };

// ╔═══════════════════╗
// ║       Render      ║
// ╚═══════════════════╝
// if (isLoading) return <Spinner />;

// return (
//   <Card>
//     {/* ... JSX ... */}
//   </Card>
// );

// export default


