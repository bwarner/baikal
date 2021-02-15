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
  tag: Tag,
  columns = 4,
  width,
  className,
  children,
}) {
  const rowStyle = {
    '--columns': columns,
    '--width': width,
  };
  return (
    <Tag className={className} css={[row, rowStyle]}>
      {children}
    </Tag>
  );
}

Row.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  columns: PropTypes.number,
  width: PropTypes.number,
  children: PropTypes.node,
  className: PropTypes.string,
};

Row.defaultProps = {
  tag: 'div',
};
