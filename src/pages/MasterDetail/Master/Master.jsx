import React, { useState } from 'react';
import { List } from '@ui5/webcomponents-react/dist/List';
import { StandardListItem } from '@ui5/webcomponents-react/dist/StandardListItem';
import { useTranslation } from 'react-i18next/';
import OverflowToolbar from '../../../components/OverflowToolbar/OverflowToolbar';

/**
 * MasterPages
 * @memberof MasterDetail
 * @private
 * @param {any} props
 * @returns {ui5.webcomponents.react.List} a Master-List
 */
function Master(props) {
  const aData = props.data;
  const [sQuery, setQuery] = useState('');
  const aListData = aData.filter((oEntity) => oEntity.movie.toUpperCase().includes(sQuery));

  const onFilter = (oEvent) => {
    try {
      setQuery(oEvent.target.value.toUpperCase());
    } catch (err) {
      setQuery('');
    }
  };

  return (
    <div slot={props.slot}>
      <List header={<OverflowToolbar count={aListData.length} onFilter={onFilter} />} onItemClick={props.onItemClick}>
        {aData &&
          aListData.map((oEntity, i) => (
            <StandardListItem key={`headerLI-${i}-${oEntity.movie}`} description={oEntity.genre} data-movie={oEntity.movie}>
              {oEntity.movie}
            </StandardListItem>
          ))}
      </List>
    </div>
  );
}

export default Master;
