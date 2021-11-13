const sha256 = require("crypto-js/sha256");
const { createHash } = require("crypto");

class Block {
  constructor(data) {
    this.id = 0;
    this.nonce = 144444;
    this.body = data;
    this.hash = "";
  }

  /**
   * Step 1. Implement `generateHash()`
   * method that return the `self` block with the hash.
   *
   * Create a Promise that resolve with `self` after you create
   * the hash of the object and assigned to the hash property `self.hash = ...`
   */
  //
  async generateHash() {
    // Use this to create a temporary reference of the class object
    let self = this;

    //Implement your code here
    const hashBlock = sha256(JSON.stringify(self));
    self.hash = hashBlock.toString();

    return self.hash;
  }

  // alternative with native crypto module
  async generateNodeNativeHash() {
    const hash = createHash("sha256");

    return hash.update(JSON.stringify(this)).digest("hex");
  }
}

// Exporting the class Block to be reuse in other files
module.exports = Block;
