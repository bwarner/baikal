/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import * as fonts from './fonts';

import PageDecorator from '../../decorators/page-decorator';

export default {
  title: 'Icons',
  decorators: [PageDecorator],
};

export const Glyphs = () => (
  <>
    <h1> Font Icons </h1>
    <div
      css={css`
        display: grid;
        grid-gap: 10px;
        font-size: 32px;
        grid-template-columns: 42px 42px 42px 42px 42px 42px 42px 42px 42px;
        grid-templage-colu: 50px;
      `}
    >
      {Object.keys(fonts).map((key) => (
        <div key={key}>{fonts[key]()}</div>
      ))}
    </div>
  </>
);
