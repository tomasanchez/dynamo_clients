import React from 'react';
import { Button } from '@ui5/webcomponents-react/dist/Button';
import { useTranslation } from 'react-i18next';
import { sapUiSmallMarginEnd } from '@ui5/webcomponents-react-base/dist/spacing';

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

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

  /**
   * Event handler when full scren button is pressed.
   * @function
   * @private
   * @param {event} oEvent
   */
  const onFullScreen = (oEvent) => {
    // Getting html component
    var oButton = oEvent.target,
      isFullScreen = oButton.icon === 'full-screen';
    // Changing icon and tooltip
    oButton.icon = isFullScreen ? 'exit-full-screen' : 'full-screen';
    oButton.title = isFullScreen ? t('exitFullScreenButton') : t('fullScreenButton');
    // Changing Flexible Column Layout
    props.onFullScreen();
  };

  if (!isMobile)
    // Maximize-Minimize (Not in phone for screen size)
    aButtons.push(
      <Button
        key="2"
        icon={props.isFullScreen ? 'exit-full-screen' : 'full-screen'}
        design="Transparent"
        onClick={onFullScreen}
        tooltip={props.isFullScreen ? t('exitFullScreenButton') : t('fullScreenButton')}
        style={sapUiSmallMarginEnd}
      />,
    );

  // Close button
  aButtons.push(<Button key="3" onClick={props.onClose} icon="decline" tooltip={t('closeButton')} design="Transparent" />);

  return aButtons;
}

export default HeaderActions;
