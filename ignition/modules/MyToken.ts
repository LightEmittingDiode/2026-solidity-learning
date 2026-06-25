import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("MyTokenDeploy", (m) => {
  const myTokenC = m.contract("Mytoken", ["MyToken", "MT", 18]);
  return { myTokenC };
});
