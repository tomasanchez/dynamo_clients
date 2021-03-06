import React from 'react';

import { Popover } from '@ui5/webcomponents-react/dist/Popover';
import { PlacementType } from '@ui5/webcomponents-react/dist/PlacementType';
import { FlexBoxDirection } from '@ui5/webcomponents-react/dist/FlexBoxDirection';
import { Title } from '@ui5/webcomponents-react/dist/Title';
import { FlexBox } from '@ui5/webcomponents-react/dist/FlexBox';
import { spacing } from '@ui5/webcomponents-react-base';

const PopoverInfo = ({ popoverRef, placementType = PlacementType.Bottom, title, ...props }) => {
  return (
    <Popover data-testid="popoverInfo-wrapper" ref={popoverRef} placementType={placementType}>
      <FlexBox direction={FlexBoxDirection.Column}>
        <div className="popover-header">
          {title && (
            <Title data-testid="popoverInfo-title-wrapper" style={spacing.sapUiContentPadding}>
              {title}
            </Title>
          )}
        </div>
        <div className="popover-content">{props.children}</div>
      </FlexBox>
    </Popover>
  );
};

export default PopoverInfo;
