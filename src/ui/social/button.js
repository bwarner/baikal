/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import TwitterIcon from '../svg/icons/twitter';
import FacebookIcon from '../svg/icons/facebook';
import PinterestIcon from '../svg/icons/pinterest';
import InstagramIcon from '../svg/icons/instagram';

const networks = {
  facebook: {
    icon: FacebookIcon,
    title: 'Facebook',
    styles: {
      color: 'white',
      backgroundColor: '#225B99',
    },
  },
  instagram: {
    icon: InstagramIcon,
    title: 'Instagram',
    styles: { backgroundColor: 'black' },
  },
  twitter: {
    icon: TwitterIcon,
    title: 'Twitter',
    styles: { backgroundColor: '#00ADF2' },
  },
  pinterest: {
    icon: PinterestIcon,
    title: 'Pinterest',
    styles: { backgroundColor: '#DA4E35' },
  },
};

const cssOutlined = {
  color: 'var(--base-color)',
  backgroundColor: 'transparent',
  border: 'var(--fv-border)',
};

const propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['lg', 'md', 'sm']),
  rounded: PropTypes.bool,
  outline: PropTypes.bool,
};

const defaultProps = {
  rounded: false,
  outline: false,
  size: 'lg',
};

export function SocialButton({
  className, network, rounded, outline, size,
}) {
  const sizeMapping = {
    lg: {
      textTransform: 'uppercase',
      width: 230,
      height: 35,
      margin: 5,
      border: 'none',
      color: 'white',
      '& > .icon': {
        paddingRight: 12,
      },
    },
    md: {
      textTransform: 'uppercase',
      width: 98,
      height: 25,
      margin: 5,
      fontSize: 10,
      border: 'none',
      color: 'white',
      '& > .icon': {
        paddingRight: 10,
      },
    },
    sm: {
      width: 230,
      height: 35,
      paddingRight: 8,
    },
  };

  const base = sizeMapping[size];

  const cssRounded = {
    borderRadius: 17,
  };

  const { icon: Icon = null, title = '', styles = null } = networks[network];

  return (
    <button
      type="button"
      className={className}
      size={size}
      css={css([base, styles, rounded && cssRounded, outline && cssOutlined])}
    >
      <Icon className="icon" />
      {title}
    </button>
  );
}

SocialButton.propTypes = { network: PropTypes.string, ...propTypes };

export function FacebookButton({
  className, size, rounded, outline,
}) {
  return (
    <SocialButton
      className={className}
      size={size}
      rounded={rounded}
      outline={outline}
      network="facebook"
    />
  );
}

FacebookButton.propTypes = propTypes;
FacebookButton.defaultProps = defaultProps;

export function PinterestButton({
  className, size, rounded, outline,
}) {
  return (
    <SocialButton
      className={className}
      size={size}
      rounded={rounded}
      outline={outline}
      network="pinterest"
    />
  );
}

PinterestButton.propTypes = propTypes;
PinterestButton.defaultProps = defaultProps;

export function TwitterButton({
  className, size, rounded, outline,
}) {
  return (
    <SocialButton
      className={className}
      size={size}
      rounded={rounded}
      outline={outline}
      network="twitter"
    />
  );
}

TwitterButton.propTypes = propTypes;
TwitterButton.defaultProps = defaultProps;

export function InstagramButton({
  className, size, rounded, outline,
}) {
  return (
    <SocialButton
      className={className}
      size={size}
      rounded={rounded}
      outline={outline}
      network="instagram"
    />
  );
}

InstagramButton.propTypes = propTypes;
InstagramButton.defaultProps = defaultProps;
