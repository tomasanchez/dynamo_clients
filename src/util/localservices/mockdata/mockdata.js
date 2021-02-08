import oCastSet from './cast';
import oMoviesSet from './movies';

const aEntities = [oCastSet, oMoviesSet];

const oMockModel = {
  aPaths: aEntities.map((oEntitySet) => oEntitySet.path),
  read: (sPath) => {
    var oEntitySet = this.aPaths.find((path) => path === sPath);
    return oEntitySet ? oEntitySet.results : [];
  },
};

export default oMockModel;
