/* eslint-disable react/jsx-props-no-spreading */
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
// import { useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  flex,
  flexWrap,
  borderRadius,
  flexDirectionRow,
  flexDirectionColumn,
  border,
  margin,
  borderColor,
  color,
  padding,
} from '../css/styles';

const tagStyle = {
  ...border('1px', 'solid'),
  ...margin('3px'),
  ...borderRadius('2px'),
  ...color('var(--fv-grey-light)'),
  ...borderColor('var(--fv-border-color)'),
  ...padding('2px'),
};

console.log('tagStyle ', tagStyle);

export function Tags({ tags }) {
  return (
    <div css={[flex, flexDirectionColumn, borderRadius(2)]}>
      <div>Tags</div>
      <div css={[flex, flexDirectionRow, flexWrap('wrap'), borderRadius(2)]}>
        {tags.map((item) => (
          <div css={tagStyle} key={item}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
