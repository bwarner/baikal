/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { memo } from 'react';
import PropTypes from 'prop-types';

const defaultFontFamily = 'icomoon';

const Glyph = memo(function Glyph({ className, code, fontFamily = defaultFontFamily }) {
  return (
    <span
      className={className}
      css={css`
      font-family: ${fontFamily} !important;
      speak: never;
      font-style: normal;
      font-weight: normal;
      font-variant: normal;
      text-transform: none;
      line-height: 1;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;         
  }`}
      dangerouslySetInnerHTML={{ __html: `&#${code}` }}
    />
  );
});

Glyph.propTypes = {
  code: PropTypes.number,
  fontFamily: PropTypes.string,
  className: PropTypes.string,
};

export default Glyph;
