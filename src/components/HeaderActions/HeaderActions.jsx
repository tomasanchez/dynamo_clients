import React, { useCallback, useState } from 'react';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { useTranslation } from 'react-i18next';
import { sapUiSmallMarginEnd } from '@ui5/webcomponents-react-base/lib/spacing';

function HeaderActions(props) {
  const { t } = useTranslation();

  return [
    <Button key="1" icon="edit" design="Emphasized" tooltip={t('editButton')} style={sapUiSmallMarginEnd} />,
    <Button key="2" icon="full-screen" design="Transparent" tooltip={t('fullscreenButton')} style={sapUiSmallMarginEnd} />,
    <Button key="3" onClick={props.onClose} icon="decline" tooltip={t('closeButton')} design="Transparent" />,
  ];
}

export default HeaderActions;
