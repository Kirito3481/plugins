import {
  gameSystem_systemInfo,
  shop_getname,
  shop_sendescapepackageinfo,
} from './handlers/common';
import * as pc from './handlers/pc';
import * as music from './handlers/music';

export const register = () => {
  R.GameCode('LDJ');

  const GameRoute = (method: string, handler: boolean | EamusePluginRoute) => {
    R.Route(`IIDX26${method}`, handler);
    R.Route(`IIDX27${method}`, handler);
  };

  GameRoute('shop.getname', shop_getname);
  GameRoute('shop.savename', true);
  GameRoute('shop.sentinfo', true);
  GameRoute('shop.sendescapepackageinfo', shop_sendescapepackageinfo);

  GameRoute('gameSystem.systemInfo', gameSystem_systemInfo);

  GameRoute('pc.playstart', true);
  GameRoute('pc.playend', true);
  GameRoute('pc.delete', true);
  GameRoute('pc.oldget', pc.oldget);
  GameRoute('pc.reg', pc.reg);
  GameRoute('pc.get', pc.get);
  GameRoute('pc.visit', pc.visit);
  GameRoute('pc.save', pc.save);
  GameRoute('pc.logout', true);

  GameRoute('music.getrank', music.getrank);

  R.Unhandled((req, data, send) => {
    console.log(U.toXML({ [req.module]: data }));
    return send.object(K.ATTR({ status: '110' }));
  });
};
