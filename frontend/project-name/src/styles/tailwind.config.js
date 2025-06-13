module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        10.5: '2.625rem',
        17: '4.25rem',
        99.25: '24.813rem',
      },
      fontSize: {
        'medium-b': [
          '16px',
          {
            lineHeight: '22px',
            letterSpacing: '1%',
            fontWeight: '700',
          },
        ],
        'large-b': [
          '18px',
          {
            lineHeight: '24px',
            letterSpacing: '1%',
            fontWeight: '700',
          },
        ],
        'small-r': [
          '14px',
          {
            lineHeight: '20px',
            letterSpacing: '1%',
            fontWeight: '400',
          },
        ],
        'medium-r': [
          '16px',
          {
            lineHeight: '22px',
            letterSpacing: '1%',
            fontWeight: '400',
          },
        ],
        '3-r': [
          '20px',
          {
            lineHeight: '30px',
            letterSpacing: '0%',
            fontWeight: '400',
          },
        ],
        'large-r': [
          '18px',
          {
            lineHeight: '24px',
            letterSpacing: '1%',
            fontWeight: '400',
          },
        ],
        '2b': [
          '24px',
          {
            lineHeight: '34px',
            letterSpacing: '0%',
          },
        ],
        '3b': [
          '20px',
          {
            lineHeight: '30px',
            letterSpacing: '0%',
            fontWeight: '700',
          },
        ],
        'xxs-r': [
          '12px',
          {
            lineHeight: '16px',
            letterSpacing: '1%',
            fontWeight: '400',
          },
        ],
      },
      colors: {
        primary: {
          red: '#ED1C24',
          'dark-red': '#c41218',
        },
        secondary: {
          white: {
            DEFAULT: '#FBFBFB',
          },
          black: {
            DEFAULT: '#2E2F38',
          },
          grey: {
            10: '#E3E4E8',
            20: '#C7C8D1',
            40: '#8F91A3',
            60: '#5C5E70',
          },
          notification: {
            grey: '#F4F4F6',
          },
        },
        tertiary: {
          background: {
            red: '#FFF7F7',
          },
          light: {
            pink: '#FFE5E6',
          },
        },
        system: {
          active: '#0099DB',
          complete: '#6FCF97',
          error: '#FF8080',
        },
      },
      boxShadow: {
        'light-shadow': '0px 2px 10px 0px #2E2F381A',
        blur: '0px 10px 30px 0px #2E2F381A',
      },
    },
  },
  plugins: [],
};
