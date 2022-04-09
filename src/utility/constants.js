import lang from '../assets/languages';
import theme from '../styles/theme';

export const ImagePath = {
  oneCareLogo: require('../assets/images/OneCareLogo.svg'),
  landingOne: require('../assets/images/LandingOne.svg'),
  landingTwo: require('../assets/images/LandingTwo.svg'),
  landingThree: require('../assets/images/LandingThree.svg'),
  landingFour: require('../assets/images/LandingFour.svg'),
  backArrow: require('../assets/images/BackArrow.svg'),
  home: require('../assets/images/Home.svg'),
  weekPlan: require('../assets/images/WeekPlan.svg'),
  journal: require('../assets/images/Journal.svg'),
  profile: require('../assets/images/Profile.svg'),
  info: require('../assets/images/info.svg'),
  videoPlay: require('../assets/images/videoPlay.svg'),
  downArrow: require('../assets/images/downArrow.svg'),
  rightArrow: require('../assets/images/rightArrow.svg'),
  activityFrame: require('../assets/images/activityFrame.png'),
  star: require('../assets/images/star.svg'),
  addButton: require('../assets/images/addButton.svg'),
  diet: require('../assets/images/diet.svg'),
  sleep: require('../assets/images/sleep.svg'),
  hba1cTest: require('../assets/images/hba1cTest.svg'),
  weight: require('../assets/images/weight.svg'),
  steps: require('../assets/images/steps.svg'),
  physicalActivity: require('../assets/images/physicalActivity.svg'),
  bloodSugar: require('../assets/images/bloodSugar.svg'),
  dietPDF: require('../assets/images/dietPDF.png'),
  cross: require('../assets/images/cross.svg'),
  stop: require('../assets/images/stop.svg'),
  keep: require('../assets/images/keep.svg'),
  start: require('../assets/images/start.svg'),
  newWeekPlan: require('../assets/images/newWeekPlan.png'),
  redFrame: require('../assets/images/redFrame.png'),
  violetFrame: require('../assets/images/violetFrame.png'),
  greenFrame: require('../assets/images/greenFrame.png'),
  orangeFrame: require('../assets/images/orangeFrame.png'),
  blueFrame: require('../assets/images/blueFrame.png'),
};

export const Colors = {
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
};

export const Fonts = {
  SFPro: 'SFProText-Regular',
};

export const Strings = {};

export const LandingData = [
  {
    id: 1,
    image: ImagePath.landingOne,
    heading:
      'Every diabetes battle is unique. We’re here to help you through yours.',
    subHeading:
      'With the right guidance from dedicated dieticians & health coaches',
    buttonText: 'Know more',
  },
  {
    id: 2,
    image: ImagePath.landingTwo,
    heading: 'Personalized Treatment Plans',
    subHeading: 'Dedicated programs to control diabetes',
    buttonText: 'Next',
  },
  {
    id: 3,
    image: ImagePath.landingThree,
    heading: '1-to-1 sessions',
    subHeading: 'Assessment by Diabetologists and Dieticians',
    buttonText: 'Next',
  },
  {
    id: 4,
    image: ImagePath.landingFour,
    heading: 'Diet and Lifestyle',
    subHeading: 'Customised Exercise, Sleep & Diet Plans',
    buttonText: 'Next',
  },
];

export const Durations = Object.freeze({
  week: 'week',
  month: 'month',
  year: 'year',
});

export const BloodSugarTypes = Object.freeze({
  fasting: 'fasting',
  postmeal: 'postmeal',
  random: 'random',
});

export const HealthTypeConfig = Object.freeze({
  bloodsugar: {
    type: 'bloodsugar',
    endPoint: 'getBloodSugar',
    metric: lang.units['mg/dL'],
    chart: 'line',
    heading: {
      [BloodSugarTypes.fasting]: lang.fastingBS,
      [BloodSugarTypes.postmeal]: lang.postMealBS,
      [BloodSugarTypes.random]: lang.randomBS,
    },
    chartColor: theme.palette.neutral.pinkLinear1,
    navigationScreen: 'BloodSugar',
  },
  weight: {
    type: 'weight',
    endPoint: 'getWeight',
    metric: lang.units.kg,
    chart: 'line',
    heading: lang.weight,
    chartColor: theme.palette.primary.primary01,
    navigationScreen: 'Weight',
  },
  diet: {
    type: 'diet',
    endPoint: 'getDiet',
    metric: lang.units.meals,
    chart: 'bar',
    heading: lang.diet,
    chartColor: theme.palette.primary.primary02,
    navigationScreen: 'Diet',
  },
  physical: {
    type: 'physical',
    endPoint: 'getPhysicalActivity',
    metric: lang.units.calories,
    chart: 'bar',
    heading: lang.physicalActivities,
    chartColor: theme.palette.primary.primary03,
    navigationScreen: 'PhysicalActivity',
  },
  sleep: {
    type: 'sleep',
    endPoint: 'getSleep',
    metric: lang.units.hours,
    chart: 'line',
    heading: lang.sleep,
    chartColor: theme.palette.secondary.secondary01,
    navigationScreen: 'Sleep',
  },
  steps: {
    type: 'steps',
    endPoint: 'getSteps',
    metric: lang.units.steps,
    chart: 'bar',
    heading: lang.steps,
    chartColor: theme.palette.secondary.secondary02,
    navigationScreen: 'Steps',
  },
  hba1c: {
    type: 'hba1c',
    endPoint: 'getHba1c_test',
    metric: lang.units.percentage,
    chart: 'bar',
    heading: lang.hba1c,
    chartColor: theme.palette.neutral.pinkLinear1,
    navigationScreen: 'HbA1cTest',
  },
});
