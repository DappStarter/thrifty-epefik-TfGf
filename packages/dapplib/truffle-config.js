require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drum olympic smooth elegant note noise arrow grid ensure slot gather'; 
let testAccounts = [
"0x77dfda7f200afdfdba4e11b397a08cd986460389ff4a68490d2353da487eef72",
"0x6a68c12c5f775a8c256071070f9cb6de4864a2094865b35e9be830932f75177c",
"0x01c0dbe384f2dda907f2c38144f7e995fab85ffcf26310916ce2eb15cf8695ef",
"0x5ddcff3263f2dc0907910fb84343d83849ec1660620ef8fb97dbad7b939c6289",
"0x5fae02a845e96362554e6413c651c64a2fbeef17e53e21b874bd0380d0a1f253",
"0x10e41611436e695b54157356fd89250e69ab95ffd9f832a9281700aabaef291a",
"0x6a7cd75bfe7a2052b5c8ba434da78cc1a0cf1517744275d465ec17aa34480e2c",
"0xf920f109089dc487cf5c5cd8e4345efa757ca57cbe6c0564c9ea721f6f964a9b",
"0x3ac7637b0a7edd92714d14304cb5ef09d887889710252f37564d75050ec95c86",
"0xde589250652fe86f75a18f843af4d3ebf4ed0a92185147722e7796dc014ba188"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


