import React from 'react';
import { List } from '@ui5/webcomponents-react/dist/List';
import { CustomListItem } from '@ui5/webcomponents-react/dist/CustomListItem';
import { Text } from '@ui5/webcomponents-react/dist/Text';
import { Icon } from '@ui5/webcomponents-react/dist/Icon';
import { spacing } from '@ui5/webcomponents-react-base';
import { FlexBox } from '@ui5/webcomponents-react/dist/FlexBox';
import { FlexBoxJustifyContent } from '@ui5/webcomponents-react/dist/FlexBoxJustifyContent';
import PopoverInfo from '../Info/PopoverInfo';
import { FlexBoxAlignItems } from '@ui5/webcomponents-react/dist/FlexBoxAlignItems';

const style = {
  flexbox: {
    width: '100%',
  },
  popover: {
    width: '35%',
  },
};

const PopoverListItems = ({ popoverRef, title, items }) => {
  return (
    <div data-testid="popoverListItems-wrapper">
      <PopoverInfo popoverRef={popoverRef} title={title} style={style.popover}>
        <List data-testid="popoverListItems-listOfElements-wrapper">
          {items.map((item, index) => {
            return (
              <CustomListItem key={index} onClick={item.onClick}>
                <FlexBox justifyContent={FlexBoxJustifyContent.Stretch} alignItems={FlexBoxAlignItems.Start} style={style.flexbox}>
                  <Icon style={{ width: '1.5rem', ...spacing.sapUiTinyMarginBeginEnd }} name={item.icon} />
                  <Text style={spacing.sapUiSmallMarginEnd}>{item.description}</Text>
                  <div>{item.children}</div>
                </FlexBox>
              </CustomListItem>
            );
          })}
        </List>
      </PopoverInfo>
    </div>
  );
};

export default PopoverListItems;
