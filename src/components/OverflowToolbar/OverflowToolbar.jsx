import React from 'react';
import { Toolbar } from '@ui5/webcomponents-react/lib/Toolbar';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import { ToolbarSpacer } from '@ui5/webcomponents-react/lib/ToolbarSpacer';
import { useTranslation } from 'react-i18next/';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { Input } from '@ui5/webcomponents-react/lib/Input';
import { Icon } from '@ui5/webcomponents-react';

const OverflowToolbar = (props) => {
  const { t } = useTranslation();
  return (
    <Toolbar className="OverfloowToolbar">
      <FlexBox>
        <Title level={'H5'}>{`${t('clientsListHeader')} (${props.count ? props.count : 0})`}</Title>
      </FlexBox>
      <ToolbarSpacer />
      <Input onInput={props.onFilter} placeholder={t('searchClientPH')} icon={<Icon name="search" interactive={false} showTooltip={true} tooltip={t('searchButton')} />} />
      <Button icon="add" design="Emphasized" tooltip={t('addButton')} />
      <Button icon="sort" design="Transparent" tooltip={t('sortButton')} />
    </Toolbar>
  );
};

export default OverflowToolbar;
