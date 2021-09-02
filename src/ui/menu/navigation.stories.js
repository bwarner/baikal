/** @jsx jsx */
import { jsx } from '@emotion/core';
import Nav from './nav';
import Menu from './menu';
import MenuItem from './menu-item';
import { useMenu } from './menu-hooks';
import MenuIcon from '../svg/icons/menu';

export default {
  title: 'Navigation',
  component: Nav,
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const cellStyle = {
  width: 230,
};

const hamburgerStyle = {
};

export function NavSimple() {
  const {
    selected,
    setSelected,
    expanded,
    setExpanded,
  } = useMenu('k2', true);

  return (
    <div>
      <div css={containerStyle}>
        <div css={cellStyle}>
          <Nav
            header={() => (
              <div css={hamburgerStyle}>
                Header
              </div>
            )}
            initialSelection="k2"
            expanded={expanded}
          >
            <Menu
              initialSelection="k2"
              expanded={expanded}
            >
              <>
                <MenuItem
                  selected={selected === 'k1'}
                  css={selected === 'k1' && { outline: '2px solid red' }}
                  onClick={() => {
                    console.log('k1 clicked');
                    setSelected('k1');
                  }}
                >
                  <span id="k1">Hello1</span>
                </MenuItem>
                <MenuItem
                  selected={selected === 'k2'}
                  css={
                    selected === 'k2' && {
                      backgroundColor: 'grey',
                      outline: '2px solid red',
                    }
                  }
                  onClick={() => setSelected('k2')}
                >
                  <span id="k2">Hello2</span>
                </MenuItem>
                <MenuItem
                  selected={selected === 'k3'}
                  css={selected === 'k3' && { outline: '2px solid red' }}
                  onClick={() => setSelected('k3')}
                >
                  <span id="k3">Hello3</span>
                </MenuItem>
              </>
            </Menu>
          </Nav>
        </div>
      </div>
    </div>
  );
}
