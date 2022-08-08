import { createGlobalStyle } from 'styled-components';

const primary = (props) => props.theme.colors.primary;
const secondary = (props) => props.theme.colors.secondary;
const text = (props) => props.theme.colors.text;
const textLight = (props) => props.theme.colors.text_light;
const sidebarBackground = (props) => props.theme.colors.sidebar_background;

export default createGlobalStyle`
  :root {
    --primary: ${primary};
    --secondary: ${secondary};

    --text: ${text};
    --textLight: ${textLight};

    --sidebarBackground: ${sidebarBackground};

    --success: #8BFF06;
    --error: #F2453D;
    --warning: #F47B0E;

    --aliceBlue: #EFF6F9;
    --aliceBlueLight: #F9FDFF;
    --blue: #0384C1;
    --blueDark: #2E4765;
    --green: #68C102;
    --greenLight: #b3e080;
    --greenDark: #526c30;
    --grey: #63799B;
    --greyLight: #97A3B5;
    --greyDark: #707070;
    --orange: #F47B0E;
    --danger: #F1443C;
    --light: #F5F6FA;
    --white: #FFF;
    --hawkesBlue: #D8DEE9;
    --darkGrey: #2E4765;
    --darkgrayish: #1D2634;
    --solitude: #eff1f6;
    --solitudeDark: #E8E9EC;
    --prim: #D3DDEA;
    --licorice: #2B3441;
    --silver: #BFBFBF;
    --wedgewood: #52667F;
    --shipCove: #A7B5CB;
    --cadetBlue: #BCC0CB;
    --lavender: #E5E5EA;
    --geyser: #cfd6e1;
    --mystic: #ccd1d8;
    --luminous: #f4c60e;
    --blueTurq: #55D8FE;
    --dangerLight: #FF8373;
    --yellow: #FFDA83;
    --yellowDark: #ad881f;
    --yellowLight: #ffedb4;
    --purple: #A3A0FB;
    --greenStrong: #ABFE75;
    --greenBlue: #54F9B1;
    --pink: #F683FF;
    --orangeLight: #FBD3A5;
    --blueCard: #2A98FF;
  }
`;
