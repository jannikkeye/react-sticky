# react-sticky-element

> React component for sticky DOM elements.

[![NPM](https://img.shields.io/npm/v/react-sticky-element.svg)](https://www.npmjs.com/package/react-sticky-element)

## Install

```bash
npm install --save react-sticky-element
```

## Usage

Wrap the component you want to be sticky.

```tsx
import React from "react";

import { Sticky } from "react-sticky-element";

const StickyNavBar = () => {
  return (
    <Sticky>
      <nav>
        <ul>
          <li>Nav A</li>
          <li>Nav B</li>
          <li>Nav C</li>
          <li>Nav D</li>
        </ul>
      </nav>
    </Sticky>
  );
};
```

## License

MIT © [jannikkeye](https://github.com/jannikkeye)
