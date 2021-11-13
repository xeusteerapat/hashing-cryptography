const Block = require("./block");

(async function () {
  const block = new Block("Test Block");
  const result = await block.generateHash();
  // const result = await block.generateNodeNativeHash(); with native crypto

  console.log(JSON.stringify(result));
})();
