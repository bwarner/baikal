/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

const row = {
  margin: 0,
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-between',
  '--columns': 4,
};

export default function Row({
  tag: Tag, columns = 4, width, extraCls, children,
}) {
  const rowStyle = {
    '--column': columns,
    '--width': width,
  };
  return <Tag css={[row, rowStyle, extraCls]}>{children}</Tag>;
}

Row.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  columns: PropTypes.number.isRequired,
  width: PropTypes.number,
  children: PropTypes.node,
  extraCls: PropTypes.object,
};

Row.defaultProps = {
  tag: 'div',
};
