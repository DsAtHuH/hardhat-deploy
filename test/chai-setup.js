import chaiModule from 'chai';
import { chaiEthers } from 'chai-ethers';
chaiModule.use(chaiEthers);
const expect = chaiModule.expect;
export { expect };
