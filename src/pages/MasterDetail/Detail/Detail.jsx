import { ObjectPageSection } from '@ui5/webcomponents-react/lib/ObjectPageSection';
import { ObjectPage } from '@ui5/webcomponents-react/lib/ObjectPage';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next/';
import HeaderActions from '../../../components/HeaderActions/HeaderActions';

function Detail(props) {
  const onClose = () => {
    props.onClose();
  };

  return (
    <div slot={props.slot}>
      <ObjectPage selectedSectionId="goals" headerActions={<HeaderActions onClose={props.onClose} />}>
        <ObjectPageSection aria-label="Goals" id="goals" title="Goals">
          <p>Hola</p>
        </ObjectPageSection>
      </ObjectPage>
    </div>
  );
}

export default Detail;
