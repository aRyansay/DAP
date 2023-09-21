const ConvertLib = artifacts.require("simple");
const MetaCoin = artifacts.require("MetaCoin");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  // deployer.deploy(MetaCoin);
};
