import React from 'react';
import PropTypes from 'prop-types';

const col = {
  '--initialbasis': 'calc(var(--width, 0) / var(--columns, 4) * 100%)',
  '--gap': 'calc((var(--columns) - var(--width)) * 1%)',
  flexBasis: 'calc(var(--initialbasis) - var(--gap))',
};

export default function Col({
  tag: Tag,
  width,
  extraCls,
  className,
  children,
}) {
  const colStyle = {
    '--width': width,
  };
  return (
    <Tag className={className} css={[col, colStyle, extraCls]}>
      {children}
    </Tag>
  );
}

Col.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  className: PropTypes.string,
  children: PropTypes.node,
  width: PropTypes.number,
  extraCls: PropTypes.object,
};

Col.defaultProps = {
  tag: 'div',
};
