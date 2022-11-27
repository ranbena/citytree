import { withPrefix, navigate } from 'gatsby';
import { IntlShape } from 'gatsby-plugin-intl';
import { IntlMessageFormat } from 'intl-messageformat';

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

export function forEachMessage(
  intl: IntlShape,
  key: string,
  values?: Record<string, any>,
): [string, string][] {
  const ret: [string, string][] = [];
  const { messages, locale } = intl;
  Object.entries(messages).forEach(([k, v], idx) => {
    if (k.startsWith(key)) {
      const formatted = new IntlMessageFormat(v, locale).format(values);
      ret.push([formatted, `${key}${idx}`]);
    }
  });
  return ret;
}

export function formatPath(
  intl: IntlShape,
  path: string,
  forcedLocale?: IntlShape['locale'],
): string {
  const locale = forcedLocale || intl.locale;
  const value = locale === intl.defaultLocale ? path : `/${locale}${path}`;
  return withPrefix(value);
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

export function formatAnchor(intl: IntlShape, type?: NavAnchorT) {
  return formatPath(intl, type ? `/#${type}` : '/');
}

export const anchor = (intl: IntlShape, type?: NavAnchorT) => () => {
  navigate(formatAnchor(intl, type));
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
