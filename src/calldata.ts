import fs from "fs";

const CALLDATA_PATH = "./config/calldata.txt";

const loadCalldata = () => {
  console.log(`Loading calldata from ${CALLDATA_PATH} as base64...`);
  const calldata = fs.readFileSync(CALLDATA_PATH).toString();
  console.log("Loaded calldata:");
  console.log(calldata);
  return calldata;
};

export const calldata = loadCalldata();
