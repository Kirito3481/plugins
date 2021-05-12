export function register() {
  R.GameCode('LDJ');

  R.Unhandled((info, data, send) => {
    console.log(info.module, info.method);
    console.log(U.toXML(data));

    return send.deny();
  });
}
