import React from 'react';
import { Toolbar } from '@ui5/webcomponents-react/dist/Toolbar';
import { FlexBox } from '@ui5/webcomponents-react/dist/FlexBox';
import { Title } from '@ui5/webcomponents-react/dist/Title';
import { ToolbarSpacer } from '@ui5/webcomponents-react/dist/ToolbarSpacer';
import { useTranslation } from 'react-i18next/';
import { Button } from '@ui5/webcomponents-react/dist/Button';
import { Input } from '@ui5/webcomponents-react/dist/Input';
import { Icon } from '@ui5/webcomponents-react';

/**
 * Custom toolbar with searchfield
 * @function
 * @param {any} props using count for counter, onFilter for filter option, add for addition in toolbar
 * @returns {ui5.webcomponents.react.Toolbar} a custom Toolbar
 */
const OverflowToolbar = (props) => {
  const { t } = useTranslation();

  const { title = t('clientsListHeader'), count, onFilter, add = true, sort = false } = props;

  const onResetFilters = (oEvent) => {
    var oInput = oEvent.srcElement.parentNode.parentNode.childNodes[2].firstChild;
    oInput.value = '';
    onFilter();
  };

  const Content = [];
  const oSearchField = (
      <Input key="searchField" onInput={onFilter} placeholder={t('searchClientPH')} icon={<Icon name="search" interactive={false} showTooltip={true} tooltip={t('searchButton')} />} />
    ),
    oResetButton = <Button key="resetButton" icon="reset" design="Transparent" tooltip={t('resetButton')} onClick={onResetFilters} />,
    oAddButton = <Button key="addButton" icon="add" design="Emphasized" tooltip={t('addButton')} />,
    oSortButton = <Button key="sortButton" icon="sort" design="Transparent" tooltip={t('sortButton')} />;
  if (onFilter) {
    Content.push(oSearchField);
    Content.push(oResetButton);
  }
  if (sort) Content.push(oSortButton);
  if (add) Content.push(oAddButton);
  if (Content.length > 0) Content.unshift(<ToolbarSpacer key="spacer" />);

  return (
    <Toolbar style={{ position: 'sticky' }}>
      <FlexBox>
        <Title level={'H5'} style={{ marginLeft: '1rem' }}>{`${title} (${count ? count : 0})`}</Title>
      </FlexBox>
      {Content.length > 0 && Content.map((oItem) => oItem)}
    </Toolbar>
  );
};

export default OverflowToolbar;
