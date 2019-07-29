import React from 'react';
import { Highlight } from './Highlight';

const bash = `
<pre class="language-bash"><code class="language-bash"><span class="token comment"># Highlight bash:</span>
npx install some-package-name
<span class="token function">cd</span> some-package-name
</code></pre>
`;

const javascript = `
<pre class="language-javascript"><code class="language-javascript"><span class="token comment">// Highlight JavaScript:</span>
import React from 'react'

const MyComponent = () => (
  &#x3C;div>My component renders all the things&#x3C;/div>
)

export default MyComponent
</code></pre>
`;

const typescript = `
<pre class="language-javascript"><code class="language-javascript"><span class="token comment">// Highlight Typescript:</span>
import React from 'react'

interface InterfaceMyComponentProps {
  isCool: boolean;
}

const MyComponent: React.SFC&#x3C;InterfaceMyComponentProps> = ({ isCool }) => (
  &#x3C;div>My component isCool: {isCool}&#x3C;/div>
)

export default MyComponent
</code></pre>
`;

const css = `
<pre class="language-css"><code class="language-css"><span class="token comment">/* Highlight CSS: */</span>
.someClass {
  position: relative;
}
</code></pre>
`;

const json = `
<pre class="language-json"><code class="language-json">{
  "name": "@yourorg/package",
  "version": "0.0.1",
  "description": "A sweet package",
  "repository": {
    "type": "git",
    "url": "https://github.com/yourorg/package.git"
  }
}
</code></pre>
`;

export default {
  title: 'Design System|Highlight',
  component: Highlight,
};

export const allLanguages = () => (
  <div>
    <Highlight>{bash}</Highlight>
    <Highlight>{javascript}</Highlight>
    <Highlight>{typescript}</Highlight>
    <Highlight>{css}</Highlight>
    <Highlight>{json}</Highlight>
  </div>
);

allLanguages.story = {
  name: 'all languages',
};
