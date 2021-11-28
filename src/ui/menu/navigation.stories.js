/** @jsx jsx */
import { jsx } from '@emotion/core';
import Nav from './nav';
import Menu from './menu';
import MenuItem from './menu-item';
import { useMenu } from './menu-hooks';
import MenuIcon from '../svg/icons/menu';
import PushStateLink from '../base/push-state-link';

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
        <div>
          <Nav
            header={() => (
              <div css={hamburgerStyle}>
                Header
              </div>
            )}
            initialSelection="k2"
            expanded={expanded}
          >
            <Menu>
              <MenuItem
                selected={selected === 'k1'}
                onClick={() => {
                  console.log('k1 clicked');
                  setSelected('k1');
                }}
              >
                <PushStateLink href="/cow" id="k1">Cow</PushStateLink>
              </MenuItem>
              <MenuItem
                selected={selected === 'k2'}
                onClick={() => setSelected('k2')}
              >
                <PushStateLink href="/chicken" id="k1">Chicken</PushStateLink>
              </MenuItem>
              <MenuItem
                selected={selected === 'k3'}
                onClick={() => setSelected('k3')}
              >
                <PushStateLink href="/dog" id="k1">Dog</PushStateLink>
              </MenuItem>
            </Menu>
          </Nav>
        </div>
      </div>
    </div>
  );
}
