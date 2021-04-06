import React, { useEffect, useState } from 'react';

import { Switch } from '@ui5/webcomponents-react/dist/Switch';
import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme.js';
import Constants from '../../util/Constants';

const style = {
  switch: {
    marginRigth: '1rem',
    width: '100px',
  },
};

const themeOptions = [
  { value: 'sap_fiori_3', title: 'shell.button.user.settings.item.themeSwitch.option.default' },
  { value: 'sap_fiori_3_dark', title: 'shell.button.user.settings.item.themeSwitch.option.dark' },
];

const ThemeSwitch = ({ storedTheme = localStorage.getItem(Constants.SEED.SELECTED_THEME) }) => {
  useEffect(() => {
    setTheme(storedTheme ? storedTheme : themeOptions[0].value);
  }, [storedTheme]);

  var [darkMode, setDarkMode] = useState(storedTheme === themeOptions[1].value);
  var bDarkMode = storedTheme === themeOptions[1].value;

  const onChange = (event) => {
    bDarkMode = !bDarkMode;
    const sTheme = bDarkMode === true ? themeOptions[1].value : themeOptions[0].value;
    localStorage.setItem(Constants.SEED.SELECTED_THEME, sTheme);
    setTheme(sTheme);

    setDarkMode(bDarkMode);
  };

  return <Switch style={style.switch} onChange={onChange} data-testid="theme-switch-wrapper" checked={darkMode} textOff="Off" textOn="On" />;
};

export default ThemeSwitch;
