import { calldata } from "./calldata";
import { config } from "./config/config";
import { signAndExecuteSuiTransaction } from "./sui/sui";

const signAndExecuteTransaction = async (
  targetChain: string,
  calldata: string
) => {
  switch (targetChain) {
    case "sui":
      console.log("Executing transaction on Sui chain...");
      await signAndExecuteSuiTransaction(config.SUI_PRIVATE_KEY, calldata);
      return;
    default:
      throw new Error(`Invalid target chain: "${targetChain}"`);
  }
};
const main = async () => {
  await signAndExecuteTransaction(config.TARGET_CHAIN, calldata);
};

main();
