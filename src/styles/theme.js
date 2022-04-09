const theme = {
  palette: {
    background: '#FFFFFF',
    pageBackground: '#F4FBFD',
    chatBackground:"#DCF7C5",
    danger: '#F0647D',
    primary: {
      primary01: '#23AFD7', //primary blue
      primary02: '#00A591', //primary green
      primary03: '#FAAF23', //primary orange
    },
    secondary: {
      secondary01: '#1978C8', //secondary blue
      secondary02: '#2DBE41', //secondary green
    },
    textColors: {
      titleTextColor: '#262626', //Black shades
      primaryTextColor: '#595959',
      secondaryTextColor: '#8C8C8C',
      disabledTextColor: '#BFBFBF',
      timeTextColor:"#8E8E93",
    },
    borderColors: {
      border01: '#D9D9D9',
      border02: '#DADADA',
    },
    neutral: {
      // add new colors here
      blackBackground: '#FAFAFA',
      white: '#FFFFFF',
      black: '#000000',
      screenBackground: '#F4FBFD',
      buttonBackground: '#F07162',
      separator: '#D9D9D9',
      placeholder: '#BFBFBF',
      lightGrey: '#8C8C8C',
      orange: '#F8A524',
      green: '#389E0D',
      textGreen: '#00A591',
      textBlue: '#23AFD7',
      buttonLinearOne: '#FAAF23',
      buttonLinearTwo: '#F0647D',
      greenLinear1: '#00A591',
      greenLinear2: '#00A591BF',
      blueLinear1: '#23AFD7',
      blueLinear2: '#23AFD7BF',
      pinkLinear1: '#F0647D',
      pinkLinear2: '#F0647DBF',
      borderColor: '#DADADA',
      blackLight: '#595959',
      doggerBlue: '#3497F9',
      manatee: '#8E8E93',
      athensGray: '#ECECED',
      azureRadiance: '#007AFF',
    },
  },
  typography: {
    fontFamily: {
      regular: 'SFProText-Regular',
      medium: 'SFProText-Medium',
      bold: 'SFProText-Bold',
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      bold: '700',
    },
    font: {
      titleFont: {
        fontSize: 24,
        lineHeight: 28,
      },
      headingFont: {
        fontSize: 20,
        lineHeight: 26,
      },
      subHeadingFont: {
        fontSize: 16,
        lineHeight: 24,
      },
      primaryFont: {
        fontSize: 14,
        lineHeight: 22,
      },
      secondaryFont: {
        fontSize: 12,
        lineHeight: 20,
      },
    },
  },
  button: {
    primary: {
      text: '#1978C8',
      background: '#23AFD7',
    },
    secondary: {
      text: '#2D3037',
      background: ['#FAAF23', '#F0647D'], //linear gradient
    },
    light: {
      text: '#23AFD7',
      background: '#FFFFFF',
    },
    disabled: {},
  },
};

export default theme;
