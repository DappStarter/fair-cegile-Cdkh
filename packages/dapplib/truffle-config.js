require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame food curve recipe pizza million coral light army general'; 
let testAccounts = [
"0x19ad58af6d8c2d48665c4bfd3d410fdaafedd2187ddd33b85cdb8460e0a9800e",
"0xd22ec50a2f5dd29b26552f8c8d74da76821e8a2efa55dabfa4b3470bca6be7df",
"0xaf9ffd85df183a719481095ebeac3f982bd20b51152882d33b9a5df4f56d1296",
"0x73a461c9ed64a00931311b460c80597deddb88cc720c1f827e14739de88b12fd",
"0xc29ee8d06ac37eac31fb631616975c3c77dd326b099b397c55b182583201caeb",
"0x6b92320b5faf05892a106de19543fd350c7921316b250dde93afd5c56988dbcb",
"0xe24892ca875155f8fcf41c85fe60ed24b87f515e689531bb5e3cf5517e195e56",
"0x513fe39e27f5eae137c0a7505d1a16bfa373f800188288181976efa541d22364",
"0x73af94a4fe5e2dd3b94fb92a3d6df84a55a8a36de8538ca599a4cf5f20c34d73",
"0x101dbe75db2a397f139cb26c13f8d2e81cfff4d25521558974f2a48a763f1a3f"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

