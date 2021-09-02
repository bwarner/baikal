/** @jsx jsx */
import {jsx, css} from '@emotion/core';
import {useState} from 'react';
import PropTypes from 'prop-types';
import Menu from './menu';
import MenuIcon from '../svg/icons/menu';
import Cross from '../svg/icons/cross';
import {srOnly} from '../css/styles';
import mq from '../css/mediaquery';

// const headerStyle = css`
//   display: flex;
//   flex-direction: row;
// `;

const menuToggle = css`
  display: inline-block;
  padding: .75em 15px;
  line-height: 1em;
  font-size: 1em;
  color: #333;

  &:hover,
  &:focus {
    color: #c00;
  }
`;

const mainMenu = css(mq({
  position: 'absolute',
  display: 'none',
  left: -200,
  top: 0,
  height: '100%',
  overflowY: 'scroll',
  overflowX: 'visible',
  transition: 'left 0.3s ease',
  boxShadow: '0.3s ease',
  zIndex: 999,
  '& ul': {
    listStyle: 'none',
    margin: 0,
    padding: '2.5em 0 0',
    '-webkit-box-shadow': '-8px 0 8px rgba(0, 0, 0, .5)',
    '-moz-box-shadow': '-8px 0 8px rgba(0, 0, 0, .5)',
    boxShadow: '-8px 0 8px rgba(0, 0, 0, .5)',
    minHeight: '100%',
    width: 200,
    background: '#1a1a1a',
  },
  '& a': {
    display: 'block',
    padding: '.75em 15px',
    lineHeight: '1em',
    fontSize: '1em',
    color: '#fff',
    textDecoration: 'none',
    borderBottom: '1px solid #383838',
  },
  '.main-menu li:first-of-type a': {
    borderTop: '1px solid #383838',
  },
  '& a:hover, & a:focus': {
    background: '#333',
    textDecoration: 'underline',
  },
  '& .menu-close': {
    position: 'absolute',
    right: 0,
    top: 0,
  },
}));

const mainMenuExpanded = css`
  display: block;
  left: 0;
  outline: none;
  -moz-box-shadow: 3px 0 12px rgba(0,0,0,.25);
  -webkit-box-shadow: 3px 0 12px rgba(0,0,0,.25);
  box-shadow: 3px 0 12px rgba(0,0,0,.25);
  & .menu-close {
    z-index: 1001;
  }
  & ul {
    position: relative;
    z-index: 1000;
  }
  & + .backdrop{
    position: absolute;
    position: fixed;
    display: block;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 998;
    background: #000;
    background: rgba(0,0,0,.85);
    cursor: default;
  }
`;

export default function Nav({
  header,
  expanded: initialExpanded,
  children,
}) {
  const [expanded, setExpanded] = useState(initialExpanded);
  return (
    <header>
      {!expanded && (
      <a href="#main-menu" css={menuToggle} onClick={() => setExpanded(true)}>
        <span css={srOnly}>Open main menu</span>
        <MenuIcon aria-hidden="true" />
      </a>
      )}
      {header && <h1 className="logo">{header()}</h1>}
      {expanded && (
      <nav id="main-menu" aria-expanded={expanded} css={[mainMenu, expanded && mainMenuExpanded]} aria-label="Main menu">
        <a href="#main-menu-toggle" className="menu-close" onClick={() => setExpanded(false)} aria-label="Close main menu">
          <span css={srOnly}>Close main menu</span>
          <Cross />
        </a>
        <Menu>
          {children}
        </Menu>
      </nav>
      )}
      <a
        href="#main-menu-toggle"
        className="backdrop"
        tabIndex="-1"
        aria-hidden="true"
        hidden
        onClick={() => setExpanded(false)}
      />
    </header>
  );
}

Nav.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.func,
  expanded: PropTypes.bool,
};

Nav.defaultTypes = {
  expanded: true,
};
