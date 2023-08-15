import { BugButton } from 'app/providers/ErrorBoundary';
import React from 'react';
import { useTranslation } from 'react-i18next';

function MainPage() {
  const { t } = useTranslation('main');

  return (
    <div>
      <div>{t('Главная')}</div>

      <BugButton />
    </div>
  );
}

export default MainPage;
