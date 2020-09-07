export const baseButtonStyle = {
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
  borderRadius: 0,
  transition:
    'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
};

export const iconButtonStyle = {
  position: 'absolute',
  cursor: 'pointer',
  top: 0,
  bottom: 0,
  right: 0,
  width: 45,
  padding: 'inherit',
  marginTop: 5,
  height: '100%',
  border: 'none',
  color: 'var(--button-color)',
  backgroundColor: 'var(--button-background-color)',
};

export const iconStyle = {
  position: 'absolute',
  fontSize: 16,
  top: '50%',
  left: '50%',
  transform: 'translateY(-8px) translateX(-8px)',
};
