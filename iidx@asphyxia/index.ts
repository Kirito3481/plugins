import {
  gameSystem_systemInfo,
  shop_getname,
  shop_sendescapepackageinfo,
} from './handlers/common';
import * as pc from './handlers/pc';
import * as music from './handlers/music';

export const register = () => {
  R.GameCode('LDJ');

  R.Route('IIDX27shop.getname', shop_getname);
  R.Route('IIDX27shop.savename', true);
  R.Route('IIDX27shop.sentinfo', true);
  R.Route('IIDX27shop.sendescapepackageinfo', shop_sendescapepackageinfo);

  R.Route('IIDX27gameSystem.systemInfo', gameSystem_systemInfo);

  R.Route('IIDX27pc.playstart', true);
  R.Route('IIDX27pc.playend', true);
  R.Route('IIDX27pc.delete', true);
  R.Route('IIDX27pc.oldget', pc.oldget);
  R.Route('IIDX27pc.reg', pc.reg);
  R.Route('IIDX27pc.get', pc.get);
  R.Route('IIDX27pc.visit', pc.visit);
  R.Route('IIDX27pc.save', pc.save);
  R.Route('IIDX27pc.logout', true);

  R.Route('IIDX27music.getrank', music.getrank);

  R.Unhandled((req, data, send) => {
    console.log(U.toXML({ [req.module]: data }));
    return send.object(K.ATTR({ status: '110' }));
  });
};
