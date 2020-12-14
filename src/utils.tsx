import { IntlShape } from 'gatsby-plugin-intl';

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

export function forEachMessage(intl: IntlShape, key: string): [string, string][] {
  const ret: [string, string][] = [];
  Object.entries(intl.messages).forEach(([k, v], idx) => {
    if (k.startsWith(key)) {
      ret.push([v, `${key}${idx}`]);
    }
  });
  return ret;
}

export function formatPath(intl: IntlShape, path: string): string {
  const { locale, defaultLocale } = intl;
  return locale === defaultLocale ? path : `/${locale}${path}`;
}

export const breakpoints = {
  sm: '(max-width: 576px)',
  md: '(max-width: 768px)',
  lg: '(max-width: 992px)',
  xl: '(max-width: 1200px)',
};
