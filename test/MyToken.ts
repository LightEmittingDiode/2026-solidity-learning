import hre from "hardhat";
import { expect } from "chai";
import { Mytoken } from "../typechain-types"; // 소문자 t

describe("mytoken deploy", () => {
  let myTokenC: Mytoken;
  before("should deploy", async () => {
    myTokenC = await hre.ethers.deployContract("Mytoken", [
      "MyToken",
      "MT",
      18,
    ]);
  });

  it("should return name", async () => {
    // 3. .to.equal 문법 사용
    expect(await myTokenC.name()).to.equal("MyToken");
  });

  it("should return symbol", async () => {
    expect(await myTokenC.symbol()).to.equal("MT");
  });

  it("should return decimals", async () => {
    expect(await myTokenC.decimals()).to.equal(18);
  });
});
