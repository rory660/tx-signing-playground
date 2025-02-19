import { getFullnodeUrl, SuiClient } from "@mysten/sui/client";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { fromHex } from "@mysten/sui/utils";

/**
 * Sign and execute a Sui transaction
 * @param privateKey The private key to sign with
 * @param calldata The transaction data as a base64 string
 */
export const signAndExecuteSuiTransaction = async (
  privateKey: string,
  calldata: string
) => {
  console.log("Executing calldata as Sui transaction...");
  console.log("Initialising Sui client...");
  const client = new SuiClient({ url: getFullnodeUrl("mainnet") });
  console.log("Encoding calldata as bytes...");
  const bytes = Uint8Array.from(Buffer.from(calldata, "base64"));
  console.log("Generating keypair from private key...");
  const keypair = Ed25519Keypair.fromSecretKey(fromHex(privateKey));
  console.log("Signing transaction...");
  const { signature } = await keypair.signTransaction(bytes);

  try {
    console.log("Executing transaction...");
    const response = await client.executeTransactionBlock({
      transactionBlock: bytes,
      signature,
    });

    console.log("Transaction response:");
    console.log(response);
    console.log("Successfully executed transaction!");
  } catch (error) {
    console.log("Error executing transaction:");
    console.log(error);
    console.log("Failed to execute transaction.");
  }
};
