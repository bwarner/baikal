/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import * as icons from './icons';

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
      {Object.keys(icons).map((key, index, oj) => {
        const icon = icons[key];
        debugger;
        console.log(`key: ${key} icons[${key}]: ${typeof icon}`);
        return <div key={key}>{icons[key]()}</div>;
      })}
    </div>
  </>
);
