/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';

const headerStyle = css`
  display: flex;
  flex-direction: row;
`;
export default function Menu({
  toggle,
  header,
  children,
}) {
  return (
    <ul>
      <div css={headerStyle}>
        {toggle && toggle()}
        {header && header()}
      </div>
      <ul>
        {children}
      </ul>
    </ul>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.func,
  toggle: PropTypes.func,
};

Menu.defaultTypes = {
  expanded: true,
};
