export declare type Params = {
  admCd: string;
  rnMgtSn: string;
  udrtYn: string;
  buldMnnm: string;
  buldSlno: string;
};
export declare type TransGeolocation = {
  translate(params: Params): Promise<Result | null>;
  success: boolean;
};
export declare type Result = {
  latitude: number;
  longitude: number;
  altitude: number;
  x: number;
  y: number;
};
/**
 * Juso API to Geolocation data
 * @constructor
 * @this {TransGeolocation}
 * @param {string} apiKey Juso Coord. API key
 * @method `translate()` translation geolocation
 * @version 0.0.1
 */
export declare const TransGeolocation: new (apiKey: string) => TransGeolocation;
//# sourceMappingURL=translator.d.ts.map
