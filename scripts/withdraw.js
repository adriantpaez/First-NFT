const { task } = require("hardhat/config");
const { getContract } = require("./helpers");
const fetch = require("node-fetch");

task("withdraw", "Withdraw all the ethers in the contract address")
    .addParam("payee", "The address to send the ethers")
    .setAction(async function (taskArguments, hre) {
        const contract = await getContract("NFT", hre);
        const transactionResponse = await contract.withdrawPayments(taskArguments.payee, {
            gasLimit: 500_000,
        });
        console.log(`Transaction Hash: ${transactionResponse.hash}`);
    });
