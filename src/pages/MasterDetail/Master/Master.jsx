import React, { useState } from 'react';
import { List } from '@ui5/webcomponents-react/lib/List';
import { StandardListItem } from '@ui5/webcomponents-react/lib/StandardListItem';
import { useTranslation } from 'react-i18next/';
import OverflowToolbar from '../../../components/OverflowToolbar/OverflowToolbar';

function Master(props) {
  const { t } = useTranslation();
  const aData = props.data;
  const [sQuery, setQuery] = useState('');
  const aListData = aData.filter((oEntity) => oEntity.movie.toUpperCase().includes(sQuery));

  const onFilter = (oEvent) => {
    setQuery(oEvent.target.value.toUpperCase());
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
