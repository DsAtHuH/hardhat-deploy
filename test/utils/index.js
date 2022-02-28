var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ethers } from 'hardhat';
export function setupUsers(addresses, contracts) {
    return __awaiter(this, void 0, void 0, function* () {
        const users = [];
        for (const address of addresses) {
            users.push(yield setupUser(address, contracts));
        }
        return users;
    });
}
export function setupUser(address, contracts) {
    return __awaiter(this, void 0, void 0, function* () {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const user = { address };
        for (const key of Object.keys(contracts)) {
            user[key] = contracts[key].connect(yield ethers.getSigner(address));
        }
        return user;
    });
}
