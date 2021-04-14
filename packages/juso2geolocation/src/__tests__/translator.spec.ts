import { TransGeolocation, Params } from "..";
import { config } from "dotenv";
import axios from "axios";

config();

const params: Params = {
  admCd: "1120011400",
  rnMgtSn: "112003103004",
  udrtYn: "0",
  buldSlno: "0",
  buldMnnm: "99",
};
const res = {
  latitude: 37.54947013,
  longitude: 127.05118739,
  altitude: 0,
  x: 960355.5014496567,
  y: 1950109.3230320513,
};

const jusoResolvedData = {
  results: {
    common: { errorMessage: "정상", totalCount: "1", errorCode: "0" },
    juso: [
      {
        buldMnnm: "99",
        rnMgtSn: "112003103004",
        bdNm: "서울숲AK밸리 지식산업센터",
        entX: "960355.5014496567",
        entY: "1950109.3230320513",
        admCd: "1120011400",
        bdMgtSn: "1120011400100130207008548",
        buldSlno: "0",
        udrtYn: "0",
      },
    ],
  },
};

const epsgResolvedData = { x: "127.05118739", y: "37.54947013", z: "0.00000000" };

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("translate test", () => {
  let testTranslator: TransGeolocation;
  mockedAxios.post.mockResolvedValue({ data: jusoResolvedData });
  mockedAxios.get.mockResolvedValue({ data: epsgResolvedData });
  beforeEach(() => {
    const apiKey = process.env.ADDRESS_COORD_API_KEY;
    testTranslator = new TransGeolocation(apiKey);
  });
  it("traslate() should be return exact value", async () => {
    const data = await testTranslator.translate(params);
    expect(data).toEqual(res);
  });
  it("should have success default as false", async () => {
    expect(testTranslator.success).toBe(false);
  });
  it("should have success true", async () => {
    await testTranslator.translate(params);
    expect(testTranslator.success).toBe(true);
  });
  it("should have success false when Juso API response data is null", async () => {
    mockedAxios.post.mockResolvedValue({ data: null });
    await testTranslator.translate(params);
    expect(testTranslator.success).toBe(false);
  });
  it("should have success false when Juso API response data is empty", async () => {
    mockedAxios.post.mockResolvedValue({ data: {} });
    await testTranslator.translate(params);
    expect(testTranslator.success).toBe(false);
  });
  it("should have success false when Juso API response data is undefined", async () => {
    mockedAxios.post.mockResolvedValue({ data: undefined });
    await testTranslator.translate(params);
    expect(testTranslator.success).toBe(false);
  });
  it("should have success false when Juso API response data.results is null", async () => {
    mockedAxios.post.mockResolvedValue({ data: { results: null } });
    await testTranslator.translate(params);
    expect(testTranslator.success).toBe(false);
  });
  it("should have success false when Juso API response data.results is empty", async () => {
    mockedAxios.post.mockResolvedValue({ data: { results: {} } });
    await testTranslator.translate(params);
    expect(testTranslator.success).toBe(false);
  });
  it("should have success false when Juso API response data.results is undefined", async () => {
    mockedAxios.post.mockResolvedValue({ data: { results: undefined } });
    await testTranslator.translate(params);
    expect(testTranslator.success).toBe(false);
  });
  it("should have success false when Juso API response data.results.juso is null", async () => {
    mockedAxios.post.mockResolvedValue({ data: { results: { juso: null } } });
    await testTranslator.translate(params);
    expect(testTranslator.success).toBe(false);
  });
  it("should have success false when Juso API response data.results.juso is empty", async () => {
    mockedAxios.post.mockResolvedValue({ data: { results: { juso: {} } } });
    await testTranslator.translate(params);
    expect(testTranslator.success).toBe(false);
  });
  it("should have success false when Juso API response data.results.jsuo is undefined", async () => {
    mockedAxios.post.mockResolvedValue({ data: { results: { juso: undefined } } });
    await testTranslator.translate(params);
    expect(testTranslator.success).toBe(false);
  });
  it("should return false when Juso API failed", async () => {
    mockedAxios.post.mockRejectedValue("Network error: Something went wrong");
    await testTranslator.translate(params);
    expect(testTranslator.success).toBe(false);
  });
  it("should have success false when EPSG API response data is null", async () => {
    mockedAxios.get.mockResolvedValue({ data: null });
    await testTranslator.translate(params);
    expect(testTranslator.success).toBe(false);
  });
  it("should have success false when EPSG API response data is empty", async () => {
    mockedAxios.get.mockResolvedValue({ data: {} });
    await testTranslator.translate(params);
    expect(testTranslator.success).toBe(false);
  });
  it("should have success false when EPSG API response data is undefined", async () => {
    mockedAxios.get.mockResolvedValue({ data: undefined });
    await testTranslator.translate(params);
    expect(testTranslator.success).toBe(false);
  });
  it("should have success false when EPSG API response data.x is null", async () => {
    mockedAxios.get.mockResolvedValue({ data: { x: null, y: 0, z: 0 } });
    await testTranslator.translate(params);
    expect(testTranslator.success).toBe(false);
  });
  it("should have success false when EPSG API response data.x is undefined", async () => {
    mockedAxios.get.mockResolvedValue({ data: { x: undefined, y: 0, z: 0 } });
    await testTranslator.translate(params);
    expect(testTranslator.success).toBe(false);
  });
  it("should have success false when EPSG API response data.y is null", async () => {
    mockedAxios.get.mockResolvedValue({ data: { x: 0, y: null, z: 0 } });
    await testTranslator.translate(params);
    expect(testTranslator.success).toBe(false);
  });
  it("should have success false when EPSG API response data.y is undefined", async () => {
    mockedAxios.get.mockResolvedValue({ data: { x: 0, y: undefined, z: 0 } });
    await testTranslator.translate(params);
    expect(testTranslator.success).toBe(false);
  });
  it("should have success false when EPSG API response data.z is null", async () => {
    mockedAxios.get.mockResolvedValue({ data: { x: 0, y: 0, z: null } });
    await testTranslator.translate(params);
    expect(testTranslator.success).toBe(false);
  });
  it("should have success false when EPSG API response data.z is undefined", async () => {
    mockedAxios.get.mockResolvedValue({ data: { x: 0, y: 0, z: undefined } });
    await testTranslator.translate(params);
    expect(testTranslator.success).toBe(false);
  });
  it("should return false when EPSG API failed", async () => {
    mockedAxios.get.mockRejectedValue("Network error: Something went wrong");
    await testTranslator.translate(params);
    expect(testTranslator.success).toBe(false);
  });
});
