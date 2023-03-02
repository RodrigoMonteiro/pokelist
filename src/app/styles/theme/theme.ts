export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: 'light',
  properties: {
    '--main-background': '#FFFFFF',
    '--background-primary': '#2a75bb',
    '--background-secondary': '#ffcb05',
    '--background-extra': '#FF0000',
    '--text-primary': '#000000',
  },
};

export const dark: Theme = {
  name: 'dark',
  properties: {
    '--main-background': '#000000',
    '--background-primary': '#3c5aa6',
    '--background-secondary': '#c7a008',
    '--background-extra': '#CC0000',
    '--text-primary': '#F5F3F4',
  },
};
