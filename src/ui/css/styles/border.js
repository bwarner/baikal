export const borderRadius = (...args) => ({
  'border-radius': args.join(','),
});

export const border = (...args) => ({
  border: args.join(' '),
});

export const borderColor = (color) => ({ borderColor: color });
