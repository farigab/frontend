import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const CustomAuraPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#E0DAFF',  // tom mais claro
      100: '#D7D1F8',
      200: '#C5B8F0',
      300: '#AB99E5',
      400: '#907AE0',
      500: '#6B5DD3', // seu --primary
      600: '#5A4AB8',
      700: '#4A389C',
      800: '#392680',
      900: '#271666',
      950: '#1C0C4B', // tom mais escuro
    },
    colorScheme: {
      light: {
        primary: {
          color: '{primary.500}',
          contrastColor: '#ffffff',
          hoverColor: '{primary.600}',
          activeColor: '{primary.700}'
        }
      },
      dark: {
        primary: {
          color: '{primary.500}',
          contrastColor: '#ffffff',
          hoverColor: '{primary.600}',
          activeColor: '{primary.700}'
        }
      }
    }
  },
  components: {
    progressspinner: {
      colorScheme: {
        light: {
          root: {
            colorOne: '{primary.500}',
            colorTwo: '{primary.500}',
            colorThree: '{primary.500}',
            colorFour: '{primary.500}'
          }
        },
        dark: {
          root: {
            colorOne: '{primary.400}',
            colorTwo: '{primary.400}',
            colorThree: '{primary.400}',
            colorFour: '{primary.400}'
          }
        }
      }
    },
    inputtext: {
      colorScheme: {
        light: {
          root: {
            color: '{surface.700}',
            placeholderColor: '{surface.400}'
          }
        },
        dark: {
          root: {
            color: '{surface.500}',
            placeholderColor: '{surface.500}'
          }
        }
      }
    }
  }
});
