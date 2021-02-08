import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { getUrl } from '../util/browser/BrowserProvider';

import { BusyIndicator } from '@ui5/webcomponents-react/lib/BusyIndicator';
import RouteWithAuthorizationRestriction from '../auth/RouteWithAuthorizationRestriction';

const NotFound = lazy(() => import('../pages/Fallback/NotFound'));
const Buggy = lazy(() => import('../pages/Fallback/Buggy'));
const MasterDetail = lazy(() => import('../pages/MasterDetail/MasterDetail'));

const Routes = () => {
  return (
    <Suspense fallback={<BusyIndicator active />}>
      <BrowserRouter basename={getUrl('BASEURL')}>
        <Switch>
          <Redirect path={getUrl('HOME')} push exact to={getUrl('MASTER')} />
          <Route path={getUrl('MASTER')} exac component={MasterDetail} />
          <Route path={getUrl('BUGGY')} exact component={Buggy} />
          <Route path={getUrl('NOT_FOUND')} exact component={NotFound} />
          <Route path={getUrl('ANY')} component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default Routes;
