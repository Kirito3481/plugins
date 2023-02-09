const isFloat = (val: number) => Number(val) === val && val % 1 !== 0;

export class ValidatedMap extends Map<string, any> {
  constructor(dict: Map<string, any> | any) {
    if (dict == null) dict = new Map<string, any>();
    if (!(dict instanceof Map)) dict = Object.entries(dict);
    super(dict);
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

  getIntArray(name: string, length: number, def?: number[]): number[] {
    if (def == null) def = new Array(length).fill(0);
    if (def.length !== length) throw new Error('Gave default of wrong length!');

    const val = this.get(name);
    if (val == null) return def;
    if (!Array.isArray(val)) return def;
    if (val.length !== length) return def;
    val.forEach(v => {
      if (typeof val !== 'number') return def;
    });
    return val;
  }

  getBigIntArray(name: string, length: number, def?: bigint[]): bigint[] {
    if (def == null) def = new Array(length).fill(BigInt(0));
    if (def.length !== length) throw new Error('Gave default of wrong length!');

    const val = this.get(name);
    if (val == null) return def;
    if (!Array.isArray(val)) return def;
    if (val.length !== length) return def;
    val.forEach(v => {
      if (typeof val !== 'bigint') return def;
    });
    return val;
  }

  getBoolArray(name: string, length: number, def?: boolean[]): boolean[] {
    if (def == null) def = new Array(length).fill(false);
    if (def.length !== length) throw new Error('Gave default of wrong length!');

    const val = this.get(name);
    if (val == null) return def;
    if (!Array.isArray(val)) return def;
    if (val.length !== length) return def;
    val.forEach(v => {
      if (typeof val !== 'boolean') return def;
    });
    return val;
  }

  getBytesArray(name: string, length: number, def?: Buffer[]): Buffer[] {
    if (def == null) def = new Array(length).fill(Buffer.alloc(0));
    if (def.length !== length) throw new Error('Gave default of wrong length!');

    const val = this.get(name);
    if (val == null) return def;
    if (!Array.isArray(val)) return def;
    if (val.length !== length) return def;
    val.forEach(v => {
      if (!Buffer.isBuffer(v)) return def;
    });
    return val;
  }

  getStrArray(name: string, length: number, def?: string[]): string[] {
    if (def == null) def = new Array(length).fill('');
    if (def.length !== length) throw new Error('Gave default of wrong length!');

    const val = this.get(name);
    if (val == null) return def;
    if (!Array.isArray(val)) return def;
    if (val.length !== length) return def;
    val.forEach(v => {
      if (typeof v !== 'string') return def;
    });
    return val;
  }

  getMap(name: string, def?: Map<string, any>): ValidatedMap {
    if (def == null) def = new Map();
    const validatedDefault = new ValidatedMap(def);

    const val = this.get(name);
    if (val == null) return validatedDefault;
    if (!(val instanceof Map)) return validatedDefault;
    return new ValidatedMap(val);
  }

  replaceInt(name: string, val: any) {
    if (val == null) return;
    if (typeof val !== 'number') return;
    this[name] = val;
  }

  replaceBigInt(name: string, val: any) {
    if (val == null) return;
    if (typeof val !== 'bigint') return;
    this[name] = val;
  }

  replaceFloat(name: string, val: any) {
    if (val == null) return;
    if (!isFloat(val)) return;
    this[name] = val;
  }

  replaceBool(name: string, val: any) {
    if (val == null) return;
    if (typeof val !== 'boolean') return;
    this[name] = val;
  }

  replaceStr(name: string, val: any) {
    if (val == null) return;
    if (typeof val !== 'string') return;
    this[name] = val;
  }

  replaceBytes(name: string, val: any) {
    if (val == null) return;
    if (!Buffer.isBuffer(val)) return;
    this[name] = val;
  }

  replaceIntArray(name: string, length: number, val: any) {
    if (val == null) return;
    if (!Array.isArray(val)) return;
    if (val.length !== length) return;
    val.forEach(v => {
      if (typeof v !== 'number') return;
    });
    this[name] = val as number[];
  }

  replaceBigIntArray(name: string, length: number, val: any) {
    if (val == null) return;
    if (!Array.isArray(val)) return;
    if (val.length !== length) return;
    val.forEach(v => {
      if (typeof v !== 'bigint') return;
    });
    this[name] = val as bigint[];
  }

  replaceBoolArray(name: string, length: number, val: any) {
    if (val == null) return;
    if (!Array.isArray(val)) return;
    if (val.length !== length) return;
    val.forEach(v => {
      if (typeof v !== 'boolean') return;
    });
    this[name] = val as boolean[];
  }

  replaceBufferArray(name: string, length: number, val: any) {
    if (val == null) return;
    if (!Array.isArray(val)) return;
    if (val.length !== length) return;
    val.forEach(v => {
      if (!Buffer.isBuffer(v)) return;
    });
    this[name] = val as Buffer[];
  }

  replaceStrArray(name: string, length: number, val: any) {
    if (val == null) return;
    if (!Array.isArray(val)) return;
    if (val.length !== length) return;
    val.forEach(v => {
      if (typeof v !== 'string') return;
    });
    this[name] = val as string[];
  }

  replaceMap(name: string, val: any) {
    if (val == null) return;
    if (!(val instanceof Map)) return;
    this[name] = val;
  }

  incrementInt(name: string) {
    if (!this.has(name)) this[name] = 1;
    else if (typeof this[name] !== 'number') this[name] = 1;
    else this[name] = this[name] + 1;
  }
}