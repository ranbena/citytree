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

export function forEachMessage(intl: IntlShape, key: string): string[] {
  const ret: string[] = [];
  Object.entries(intl.messages).forEach(([k, v]) => {
    if (k.startsWith(key)) {
      ret.push(v);
    }
  });
  return ret;
}

export function formatPath(intl: IntlShape, path: string): string {
  const { locale, defaultLocale } = intl;
  return locale === defaultLocale ? path : `/${locale}${path}`;
}
