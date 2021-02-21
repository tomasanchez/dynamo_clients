import React, { useState, useEffect } from 'react';
import { ObjectPageSection } from '@ui5/webcomponents-react/lib/ObjectPageSection';
import { ObjectPage } from '@ui5/webcomponents-react/lib/ObjectPage';
import { useTranslation } from 'react-i18next/';
import HeaderActions from '../../../components/ObjectHeader/HeaderActions/HeaderActions';
import { Avatar } from '@ui5/webcomponents-react/lib/Avatar';
import HeaderContent from '../../../components/ObjectHeader/HeaderContent/HeaderContent';
import { KeyInfos, NameTitle, UserSubTitle } from '../../../components/ObjectHeader/HeaderContent/HeaderTitles';
import PersonalData from '../../../components/Sections/PersonalData/PersonalData';
import Subscriptions from '../../../components/Sections/Subscriptions/Subscriptions';

/**
 * Convenience method for generating random avatar colors
 * @function
 * @private
 * @param {boolean} isLoading
 * @returns {ui5.webcomponents.react.Avar.backgroundColor.Accent} An Accent UI5 Color or PlaceHolder
 */
const generateRandomColor = (isLoading) => {
  return isLoading ? 'Placeholder' : `Accent${Math.floor(Math.random() * 10 + 1)}`;
};

/**
 * Split-Code for Details Page
 * @memberof MasterDetail
 * @function
 * @private
 * @param {*} props
 * @return {ui5.webcomponents.react.ObjectPage} Details Page
 */
function Detail(props) {
  const { t } = useTranslation();

  return (
    <div slot={props.slot} style={{ display: 'flex', flexDirection: 'column', maxHeight: '100vh' }}>
      <ObjectPage
        image={<Avatar icon="customer" backgroundColor={generateRandomColor()} />}
        title={NameTitle()}
        subTitle={UserSubTitle()}
        keyInfos={<KeyInfos />}
        headerContent={<HeaderContent />}
        selectedSectionId="personalData"
        headerActions={<HeaderActions onClose={props.onClose} onFullScreen={props.onFullScreen} isFullScreen={props.isFullScreen} />}
      >
        <ObjectPageSection aria-label={t('personalDataSectionTitle')} id="personalData" title={t('personalDataSectionTitle')}>
          <PersonalData />
        </ObjectPageSection>
        <ObjectPageSection aria-label={t('subscriptionsSectionTitle')} id="subscriptions" title={t('subscriptionsSectionTitle')}>
          <Subscriptions />
        </ObjectPageSection>
      </ObjectPage>
    </div>
  );
}

export default Detail;
