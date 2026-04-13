# Date and Time Utility Functions

### Date & Time ISO Format Conversion and Rendering Utilities

## Pain Points

In real-world projects, date and time storage, transmission, and display often use different formats, resulting in repetitive and error-prone conversion code scattered throughout:

- Backend APIs typically return or require ISO date strings (e.g., `"2025-12-19"`) and time strings (e.g., `"14:30"`)
- Frontend display requires localized date formats (e.g., "December 19, 2025" or "2025年12月19日") and time formats (e.g., "14:30")
- Frequent variations: year ranges, year-only, year-month only, and time parsing
- Direct string manipulation often leads to missing zero-padding, missing type checks, NaN propagation, and inconsistent formatting
- Different components (DatePicker, TimePicker, Timeline, Card metadata) have inconsistent date/time rendering rules, resulting in uneven visual experience

Implementing parsing and formatting logic independently in each component or page leads to code redundancy and introduces formatting errors or internationalization barriers.

## Design Goals

This set of utility functions aims to **unify all date/time conversion logic between ISO/standard formats and display formats**, providing a concise, secure, and semantically clear date/time handling solution. Components and business logic should only care about "using dates and times" without worrying about "how to format and parse."

## Core Utility Functions

| Function                | Responsibility                                      | Return Value / Features                  |
|-------------------------|-----------------------------------------------------|------------------------------------------|
| **toISOYear**           | Generates ISO string for the first day of a year    | `"YYYY-01-01"`                           |
| **toISOYMD**            | Generates a full ISO date string from year/month/day| `"YYYY-MM-DD"`, auto zero-padding        |
| **isoToYMD**            | Parses an ISO date string into year/month/day object| `{ year, month, day }`, returns NaN for invalid input |
| **renderDate**          | Renders full Chinese date, optionally month only    | "2025年12月19日" or "2025年12月"        |
| **renderYear**          | Renders year only                                   | "2025年"                                 |
| **renderYearRange**     | Renders a year range                                | "2025年 至 2030年"                       |
| **toTimeStr**           | Generates standard time string from hour/minute     | `"HH:MM"`, auto zero-padding             |
| **parseTimeStr**        | Parses a time string into hour/minute object        | `{ h, m }`, auto converts to numbers     |

## Design Highlights

- **Strict Standard Format**: Dates output as standard `"YYYY-MM-DD"`, times as `"HH:MM"`, facilitating backend interaction, sorting, and comparison.
- **Uniform Zero-Padding**: `padStart` ensures two-digit display for year/month/day/hour/minute, eliminating non-standard formats like "2025-1-1" or "9:5".
- **Safe Parsing**: `isoToYMD` and `parseTimeStr` return explicit NaN or a checkable structure for invalid inputs, allowing upstream fallback handling.
- **Pure Functions, No Side Effects**: No dependency on Vue or DOM; safe to call in any environment.
- **Semantic Chinese Display**: Dates use "年" (year), "月" (month), "日" (day) for improved readability in Chinese contexts.
- **High Reusability**: Covers all common display and parsing needs from single dates/times to ranges.

## Typical Usage

```typescript
import { 
  toISOYMD, 
  isoToYMD, 
  renderDate, 
  renderYearRange,
  toTimeStr,
  parseTimeStr 
} from '@/utils/datetime';

// Date
const todayISO = toISOYMD(2025, 12, 19); // "2025-12-19"
const { year, month, day } = isoToYMD(todayISO);
renderDate(todayISO);              // "2025年12月19日"
renderDate(todayISO, true);        // "2025年12月"
renderYearRange('2023-01-01', '2025-12-31'); // "2023年 至 2025年"

// Time
const timeStr = toTimeStr(9, 5);    // "09:05"
const { h, m } = parseTimeStr('14:30'); // { h: 14, m: 30 }
```

## Design Value
This set of utility functions serves as the invisible guardian of time expression consistency within the component library:

Completely eliminates scattered date/time concatenation and parsing code

Ensures globally uniform date/time display formats, avoiding slash/hyphen inconsistencies and zero-padding discrepancies

Reserves space for future i18n switching (simply replace the render series functions)

Seamlessly collaborates with DatePicker, TimePicker, Timeline, Form, and other components without extra adaptation

Significantly improves code readability: renderDate(iso) + ' ' + toTimeStr(h, m) is far more semantic than manual concatenation