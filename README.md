# Storybook design system

> Storybook design system

[![NPM](https://img.shields.io/npm/v/@storybook/design-system.svg)](https://www.npmjs.com/package/@storybook/design-system) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @storybook/design-system
```

## Usage

```jsx
import React, { Component } from 'react';

import MyComponent from '@storybook/design-system';

class Example extends Component {
  render() {
    return <MyComponent />;
  }
}
```

## Development Scripts

#### `yarn release`

> Bump the version

> Push a release to GitHub and npm

> Push a changelog to GitHub

_Notes:_

- Requires authentication with [`npm adduser`](https://docs.npmjs.com/cli/adduser.html)
- [`auto`](https://github.com/intuit/auto) is used to generate a changelog and push it to GitHub. In order for this to work correctly, **an environment variable called `GH_TOKEN` is needed** that references a [GitHub personal access token](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line) with the appropriate permissions to update the repo.

## License

MIT © [shilman](https://github.com/shilman)
