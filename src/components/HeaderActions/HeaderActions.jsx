import React from 'react';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { useTranslation } from 'react-i18next';
import { sapUiSmallMarginEnd } from '@ui5/webcomponents-react-base/lib/spacing';
import { isMobile } from '@ui5/webcomponents-base/dist/Device';

/**
 * Split-Code for Obtainning corresponding buttons
 * @memberof Detail
 * @param {any} props the properties passed
 * @private
 */
function HeaderActions(props) {
  const { t } = useTranslation();

  // Buttons to be displayed
  var aButtons = [];

  // Main action
  aButtons.push(<Button key="1" icon="edit" design="Emphasized" tooltip={t('editButton')} style={sapUiSmallMarginEnd} />);

  if (!isMobile())
    // Maximize-Minimize (Not in phone for screen size)
    aButtons.push(<Button key="2" icon={props.bFullScreen ? 'exit-full-screen' : 'full-screen'} design="Transparent" tooltip={t('fullscreenButton')} style={sapUiSmallMarginEnd} />);

  // Close button
  aButtons.push(<Button key="3" onClick={props.onClose} icon="decline" tooltip={t('closeButton')} design="Transparent" />);

  return aButtons;
}

export default HeaderActions;
