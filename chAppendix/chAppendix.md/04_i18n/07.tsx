import { useTranslation } from 'next-i18next';

export const Header = () => {
  const { t } = useTranslation('common');

  return (
    <header>
      <title>{t('title')}</title>
      <p>{t('message', {name: 'A'})}<p>
    </header>
  );
};