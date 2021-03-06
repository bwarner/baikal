import Checkmark from '../svg-background/input-success.svg';

const borderColor = '#DDDDDD';
const base = {
  fontFamily: 'Montserrat, Arial, Helvetica-neue, Helvetica, sans-serif',
  baseSize: 11,
  typeScale: 1.33,
  borderColor,
  border: `1px solid ${borderColor}`,
  color: '#3C3D40',
};

const baseButton = {
  color: 'white',
  backgroundColor: 'black',
  fontSize: 11,
  fontWeight: 400,
  lineHeight: 1.5,
  borderRadius: '40px',
};

function makeButton(overrides) {
  return {
    ...baseButton,
    ...overrides,
  };
}

const light = {
  ...base,
  buttons: {
    primary: makeButton({ backgroundColor: '#277CEA' }),
    secondary: makeButton({ backgroundColor: '#EA8BFF' }),
    tertiary: makeButton({ backgroundColor: '#6848E1' }),
    quaternary: makeButton({ backgroundColor: '#3CA773' }),
    dropdown: makeButton({ backgroundColor: '#EEEEEE', color: 'black' }),
    rightArrow: makeButton({ backgroundColor: '#3CA773', color: 'white' }),
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
  },
};

export default {
  light,
};
