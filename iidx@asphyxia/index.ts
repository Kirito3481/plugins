import {
  gameSystem_systemInfo,
  shop_getname,
  shop_sendescapepackageinfo,
} from './handlers/common';
import * as pc from './handlers/pc';

export const register = () => {
  R.GameCode('LDJ');

  R.Route('IIDX27shop.getname', shop_getname);
  R.Route('IIDX27shop.savename', true);
  R.Route('IIDX27shop.sendinfo', true);
  R.Route('IIDX27shop.sendescapepackageinfo', shop_sendescapepackageinfo);

  R.Route('IIDX27gameSystem.systemInfo', gameSystem_systemInfo);

  R.Route('IIDX27pc.playstart', true);
  R.Route('IIDX27pc.playend', true);
  R.Route('IIDX27pc.delete', true);
  R.Route('IIDX27pc.oldget', pc.oldget);

  R.Unhandled((req, data, send) => {
    console.dir(data, { depth: null });
    return send.object(K.ATTR({ status: '110' }));
  });
};
