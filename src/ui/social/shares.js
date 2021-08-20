/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import TwitterIcon from '../svg/icons/twitter';
import FacebookIcon from '../svg/icons/facebook';
import PinterestIcon from '../svg/icons/pinterest';
import {
  flex,
  borderRadius,
  flexDirectionColumn,
  flexDirectionRow,
  justifyContentStart,
  alignItemsCenter,
  textAlignRight,
  textTransformCapitalize,
  flexBasis,
  flexGrow,
} from '../css/styles';

const networks = {
  facebook: {
    icon: FacebookIcon,
    title: 'Share',
    styles: {
      color: 'white',
      backgroundColor: '#225B99',
    },
  },
  twitter: {
    icon: TwitterIcon,
    title: 'Twitter',
    styles: {
      color: 'white',
      backgroundColor: '#00ADF2',
    },
  },
  pinterest: {
    icon: PinterestIcon,
    title: 'Pinterest',
    styles: {
      color: 'white',
      backgroundColor: '#DA4E35',
    },
  },
};

const cssOutlined = {
  color: 'var(--base-color)',
  backgroundColor: 'transparent',
  border: 'var(--fv-border)',
};

const cellStyle = {
  height: 32,
};

const cellWrapper = {
  height: 48,
  ...cssOutlined,
};

export function SocialShareCell({ network, count }) {
  const {
    title,
    icon: Icon,
    styles: { backgroundColor, color },
  } = networks[network];
  return (
    <div css={cellWrapper}>
      <div
        css={[
          flex,
          flexDirectionRow,
          justifyContentStart,
          cellStyle,
          alignItemsCenter,
          {
            margin: 8,
          },
        ]}
      >
        <div
          css={[
            borderRadius('50%'),
            {
              marginRight: '1em',
              width: 32,
              height: 32,
              position: 'relative',
              backgroundColor,
              color,
            },
          ]}
        >
          <Icon
            css={[
              flexBasis(32),
              {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-8px, -8px)',
              },
            ]}
          />
        </div>
        <div css={[flexGrow('1'), textTransformCapitalize]}>{title}</div>
        <div
          css={[
            borderRadius('40%'),
            textAlignRight,
            {
              color: 'white',
              backgroundColor: 'var(--fv-grey-light)',
              fontWeight: 'bold',
              fontSize: 10,
              padding: 4,
            },
          ]}
        >
          {count}
        </div>
      </div>
    </div>
  );
}

SocialShareCell.propTypes = {
  network: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export function SocialShare({ children }) {
  return <div css={[flex, flexDirectionColumn]}>{children}</div>;
}

SocialShare.propTypes = {
  children: PropTypes.node.isRequired,
};
