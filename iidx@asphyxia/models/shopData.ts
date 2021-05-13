export interface ShopData {
  collection: 'shopdata';

  shopName: string;
  shopArea: number;
  shopCloseTimeEnabled: boolean;
  shopCloseTimeHour: number;
  shopCloseTimeMinute: number;
  countryCode: string;
  regionCode: string;
  latitude: number;
  longitude: number;
}

export interface ShopConvention {
  collection: 'shopconvention';

  music0: number;
  music1: number;
  music2: number;
  music3: number;
  startTime: bigint;
  endTime: bigint;
  valid: boolean;
}
