export const Path = {
  Default: '',
  Home: 'home',
  Work: 'work',
  About: 'about',
  Contact: 'contact',
} as const;

export const Color = {
  White: '#FFFFFF',
  Black: '#000000',
  DeepBlue: '#14171F',
  Gray: '#9DA7C2',
  WhiteAlpha: (opacity: number) => `rgba(0, 0, 0, ${opacity})`,
} as const;
