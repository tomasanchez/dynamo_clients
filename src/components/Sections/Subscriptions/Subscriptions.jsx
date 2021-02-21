import React from 'react';
import { List } from '@ui5/webcomponents-react/lib/List';
import { StandardListItem } from '@ui5/webcomponents-react/lib/StandardListItem';
import { useTranslation } from 'react-i18next';
import OverflowToolbar from '../../OverflowToolbar/OverflowToolbar';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import { Formatter } from '../../../model/formatter';

const Subscription = (props) => {
  const { t } = useTranslation();
  const { name = 'Activity', status = 'Status', expirationDate = new Date() } = props.data;
  return (
    <StandardListItem slot={props.slot} icon="soccer" info={status} description={`${t('subscriptionExpiration')}: ${Formatter.toDate(expirationDate)}`}>
      <Title level="H4">{Formatter.toTitle(name)}</Title>
    </StandardListItem>
  );
};

const NoDataItem = (props) => {
  return (
    <StandardListItem slot={props.slot} type="Inactive" style={{ alignContent: 'center', textAlign: 'center' }}>
      <Label>{props.text}</Label>
    </StandardListItem>
  );
};

const Subscriptions = (props) => {
  const { t } = useTranslation();
  const { subscriptions = [{}, {}], edit = false } = props;
  return (
    <List noDataText={t('subscriptionsNoData')} header={<OverflowToolbar title={t('subscriptionsListHeader')} count={subscriptions.length} add={edit} />}>
      {subscriptions.length > 0 ? subscriptions.map((oSubscription, i) => <Subscription key={i} data={oSubscription} />) : <NoDataItem text={t('subscriptionsNoData')} />}
    </List>
  );
};

export default Subscriptions;
