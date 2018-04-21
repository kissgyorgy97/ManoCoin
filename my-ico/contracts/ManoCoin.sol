pragma solidity ^0.4.19;

import "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol";

contract ManoCoin is MintableToken {
    string public name = "Mano Coin";
    string public symbol = "Mano";
    uint8 public decimals = 18;

}
