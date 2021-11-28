/** @jsx jsx */
import {jsx, css} from '@emotion/core';
import {useState, useCallback} from 'react';
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

const menuToggle = css(mq({
  display: ['inline-block', 'none'],
  padding: '.75em 15px',
  lineHeight: '1em',
  fontSize: '1em',
  color: '#333',
}));

const mainMenuExpanded = {
  display: 'block',
  left: 0,
  outline: 'none',
  '-moz-box-shadow': '3px 0 12px rgba(0,0,0,.25)',
  '-webkit-box-shadow': '3px 0 12px rgba(0,0,0,.25)',
  boxShadow: '3px 0 12px rgba(0,0,0,.25)',
};

const mainMenuExpandedCloseMenu = {
  zIndex: 1001,
};

const menuMainExpandedUL = {
  position: 'relative',
  zIndex: 1000,
};

const mainMenuExpandedBackdrop = {
  position: 'absolute',
  display: 'block',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  zIndex: 998,
  background: 'rgba(0,0,0,.85)',
  cursor: 'default',
};

const mainMenu = css(mq({
  position: ['absolute', 'relative'],
  display: 'none',
  left: [-200, 'auto'],
  top: [0, 'auto'],
  height: ['100%', 'auto'],
  overflowY: 'scroll',
  overflowX: 'visible',
  transition: 'left 0.3s ease',
  boxShadow: '0.3s ease',
  zIndex: 999,
  '&:target': mainMenuExpanded,
  '&[aria-expanded="true"]': mainMenuExpanded,
  '& ul': {
    display: [null, 'flex'],
    listStyle: 'none',
    margin: 0,
    padding: ['2.5em 0 0', 0],
    '-webkit-box-shadow': ['-8px 0 8px rgba(0, 0, 0, .5)', 'none'],
    '-moz-box-shadow': ['-8px 0 8px rgba(0, 0, 0, .5)', 'none'],
    boxShadow: ['-8px 0 8px rgba(0, 0, 0, .5)', 'none'],
    height: [null, 'auto'],
    width: [200, 'auto'],
    minHeight: '100%',
    background: ['#1a1a1a', 'none'],
  },
  '&:target ul': menuMainExpandedUL,
  '&[aria-expanded="true"] ul': menuMainExpandedUL,
  '& a': {
    display: 'block',
    padding: '.75em 15px',
    lineHeight: '1em',
    fontSize: '1em',
    color: ['#fff', ' #06c'],
    textDecoration: 'none',
    borderBottom: '1px solid #383838',
    border: [null, '0 !important'],
  },
  '.main-menu li:first-of-type a': {
    borderTop: '1px solid #383838',
  },
  '& a:hover, & a:focus': {
    color: [null, '#c00'],
    background: ['#333', 'none'],
    textDecoration: 'underline',
  },
  '& .menu-close': {
    display: [null, 'none'],
    position: 'absolute',
    right: 0,
    top: 0,
  },
  '&:target .menu-close': mainMenuExpandedCloseMenu,
  '&[aria-expanded="true"] .menu-close': mainMenuExpandedCloseMenu,
  '&:target + .backdrop': mainMenuExpandedBackdrop,
  '&:[aria-expanded="true"] + .backdrop': mainMenuExpandedBackdrop,
}));


export default function Nav({
  header,
  expanded: initialExpanded,
  className,
  children,
}) {
  const [expanded, setExpanded] = useState(initialExpanded);
  const onToggleClick = useCallback(function onToggleClick(e) {
    if (e.type === 'keydown' && (e.keyCode !== 13 && e.keyCode !== 32)) {
      return true;
    }
    setExpanded(false);
    e.preventDefault();
    return false;
  }, [expanded]);
  return (
    <header className={className}>
      {!expanded && (
      <a href="#main-menu" css={menuToggle} onClick={onToggleClick}>
        <span css={srOnly}>Open main menu</span>
        <MenuIcon aria-hidden="true" />
      </a>
      )}
      {header && <h1 className="logo">{header()}</h1>}
      {expanded && (
      <nav id="main-menu" aria-expanded={expanded} css={mainMenu} aria-label="Main menu">
        <a href="#main-menu-toggle" className="menu-close" onClick={() => setExpanded(false)} aria-label="Close main menu">
          <span css={srOnly}>Close main menu</span>
          <Cross />
        </a>
        {children}
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
  className: PropTypes.string,
  header: PropTypes.func,
  expanded: PropTypes.bool,
};

Nav.defaultTypes = {
  expanded: true,
};
