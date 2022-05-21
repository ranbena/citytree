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
