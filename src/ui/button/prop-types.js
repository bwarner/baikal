import PropTypes from 'prop-types';

export const propTypes = {
  styles: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  buttonType: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'quaternary']),
  rounded: PropTypes.bool,
  outline: PropTypes.bool,
};

export const defaultProps = {
  type: 'button',
  buttonType: 'primary',
  outline: false,
  rounded: false,
};
