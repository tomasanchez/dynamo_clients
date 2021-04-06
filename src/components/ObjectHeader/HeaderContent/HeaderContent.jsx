import React from 'react';
import { FlexBox } from '@ui5/webcomponents-react/dist/FlexBox';
import { Link } from '@ui5/webcomponents-react/dist/Link';
import { Label } from '@ui5/webcomponents-react/dist/Label';
import { ProgressIndicator } from '@ui5/webcomponents-react/dist/ProgressIndicator';
import { useTranslation } from 'react-i18next/';

/**
 * Header Content for an object page wih data
 * @function
 * @public
 * @param {object.Customer} data object of type like Customer
 * @return {ui5.webcomponents.react.FlexBox} A FlexBox Layout
 */
const HeaderContent = ({ data = { tel: '1166107356', mail: 'tosanchez@frba.utn.edu.ar' } }) => {
  const { t } = useTranslation();
  return (
    <>
      <FlexBox direction="Column">
        <Link href={`tel:+549${data.tel}`} tooltip={t('telTooltip')}>{`+54 9 ${data.tel}`}</Link>
        <Link href={`mailto:${data.mail}`} tooltip={t('mailTooltip')}>
          {data.mail}
        </Link>
        <Link href={`https://wa.me/549${data.tel}`} tooltip={data.tel}>
          {t('quickWapp')}
        </Link>
      </FlexBox>
      <FlexBox direction="Column" style={{ width: '200px' }}>
        <Label>Achieved Goals</Label>
        <ProgressIndicator value={80} valueState="Success" />
      </FlexBox>
      <FlexBox direction="Column">
        <Label>San Jose</Label>
        <Label>California, USA</Label>
      </FlexBox>
    </>
  );
};

export default HeaderContent;
