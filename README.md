# react-sticky

> React component for sticky DOM elements.

[![NPM](https://img.shields.io/npm/v/react-sticky-scroll.svg)](https://www.npmjs.com/package/react-sticky-scroll)

## Install

```bash
npm install --save react-sticky-scroll
```

## Usage

Wrap the component you want to be sticky.

```tsx
import React from "react";

import { Sticky } from "react-sticky-scroll";

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
