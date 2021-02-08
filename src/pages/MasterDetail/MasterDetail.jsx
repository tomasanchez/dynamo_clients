import React, { useState } from 'react';
import { FlexibleColumnLayout } from '@ui5/webcomponents-react/lib/FlexibleColumnLayout';
import oMoviesSet from '../../util/localservices/mockdata/movies';
import oCastSet from '../../util/localservices/mockdata/cast';
import { FCLLayout } from '@ui5/webcomponents-react/lib/FCLLayout';
import { List, StandardListItem, Title } from '@ui5/webcomponents-react';
import Master from './Master/Master';
import Detail from './Detail/Detail';

const MasterDetail = () => {
  const [sLayout, setLayout] = useState(FCLLayout.OneColumn);
  const [selectedMovie, setSelectedMovie] = useState(oMoviesSet.results[0]);
  const [selectedCast, setSelectedCast] = useState(oCastSet.results[0]);

  const onCloseDetails = () => {
    setLayout(FCLLayout.OneColumn);
  };

  const onStartColumnClick = (e) => {
    setSelectedMovie(oMoviesSet.results.find((item) => item.movie === e.detail.item.dataset.movie));
    setLayout(FCLLayout.TwoColumnsMidExpanded);
  };

  const onMiddleColumnClick = (e) => {
    setSelectedCast(oCastSet.results.find((item) => item.name === e.detail.item.dataset.name));
    setLayout(FCLLayout.ThreeColumnsEndExpanded);
  };

  return (
    <FlexibleColumnLayout
      noArrows={false}
      layout={sLayout}
      style={{ maxHeight: '100vh' }}
      startColumn={<Master data={oMoviesSet.results} onItemClick={onStartColumnClick} />}
      midColumn={<Detail onClose={onCloseDetails} />}
      endColumn={<p>!!!!</p>}
    />
  );
};

export default MasterDetail;
