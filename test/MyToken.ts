import hre from "hardhat";
import { expect } from "chai";
import { Mytoken } from "../typechain-types";
import { HardhatEthersSigner } from "@nomicfoundation/hardhat-toolbox";

describe("mytoken deploy", () => {
  let myTokenC: Mytoken;
  let signers: HardhatEthersSigner[];
  before("should deploy", async () => {
    signers = await hre.ethers.getSigners();
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
  it("should return 0 totalSupply", async () => {
    expect(await myTokenC.totalSupply()).equal(0);
  });
  it("should return 0 balance for signer 0", async () => {
    const signer0 = signers[0];
    expect(await myTokenC.balanceOf(signer0)).equal(0);
  });
});
