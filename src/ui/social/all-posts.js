/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { Facebook, Twitter, Instagram } from '../svg/images';

const iconBox = css`
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
  align-items: center;
  height: 40px;
`;

const textContainer = css`
  display: flex;
  justify-content: center;
  flex-flow: row nowrap;
  align-items: center;
  height: 40px;
  border-top: var(--fv-border);
`;

const textBox = css`
  text-align: center;
  align-items: center;
`;

const networks = {
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
};

export default function AllPosts({ names }) {
  const width = 1 / names.length;
  return (
    <div
      css={css`
        border: var(--fv-border);
        min-width: 230px;
      `}
    >
      <div css={iconBox}>
        {names
          .map((name) => networks[name])
          .map((iconPath, index) => (
            <div
              key={names[index]}
              css={css`
              border-right: var(--fv-border);
              flex-basis: ${width}%;
              flex-grow: 1;
              height: inherit;
              background-image: url(${iconPath});
              background-repeat: no-repeat;
              background-attachement: center;
              background-position: center;
              background-size: 12px 12px;
              &:last-child {
                border-right: none;
              }
              )
            `}
            />
          ))}
      </div>
      <div css={textContainer}>
        <div css={textBox}>ALL POSTS</div>
      </div>
    </div>
  );
}

AllPosts.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string),
};
