import React from 'react';
import { ObjectStatus } from '@ui5/webcomponents-react/lib/ObjectStatus';
import { Formatter } from '../../../model/formatter';

/**
 *
 * @param {string} objectStatus
 */
export const KeyInfos = ({ paymentStatus = '', paymentStatusText = 'Inactive' }) => {
  return <ObjectStatus state={Formatter.toPaymentState(paymentStatus)}>{paymentStatusText}</ObjectStatus>;
};

/**
 * Creates a formatted subtitlte for an User ID
 * @constructor
 * @public
 * @param {string} user the user id
 * @returns {string} formatted user
 */
export const UserSubTitle = (user = 'tomsa9') => {
  return Formatter.toUser(user);
};

/**
 * Creates a formatted Title for a user name.
 * @constructor
 * @public
 * @param {string} name The name to be displayed
 * @param {string} lastName The last name to be displayed
 * @returns {string} formatted name and last name
 */
export const NameTitle = (name = 'tomás', lastName = 'sánchez') => {
  return `${Formatter.toTitle(name)} ${Formatter.toTitle(lastName)}`;
};
