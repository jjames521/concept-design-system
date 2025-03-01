import { Language, TFunction } from '@cmsgov/design-system';

/**
 * Returns a link pointing to the opposite locale
 */
export default function localeLink(
  t: TFunction,
  locale: Language,
  subpath = '',
  switchLocaleLink?: string
) {
  const defaultLocaleLink =
    locale === 'es'
      ? `https://www.healthcare.gov/${subpath}`
      : `https://www.cuidadodesalud.gov/es/${subpath}`;
  return {
    label: locale === 'es' ? t('header.english') : t('header.español'),
    href: switchLocaleLink || defaultLocaleLink,
  };
}
