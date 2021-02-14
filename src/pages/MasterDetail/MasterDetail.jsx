import React, { useState } from 'react';
import { FlexibleColumnLayout } from '@ui5/webcomponents-react/lib/FlexibleColumnLayout';
import oMoviesSet from '../../util/localservices/mockdata/movies';
import oCastSet from '../../util/localservices/mockdata/cast';
import { FCLLayout } from '@ui5/webcomponents-react/lib/FCLLayout';
import Master from './Master/Master';
import Detail from './Detail/Detail';

/**
 * Convenience array for switching layout
 * @readonly
 * @private
 */
const aLayouts = {
  masterFs: FCLLayout.OneColumn,
  twoColumns: FCLLayout.TwoColumnsMidExpanded,
  detailsFs: FCLLayout.MidColumnFullScreen,
};

/**
 * Master-Detail Page Layout
 * @function
 * @public
 * @returns {ui5.webcomponents.reac.FlexibleColumnLayout} A master-detail page
 */
const MasterDetail = () => {
  const [sLayout, setLayout] = useState(FCLLayout.OneColumn);
  const [selectedMovie, setSelectedMovie] = useState(oMoviesSet.results[0]);
  const [selectedCast, setSelectedCast] = useState(oCastSet.results[0]);

  const onCloseDetails = () => {
    setLayout(FCLLayout.OneColumn);
  };

  const onStartColumnClick = (e) => {
    try {
      setSelectedMovie(oMoviesSet.results.find((item) => item.movie === e.detail.item.dataset.movie));
    } catch (err) {
      console.log(err);
    } finally {
      setLayout(aLayouts['twoColumns']);
    }
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
    />
  );
};

export default MasterDetail;
