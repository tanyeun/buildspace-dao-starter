import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x89001403E255E1512797BF34757F046627bB3fF4");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Leaf Village Headband",
        description: "This NFT will give you access to NarutoDAO!",
        image: readFileSync("scripts/assets/headband.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();