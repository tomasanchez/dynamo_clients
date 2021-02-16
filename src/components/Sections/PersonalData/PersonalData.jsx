import React from 'react';
import { Form } from '@ui5/webcomponents-react/lib/Form';
import { FormItem } from '@ui5/webcomponents-react/lib/FormItem';
import { Text } from '@ui5/webcomponents-react/lib/Text';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import { useTranslation } from 'react-i18next/';
import { FormGroup } from '@ui5/webcomponents-react/lib/FormGroup';
import { KeyInfos, NameTitle, UserSubTitle } from '../../ObjectHeader/HeaderContent/HeaderTitles';
import { Formatter } from '../../../model/formatter';
import { Title } from '@ui5/webcomponents-react';

const style = {
  title: {
    marginTop: '1rem',
    marginBottom: '0.35rem',
  },
};

/**
 * Personal Data Form
 * @constructor
 * @public
 * @returns {ui5.webcomponents.react.Form} a Form layout
 */
function PersonalData() {
  const { t } = useTranslation();
  return (
    <Form title={t('personalDataSectionTitle')}>
      <FormItem label={t('idLabel')}>
        <Text>{Formatter.toLocaleNumber(40000000)}</Text>
      </FormItem>
      <FormItem label={<Label>{t('nameLabel')}</Label>}>
        <Text>{NameTitle()}</Text>
      </FormItem>
      <FormItem label={t('addressLabel')}>
        <Text>Fake Street 212th, Greater Buenos Aires</Text>
      </FormItem>
      <FormItem label={t('birthdayLabel')}>
        <Text>{new Date().toLocaleDateString()}</Text>
      </FormItem>
      <FormGroup>
        <Title level="H3" style={style.title}>
          {t('contactFormGroupTitle')}
        </Title>
        <FormItem label={t('celphoneLabel')}>
          <Text>11 6610-7356</Text>
        </FormItem>
        <FormItem label={t('phoneLabel')}>
          <Text>4000-2000</Text>
        </FormItem>
        <FormItem label={t('mailLabel')}>
          <Text>tosanchez@frba.utn.edu.ar</Text>
        </FormItem>
      </FormGroup>
      <FormGroup>
        <Title level="H3" style={style.title}>
          {t('otherFormGroupTitle')}
        </Title>
        <FormItem label={t('userNameLabel')}>
          <Text>{UserSubTitle()}</Text>
        </FormItem>
        <FormItem label={t('joinDateLabel')}>
          <Text>{new Date().toLocaleDateString()}</Text>
        </FormItem>
        <FormItem label={t('statusLabel')}>
          <KeyInfos />
        </FormItem>
      </FormGroup>
    </Form>
  );
}

export default PersonalData;
