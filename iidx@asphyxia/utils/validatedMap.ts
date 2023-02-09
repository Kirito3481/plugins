const isFloat = (val: number) => Number(val) === val && val % 1 !== 0;

class ValidatedMap extends Map {
  constructor() {
    super();
  }

  getInt(name: string, def = 0) {
    const val = this.get(name);
    if (val == null) return def;
    if (typeof val !== 'number') return def;
    return val;
  }

  getBigInt(name: string, def = BigInt(0)) {
    const val = this.get(name);
    if (val == null) return def;
    if (typeof val !== 'bigint') return def;
    return val;
  }

  getFloat(name: string, def = 0.0) {
    const val = this.get(name);
    if (val == null) return def;
    if (!isFloat(val)) return def;
    return parseFloat(val);
  }

  getBool(name: string, def = false) {
    const val = this.get(name);
    if (val == null) return def;
    if (typeof val !== 'boolean') return def;
    return val;
  }

  getStr(name: string, def = '') {
    const val = this.get(name);
    if (val == null) return def;
    if (typeof val !== 'string') return def;
    return val;
  }

  getBytes(name: string, def = Buffer.alloc(0)) {
    const val = this.get(name);
    if (val == null) return def;
    if (!Buffer.isBuffer(val)) return def;
    return val;
  }

  getIntArray(name: string, length: number, def?: number[]) {
    if (def == null) def = new Array(length).fill(0);
  }
}
