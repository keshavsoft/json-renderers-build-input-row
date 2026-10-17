# json-renderers-build-input-row

Focused input row specification builder for `json-renderers`, compiling UI skeletons and configurations into JSON-to-DOM specs.

## Flavours

1. **`inputOnly`**: Standalone `<input>` element specification.
2. **`inputWithLabel`**: Inline flex row with `<label>` and `<input>` on the same line.
3. **`inputWithLabelButton`**: Inline flex row with `<label>`, `<input>`, and action `<button>` on the same line.

## Installation

```bash
npm install json-renderers-build-input-row
```

## Usage

```javascript
import render, { inputOnly, inputWithLabel, inputWithLabelButton } from "json-renderers-build-input-row";

// Flavour 1: Input Only
const spec1 = render({
  type: "inputOnly",
  options: {
    placeholder: "Search...",
    id: "searchInputId"
  }
});

// Flavour 2: Input with Label
const spec2 = render({
  type: "inputWithLabel",
  options: {
    label: "Search:",
    placeholder: "Search items...",
    id: "searchInputId"
  }
});

// Flavour 3: Input with Label & Button
const spec3 = render({
  type: "inputWithLabelButton",
  options: {
    label: "Search:",
    placeholder: "Search items...",
    id: "searchInputId",
    buttonText: "Find",
    buttonClass: "btn btn-primary"
  }
});
```
