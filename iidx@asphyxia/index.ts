import * as common from './handlers/common';
import * as pc from './handlers/pc';
import * as music from './handlers/music';
import * as grade from './handlers/grade';

export const register = () => {
  R.GameCode('LDJ');

  const GameRoute = (method: string, handler: boolean | EamusePluginRoute) => {
    R.Route(`IIDX29${method}`, handler);
  };

  GameRoute('shop.getname', common.shop_getname);
  GameRoute('shop.savename', true);
  GameRoute('shop.sentinfo', true);
  GameRoute('shop.sendescapepackageinfo', common.shop_sendescapepackageinfo);

  GameRoute('gameSystem.systemInfo', common.gameSystem_systemInfo);

  GameRoute('pc.common', pc.common);
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
  GameRoute('music.play', music.play);
  GameRoute('music.reg', music.reg);

  GameRoute('grade.raised', grade.raised);

  R.Unhandled((req, data, send) => {
    console.log(U.toXML({ [req.module]: data }));
    return send.object(K.ATTR({ status: '110' }));
  });
};
