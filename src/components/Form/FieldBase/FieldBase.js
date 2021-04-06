import React from 'react';

import { FlexBox } from '@ui5/webcomponents-react/dist/FlexBox';
import { FlexBoxDirection } from '@ui5/webcomponents-react/dist/FlexBoxDirection';
import Label from '../Label/Label';

const FieldBase = ({ labelText, ...props }) => {
  return (
    <FlexBox data-testid="fieldbase-wrapper" direction={props.direction ? props.direction : FlexBoxDirection.Column} {...props}>
      {labelText && (
        <Label required={props.required} for={props.for} showColon={props.showColon}>
          {labelText}
        </Label>
      )}
      {props.children}
    </FlexBox>
  );
};

export default FieldBase;
