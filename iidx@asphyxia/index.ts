import {
  common,
  gameSystem,
  getConvention,
  getShopName,
  saveShopName,
  setConvention,
  streamingCommon
} from './handlers/common';
import {get, getRank, reg, save} from './handlers/profile';

export function register() {
  R.GameCode('LDJ');

  const MultiRoute = (module: string, handler: EPR | boolean) => {
    R.Route(`IIDX28${module}`, handler);
  };

  MultiRoute('gameSystem.systemInfo', gameSystem);
  MultiRoute('streaming.common', streamingCommon);

  MultiRoute('pc.common', common);
  MultiRoute('pc.get', get);
  MultiRoute('pc.reg', reg);
  MultiRoute('pc.save', save);
  MultiRoute('pc.delete', true);
  MultiRoute('pc.logout', true);
  MultiRoute('pc.playstart', true);
  MultiRoute('pc.visit', (_, __, send) => {
    return send.object(K.ATTR({ anum: '0', snum: '0', pnum: '0', aflg: '0', sflg: '0', pflg: '0' }));
  });

  MultiRoute('music.getrank', getRank);

  MultiRoute('shop.getname', getShopName);
  MultiRoute('shop.savename', saveShopName);
  MultiRoute('shop.sentinfo', true);
  MultiRoute('shop.getconvention', getConvention);
  MultiRoute('shop.setconvention', setConvention);

  R.Unhandled((info, data, send) => {
    console.log(info.module, info.method);
    console.dir(data, { depth: null });

    return send.deny();
  });
}
