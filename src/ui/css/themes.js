const base = {
  fontFamily: 'Montserrat, Arial, Helvetica-neue, Helvetica, sans-serif',
  baseSize: 11,
  typeScale: 1.33,
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
  },
};

export default {
  light,
};
