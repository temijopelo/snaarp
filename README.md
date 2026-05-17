# Snaarp Dashboard - Task Management & Analytics

A modern, interactive dashboard built with **Next.js 16**, **React DnD**, and **Tailwind CSS**. Features drag-and-drop reordering, collapsible sections, responsive design, and real-time data visualization.

---

## 🚀 Features

- ✅ **Drag-and-Drop Reordering**: Reorganize dashboard sections in any order
- ✅ **Collapsible Sections**: Toggle section visibility using arrow icons
- ✅ **Responsive Design**: Mobile, tablet, and desktop optimized
- ✅ **Fixed Navbar & Sidebar**: Always-accessible navigation
- ✅ **Real-Time Charts**: Interactive Recharts visualizations (area charts, pie charts, line charts)
- ✅ **Card-Based Layout**: Organized card components with metrics and trends
- ✅ **Custom UI Components**: Reusable Card, Button, and utility components
- ✅ **Type-Safe**: Full TypeScript support

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fixed sidebar/navbar
│   ├── page.tsx            # Home page with DnD provider & section wrapper
│   ├── globals.css         # Global styles
│
├── components/
│   ├── common/
│   │   ├── Navbar.tsx      # Fixed top navigation (right of sidebar)
│   │   └── Sidebar.tsx     # Fixed left sidebar menu
│   │
│   ├── dashboard/
│   │   └── SectionItem.tsx # Draggable wrapper for sections (React DnD)
│   │
│   ├── sections/
│   │   ├── CloudNetwork.tsx        # Cloud metrics + area charts + pie charts
│   │   ├── DeviceMgtDash.tsx       # Device management metrics
│   │   ├── ProductivityReport.tsx  # Productivity analytics
│   │   └── [Other sections]        # ActiveUser, EmailChart, etc.
│   │
│   ├── ui/
│   │   ├── Card.tsx        # Reusable stat card with area chart
│   │   ├── Cardfooter.tsx  # Card footer component
│   │   ├── PieCard.tsx     # Pie chart component
│   │
│   └── charts/
│       ├── FileSharingChart.tsx
│       └── [Chart components]
│
├── constant/
│   └── index.tsx           # Mock data for all sections
│
├── hooks/
│   └── [Custom hooks]
│
└── lib/
    └── [Utilities]
```

---

## 🛠️ Tech Stack

| Technology             | Purpose                                    |
| ---------------------- | ------------------------------------------ |
| **Next.js 16.2.6**     | React framework with SSR support           |
| **React 19.2.4**       | UI library with hooks                      |
| **React DnD ^16.0.1**  | Drag-and-drop library                      |
| **Recharts ^3.8.1**    | Data visualization library                 |
| **Tailwind CSS ^4**    | Utility-first CSS framework                |
| **Ant Design ^6.4.2**  | UI component library (Button, Modal, etc.) |
| **React Icons ^5.6.0** | Icon library (Lucide, FontAwesome, etc.)   |
| **TypeScript ^5**      | Type safety                                |

---

## 🎯 Key Implementations

### 1. **Drag-and-Drop Section Reordering**

- **File**: `src/components/dashboard/SectionItem.tsx`
- **How it works**:
  - Uses `react-dnd` with `HTML5Backend`
  - Each section (Cloud Network, Device Management, Productivity Report) is wrapped in `SectionItem`
  - Hover over a section to see drag indicator; drag to reorder
  - State managed in `page.tsx` using `moveSection` callback

```tsx
// Example: Sections array state in page.tsx
const [sections, setSections] = useState(sectionsInitial);
const moveSection = useCallback((from: number, to: number) => {
  setSections((prev) => {
    const copy = [...prev];
    const [moved] = copy.splice(from, 1);
    copy.splice(to, 0, moved);
    return copy;
  });
}, []);
```

### 2. **Collapsible Sections with Arrow Toggle**

- **Files**:
  - `src/components/sections/CloudNetwork.tsx`
  - `src/components/sections/DeviceMgtDash.tsx`
  - `src/components/sections/ProductivityReport.tsx`
- **How it works**:
  - Each section header has an `IoIosArrowDown` icon that acts as toggle
  - Arrow rotates 180° when collapsed
  - Content is conditionally rendered based on `collapsed` state
  - No custom UI added—uses your existing section headers

```tsx
const [collapsed, setCollapsed] = useState(false);

<span
  role="button"
  className="cursor-pointer"
  onClick={() => setCollapsed((prev) => !prev)}
>
  <IoIosArrowDown className={collapsed ? "rotate-180" : ""} />
</span>;

