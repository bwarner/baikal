/** @jsx jsx */
import { jsx } from '@emotion/core';
import PageDecorator from '../../decorators/page-decorator';
import Menu from './menu';
import MenuItem from './menu-item';
import { useMenu } from './menu-hooks';

export default {
  title: 'Menu',
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

export function MenuSimple() {
  const {
    selected,
    setSelected,
    expanded,
  } = useMenu('k2', true);

  return (
    <div>
      <div css={containerStyle}>
        <div css={cellStyle}>
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
        </div>
      </div>
    </div>
  );
}
