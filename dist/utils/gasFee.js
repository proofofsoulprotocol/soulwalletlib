"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodefiGasFees = void 0;
/*
 * @Description:
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2022-12-28 20:46:15
 * @LastEditors: cejay
 * @LastEditTime: 2023-02-24 17:36:35
 */
const httpRequest_1 = require("./httpRequest");
/**
 * gas fee
 * @class CodefiGasFees
 */
class CodefiGasFees {
    /**
     * get gas fees
     * @static
     * @link https://gas-api.metaswap.codefi.network/networks/1/suggestedGasFees
     * @param {number} chainId the chain id
     * @returns {Promise<SuggestedGasFees | null>} the gas fees
     */
    static getEIP1559GasFees(chainId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const url = `https://gas-api.metaswap.codefi.network/networks/${chainId}/suggestedGasFees`;
                const response = yield httpRequest_1.HttpRequest.get(url);
                if (response) {
                    const gas = response;
                    if (gas) {
                        return gas;
                    }
                }
            }
            catch (error) {
                console.log(error);
            }
            return null;
        });
    }
    /**
     * get legacy gas prices
     * @static
     * @link https://gas-api.metaswap.codefi.network/networks/1/gasPrices
     * @param {number} chainId the chain id
     * @returns {Promise<gasPrices | null>} the gas prices
     */
    static getLegacyGasPrices(chainId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const url = `https://gas-api.metaswap.codefi.network/networks/${chainId}/gasPrices`;
                const response = yield httpRequest_1.HttpRequest.get(url);
                if (response) {
                    const gas = response;
                    if (gas) {
                        return gas;
                    }
                }
            }
            catch (error) {
                console.log(error);
            }
            return null;
        });
    }
}
exports.CodefiGasFees = CodefiGasFees;
//# sourceMappingURL=gasFee.js.map