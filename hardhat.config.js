import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import { node_url, accounts } from './utils/network';
const config = {
    solidity: {
        version: '0.7.6',
    },
    networks: {
        rinkeby: {
            url: node_url('rinkeby'),
            accounts: accounts('rinkeby'),
        },
    },
    namedAccounts: {
        deployer: 0,
        tokenOwner: 1,
    },
    paths: {
        sources: 'src',
    },
};
export default config;
