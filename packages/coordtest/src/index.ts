import { TransGeolocation, Params } from "@danbi-fi/juso2geolocation";

const apiKey = "U01TX0FVVEgyMDIxMDEyODE2NTQ1NzExMDc1NTQ=";

const testTranslator = new TransGeolocation(apiKey);

const params: Params = {
  admCd: "1120011400",
  rnMgtSn: "112003103004",
  udrtYn: "0",
  buldSlno: "0",
  buldMnnm: "99",
}

async function main() {
  const data = await testTranslator.translate(params);
  console.log(data);
}

main();
