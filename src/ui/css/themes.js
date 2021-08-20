import Checkmark from '../svg-background/input-success.svg';

const borderColor = '#DDDDDD';
const base = {
  fontFamily: 'Montserrat, Arial, Helvetica-neue, Helvetica, sans-serif',
  baseSize: 11,
  typeScale: 1.33,
  borderColor,
  border: `1px solid ${borderColor}`,
  color: '#3C3D40',
  greyLight: '#B8C6C7',
  greyDark: '#838D8F',
};

export const baseButton = {
  display: 'inline-block',
  fontWeight: 400,
  color: 'var(--button-color)',
  textAlign: 'center',
  verticalAlign: 'middle',
  userSelect: 'none',
  backgroundColor: 'var(--button-background-color)',
  padding: '0.375rem 0.75rem',
  fontSize: 'var(--button-font-size)',
  lineHeight: 'var(--button-line-height)',
  transition:
    'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
};

// const baseButton = {
//   color: 'white',
//   backgroundColor: 'black',
//   fontSize: 11,
//   fontWeight: 400,
//   lineHeight: 1.5,
//   borderRadius: '40px',
// };

function makeButton(overrides) {
  return {
    ...baseButton,
    ...overrides,
  };
}

export default {
  ...base,
  choice: {
    base: {
      ...baseButton,
      color: 'var(--fv-grey-light)',
    },
    disabled: {
      opacity: '0.5',
    },
    selected: {
      backgroundColor: 'var(--fv-grey-light)',
      color: 'white',
    },
  },
  buttons: {
    primary: makeButton({ backgroundColor: '#277CEA', color: 'white' }),
    secondary: makeButton({ backgroundColor: '#EA8BFF', color: 'white' }),
    tertiary: makeButton({ backgroundColor: '#6848E1', color: 'white' }),
    quaternary: makeButton({ backgroundColor: '#3CA773', color: 'white' }),
    dropdown: makeButton({ backgroundColor: '#EEEEEE', color: 'black' }),
    rightArrow: makeButton({ backgroundColor: '#3CA773', color: 'white' }),
  },
  buttonRounded: {
    borderRadius: 'var(--button-border-radius)',
  },
  input: {
    base: {
      backgroundColor: '#EEEEEE',
      border: '1px solid #979797',
      boxShadow: 'none',
      borderRadius: '4px',
    },
    focus: {
      boxShadow: '0 1px #000000',
    },
    success: {
      backgroundImage: `url(${Checkmark})`,
      backgroundColor: '#8FD896',
      backgroundPosition: 'right center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '1rem',
      paddingRight: 32,
    },
    checkbox: {
      color: '#85D78D',
      backgroundColor: base.greyLight,
    },
  },
};
