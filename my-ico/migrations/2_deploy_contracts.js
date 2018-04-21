var ManoCoinCrowdsale = artifacts.require('./ManoCoinCrowdsale.sol');
var ManoCoin = artifacts.require('./ManoCoin.sol');

module.exports = function(deployer, network, accounts) {
    const openingTime = web3.eth.getBlock('latest').timestamp + 2; // two secs in future
    const closingTime = openingTime + 86400 * 20; //20 days
    const rate = new web3.BigNumber(1000);
    const wallet = accounts[1];

    return deployer 
        .then(() => {
            return deployer.deploy(ManoCoin);
        })

        .then (() => {
            return deployer.deploy(
                ManoCoinCrowdsale,
                openingTime,
                closingTime,
                rate,
                wallet,
                ManoCoin.address
            );
        });
}