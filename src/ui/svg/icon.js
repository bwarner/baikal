/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { memo } from 'react';
import PropTypes from 'prop-types';

const defaultFontFamily = 'icomoon';

const Icon = memo(function Icon({
  className,
  style,
  code,
  fontFamily = defaultFontFamily,
}) {
  return (
    <span
      className={className}
      style={style}
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

Icon.propTypes = {
  code: PropTypes.number,
  fontFamily: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Icon;
