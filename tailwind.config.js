import { twColors } from "./plugins/vuetify/tw-colors";
export default {
  content: ['./components/**/*.{vue,js}', './pages/**/*.{vue,js}'],
    theme: {
      screens: {
        'mob' : '0px',
        'xs': '375px',
        'sm': '540px',
        'md': '800px',
        'reg': '1024px',
        'lg': '1280px',
        'xl': '1420px', 
      },
    }, 
  plugins: [],
};
