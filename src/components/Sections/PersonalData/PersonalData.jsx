import React from 'react';
import { Form } from '@ui5/webcomponents-react/lib/Form';
import { FormItem } from '@ui5/webcomponents-react/lib/FormItem';
import { Text } from '@ui5/webcomponents-react/lib/Text';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import { Input } from '@ui5/webcomponents-react/lib/Input';
import { useTranslation } from 'react-i18next/';
import { FormGroup } from '@ui5/webcomponents-react/lib/FormGroup';
import { KeyInfos, NameTitle, UserSubTitle } from '../../ObjectHeader/HeaderContent/HeaderTitles';

function PersonalData() {
  const { t } = useTranslation();
  return (
    <Form title={t('personalDataSectionTitle')}>
      <FormItem label={<Label>{t('nameLabel')}</Label>}>
        <Text>{NameTitle()}</Text>
      </FormItem>
      <FormItem label={t('addressLabel')}>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At voluptatum a sint perferendis deserunt recusandae deleniti, nesciunt dolor quod corrupti corporis itaque laudantium natus
          temporibus enim necessitatibus omnis assumenda totam.
        </Text>
      </FormItem>
      <FormGroup title={t('contactFormGroupTitle')}>
        <FormItem label={t('celphoneLabel')}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quasi beatae maxime quidem recusandae ad ipsa possimus inventore, itaque fugiat, nulla quaerat cumque voluptate
            debitis obcaecati in excepturi doloribus aliquam?
          </Text>
        </FormItem>
        <FormItem label={t('phoneLabel')}>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore beatae fuga, incidunt eius perspiciatis optio voluptate praesentium culpa? Voluptates dolorem error deleniti,
            perspiciatis aliquid totam ipsum placeat aliquam obcaecati aperiam.
          </Text>
        </FormItem>
        <FormItem label={t('mailLabel')}>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, vero quis rerum ipsa fugit nostrum exercitationem itaque qui, repudiandae eos porro, minus magni. Vitae sed eveniet iure
            quas aspernatur blanditiis.
          </Text>
        </FormItem>
      </FormGroup>
      <FormGroup title={t('otherFormGroupTitle')}>
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
