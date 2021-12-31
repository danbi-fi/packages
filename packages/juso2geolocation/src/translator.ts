import axios from "axios";
import { isNull, isEmpty, isUndefined } from "lodash";

export type Params = {
  admCd: string;
  rnMgtSn: string;
  udrtYn: string;
  buldMnnm: string;
  buldSlno: string;
};

export type TransGeolocation = {
  translate(params: Params): Promise<Result | null>;
  success: boolean;
};

export type Result = {
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

export const TransGeolocation = function (this: TransGeolocation, apiKey: string) {
  if (!(this instanceof TransGeolocation)) {
    return new TransGeolocation(apiKey);
  }
  Object.defineProperty(this, "success", {
    get() {
      return this.value || false;
    },
    set(val: boolean) {
      this.value = val;
    },
  });
  this.translate = async function (params: Params) {
    try {
      const { admCd, rnMgtSn, udrtYn, buldMnnm, buldSlno } = params;
      // 좌표검색 API 추출
      const { data } = await axios.post("https://www.juso.go.kr/addrlink/addrCoordApiJsonp.do", null, {
        params: {
          confmKey: apiKey,
          admCd,
          rnMgtSn,
          udrtYn,
          buldMnnm,
          buldSlno,
          resultType: "json",
        },
      });

      const jsonRes = eval(data);
      if (isEmpty(jsonRes) || isNull(jsonRes) || isUndefined(jsonRes)) {
        this.success = false;
        return null;
      }
      const { results } = jsonRes;
      if (isEmpty(results) || isNull(results) || isUndefined(results)) {
        this.success = false;
        return null;
      }
      const { juso } = results;
      if (isEmpty(juso) || isNull(juso) || isUndefined(juso)) {
        this.success = false;
        return null;
      }
      const [{ entX, entY }] = juso;
      // EPSG:5179 (GPRS80) => EPSG:4326(WGS84) 변환
      const { data: transData } = await axios.get("https://epsg.io/trans", {
        params: {
          s_srs: 5179, // EPSG:5179 Korea 2000 / Unified CS
          t_srs: 4326, // EPSG:4326 WGS 84
          x: parseFloat(entX),
          y: parseFloat(entY),
        },
      });
      if (isEmpty(transData) || isNull(transData) || isUndefined(transData)) {
        this.success = false;
        return null;
      }
      const { x, y, z } = transData;
      if (isNull(x) || isUndefined(x) || isNull(y) || isUndefined(y) || isNull(z) || isUndefined(z)) {
        this.success = false;
        return null;
      }
      this.success = true;
      return {
        latitude: parseFloat(y),
        longitude: parseFloat(x),
        altitude: parseFloat(z),
        x: parseFloat(entX),
        y: parseFloat(entY),
      };
    } catch (e) {
      // console.log(e);
      return null;
    }
  };
} as any as { new (apiKey: string): TransGeolocation };
