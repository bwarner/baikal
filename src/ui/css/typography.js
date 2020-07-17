import { injectGlobal } from 'emotion';

function Typography({ fontFamily, baseSize, typeScale }) {
  // eslint-disable-next-line no-unused-expressions
  injectGlobal`
  :root {
    --base-size: ${baseSize};
    --type-scale: ${typeScale};
    --h3: calc(var(--base-size) * var(--type-scale));
    --h2: calc(var(--h1) * var(--type-scale));
    --h1: calc(var(--h2) * var(--type-scale));
    --text-sm: calc(var(--h2) * var(--type-scale));
    --font-family: "${fontFamily}";
    --button-font-size: var(--text-sm);
    --button-line-height: 1.5;
    --button-border-color: transparent;
    --button-border-radius: 0;
    --button-hover-opacity: 0.7;
  }
  `;
}
export default Typography;
