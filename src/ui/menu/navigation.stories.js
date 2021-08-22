/** @jsx jsx */
import { jsx } from '@emotion/core';
import PageDecorator from '../../decorators/page-decorator';
import Menu from './menu';
import MenuItem from './menu-item';
import { useMenu } from './menu-hooks';
import MenuIcon from '../svg/icons/menu';

export default {
  title: 'Navigation',
  component: Menu,
  decorators: [PageDecorator],
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const cellStyle = {
  width: 230,
};

const hamburgerStyle = {
  width: 44,
  height: 44,
};

export function Nav() {
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
          <Menu
            header={() => (
              <div css={hamburgerStyle}>
                Header
              </div>
            )}
            toggle={() => (
              <button
                type="button"
                onClick={setExpanded}
              >
                <MenuIcon />
              </button>
            )}
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
        </div>
      </div>
    </div>
  );
}
