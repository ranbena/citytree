import { withPrefix, navigate } from 'gatsby';

type Sizes = {
  xl?: number;
  lg?: number;
  md?: number;
  sm?: number;
};

export function getOppositeSizes(sizes: Sizes): Sizes {
  const ret = {};
  Object.entries(sizes).forEach(([k, v]) => {
    ret[k] = 12 - v;
  });
  return ret;
}

export function stripPhoneNumber(number: string, excludeLeadingZero?: 0 | 1): string {
  let ret = number;

  if (excludeLeadingZero === 1 && number.charAt(0) === '0') {
    ret = number.substring(1);
  }

  ret = ret.replace(/-/g, '');

  return ret;
}

export function formatPath(path: string): string {
  return withPrefix(path);
}

export type NavAnchorT =
  | 'tours'
  | 'workshops'
  | 'stay'
  | 'top'
  | 'info'
  | 'vision'
  | 'people'
  | 'contact'
  | 'sponsor';

export function formatAnchor(type?: NavAnchorT) {
  return formatPath(type ? `/#${type}` : '/');
}

export const anchor = (type?: NavAnchorT) => () => {
  navigate(formatAnchor(type));
};

export const breakpoints = {
  sm: '(max-width: 576px)',
  md: '(max-width: 767.98px)',
  lg: '(max-width: 991.98px)',
  xl: '(max-width: 1199.98px)',
};

export const breakpointsMin = {
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
};

export function getAbsolutePath(relativePath: string): string {
  return process.env.GATSBY_SITE_URL + relativePath;
}
