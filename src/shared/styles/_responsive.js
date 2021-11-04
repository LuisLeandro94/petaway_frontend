// project responsive and layout custom space values
export const NavbarSize = '90px'
export const FooterSize = '280px'
export const PageLeftRightMargin = '40px'
export const HeaderBreakpoint = 1279

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tabletS: '550px',
  tablet: '768px',
  tabletL: '850px',
  laptopS: '900px',
  laptop: '992px',
  laptopL: '1200px',
  desktop: '1400px',
  desktopL: '1600px',
  desktopXL: '1900px'
}

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tabletS: `(max-width: ${size.tabletS})`,
  tablet: `(max-width: ${size.tablet})`,
  tabletL: `(max-width: ${size.tabletL})`,
  laptopS: `(max-width: ${size.laptopS})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktopL})`,
  desktopXL: `(max-width: ${size.desktopXL})`
}
