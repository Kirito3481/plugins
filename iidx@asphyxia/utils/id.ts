export class ID {
  static foramtExtId(extid: number): string {
    let str = String(extid);
    str = str.padStart(8, '0');
    return `${str.slice(0, 4)}-${str.slice(4, 8)}`;
  }
}
