import { injectGlobal } from 'emotion';

function ThemeRoot({
  fontFamily,
  border,
  borderColor,
  color,
  baseSize,
  typeScale,
  input,
}) {
  // eslint-disable-next-line no-unused-expressions
  injectGlobal`
  :root {
    --base-size: ${baseSize};
    --type-scale: ${typeScale};
    --fv-border: ${border};
    --fv-border-color: ${borderColor};
    --base-color: ${color};
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
    --fv-input-background-color: ${input.base.backgroundColor};
    --fv-input-border: ${input.base.border};
    --fv-input-border-radius: ${input.base.borderRadius};
  }
  * { box-sizing: border-box; }
  h1: { font-size: --var(h1); }
  h2: { font-size: --var(h2); }
  h3: { font-size: --var(h3); }
  `;
}
export default ThemeRoot;