{
  !collapsed && <>{/* Section content */}</>;
}
```

### 3. **Fixed Layout (Navbar + Sidebar + Scrollable Content)**

- **Files**:
  - `src/app/layout.tsx` (root layout)
  - `src/components/common/Navbar.tsx` (fixed at top-right)
  - `src/components/common/Sidebar.tsx` (fixed at left)
- **How it works**:
  - Sidebar: `fixed left-0 top-0 w-64 h-screen`
  - Navbar: `fixed top-0 left-64 right-0 h-14`
  - Main content: `ml-64 pt-14 overflow-auto` (margins account for fixed elements)

### 4. **Dashboard Sections**

Each section contains collapsible content with charts and metrics:

#### **Cloud Network Section**

- User metrics (count, trend, comparison)
- Group statistics
- Upload metrics
- Bounce rate tracking
- **Charts**: Area charts for trends + Pie chart for distribution
- Optional: File sharing chart + Active users table

#### **Device Management Dashboard**

- Device count, users, emails metrics
- Device status (plugged/unplugged, active/offline)
- Metrics with trend indicators
- Card footer showing additional details

#### **Productivity Report**

- Productivity hours, tasks completed, efficiency scores
- Email dashboard with stats
- Online users table
- Activity timeline

### 5. **Responsive Card Component**

- **File**: `src/components/ui/Card.tsx`
- **Features**:
  - Stat number + percentage change
  - Trend indicator (up/down arrow + color)
  - Small area chart with gradient
  - Responsive grid layout (1 col mobile, 2-4 cols desktop)

### 6. **Error Handling & Type Safety**

- Fixed TypeScript errors:
  - Made `Cardfooter` data prop optional (`data?: any[]`)
  - Added null check before rendering
  - Added unique `key` props to all list items
- All components are typed with interfaces

---

## 📱 Responsive Design

### Breakpoints (Tailwind)

- **Mobile**: 0-640px (`sm`)
- **Tablet**: 641-1024px (`md`)
- **Desktop**: 1025px+ (`lg`, `xl`)

### Responsive Classes Applied

#### **Layout**

- Root layout: `h-full w-full` (full viewport)
- Sections: `ml-64` (left margin for fixed sidebar)
- Content: `pt-14` (top padding for fixed navbar)
- Overflow: `overflow-auto h-dvh` (scrollable with device height)

#### **Card Grids**

```tsx
// Mobile: 1 col → Tablet: 2 cols → Desktop: 3-4 cols
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
```

#### **Sidebar**

- Always visible on desktop
- Toggle on mobile (implementation ready)
- Width: 256px (w-64)

#### **Navbar**

- Responsive padding: `p-3`
- Flex items center: search bar + notifications
- Hidden/visible buttons on mobile

#### **Charts**

- `ResponsiveContainer` from Recharts handles width auto-fit
- Fixed heights: `h-24` for sparkline charts, `h-300` for full charts
- Tooltips adapt to screen size

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, pnpm, or Bun package manager

### Installation

```bash
# Clone or navigate to project
cd snaarp-task

# Install dependencies
npm install

# Or with your preferred package manager
yarn install
pnpm install
bun install
```

### Running the Dev Server

```bash
npm run dev
# Output: ▲ Next.js 16.2.6
#         - Ready in 1.2s
#         - ▶ http://localhost:3000
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

### Building for Production

```bash
npm run build
npm run start
```

---

## 🎨 Customization

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Add collapse state and arrow toggle (see CloudNetwork.tsx)
3. Import in `src/app/page.tsx`
4. Add to `sectionsInitial` array

### Modifying Mock Data

- Edit `src/constant/index.tsx`
- Update `cloudNetworkData`, `deviceMgtData`, `productivityData`, etc.
- Charts will auto-update

### Changing Colors/Styles

- Tailwind config: `tailwind.config.js`
- Global styles: `src/app/globals.css`
- Component-specific: Check inline `className` attributes

---

## 🐛 Known Issues & Warnings

### Browser Console Warnings (Safe to ignore for now)

- **Chart width/height**: Some chart containers report negative dimensions during initial render (Recharts limitation)
- **Hydration mismatch**: Minor SSR/client diff on first load (Next.js dev mode warning)
- **LCP image**: `/map.png` marked as above-the-fold (add `loading="eager"` if needed)

### To Fix

- These will resolve with production build or by adding explicit height constraints

---

## 📦 Dependencies Summary

```json
{
  "dependencies": {
    "antd": "^6.4.2",
    "next": "16.2.6",
    "react": "19.2.4",
    "react-dnd": "^16.0.1",
    "react-dnd-html5-backend": "^16.0.1",
    "react-icons": "^5.6.0",
    "recharts": "^3.8.1"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

---

## 📖 Documentation

### React DnD Docs

- [React DnD Guide](https://react-dnd.github.io/react-dnd)
- Dragging sections uses `useDrag` and `useDrop` hooks

### Recharts Docs

- [Recharts API](https://recharts.org)
- Responsive charts, tooltips, and animations built-in

### Tailwind CSS

- [Tailwind Docs](https://tailwindcss.com)
- Responsive prefix system: `md:`, `lg:`, etc.

---

## 💡 Tips & Best Practices

1. **Responsive Check**: Open DevTools (F12) → Device Toolbar (Ctrl+Shift+M) → Test all breakpoints
2. **Drag-and-Drop Test**: Drag sections on desktop to reorder; check mobile compatibility
3. **Collapse/Expand**: Click arrow icons to toggle section visibility
4. **Dark Mode**: Not implemented yet; can be added via Tailwind config
5. **Performance**: Use React DevTools profiler to check component renders

---

## 🤝 Contributing

Feel free to fork and submit PRs for improvements:

- Add new chart types
- Implement dark mode
- Optimize bundle size
- Improve accessibility (a11y)

---

## 📄 License

This project is part of the **Snaarp Task** assignment.

---

## 📞 Support

For issues or questions:

1. Check browser console for error messages
2. Verify all dependencies are installed (`npm install`)
3. Restart dev server if HMR fails (`npm run dev`)

---

**Last Updated**: May 17, 2026  
**Version**: 1.0.0  
**Status**: Development ✅
