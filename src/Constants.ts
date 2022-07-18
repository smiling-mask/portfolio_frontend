export const Path = {
  Home: 'home',
} as const;

export const Color = {
  White: '#FFFFFF',
  Black: '#000000',
  WhiteAlpha: (opacity: number) => `rgba(0, 0, 0, ${opacity})`,
} as const;
