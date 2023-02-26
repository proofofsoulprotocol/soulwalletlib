import { ethers, BigNumber } from "ethers";
import { NumberLike } from "../defines/numberLike";
/**
 * @link https://github.com/eth-infinitism/account-abstraction/blob/develop/contracts/UserOperation.sol
 */
/**
 * @class UserOperation
 * @description UserOperation class
 * @example
 * const userOperation = new UserOperation();
 * @property {String} sender the sender address
 * @property {NumberLike} nonce the nonce
 * @property {String} initCode the initCode
 * @property {String} callData the callData
 * @property {String} preVerificationGas the preVerificationGas
 * @property {String} verificationGasLimit the verificationGasLimit
 * @property {String} maxFeePerGas the maxFeePerGas
 * @property {String} maxPriorityFeePerGas the maxPriorityFeePerGas
 * @property {String} paymasterAndData the paymasterAndData
 * @property {String} signature the signature
 */
declare class UserOperation {
    private _userOp;
    /**
     * @constructor UserOperation
     */
    constructor();
    private _sender;
    get sender(): string;
    set sender(value: string);
    private _nonce;
    get nonce(): NumberLike;
    set nonce(value: NumberLike);
    private _initCode;
    get initCode(): string;
    set initCode(value: string);
    private _callData;
    get callData(): string;
    set callData(value: string);
    private _callGasLimit;
    get callGasLimit(): NumberLike;
    set callGasLimit(value: NumberLike);
    private _verificationGasLimit;
    get verificationGasLimit(): NumberLike;
    set verificationGasLimit(value: NumberLike);
    private _preVerificationGas;
    get preVerificationGas(): NumberLike;
    set preVerificationGas(value: NumberLike);
    private _maxFeePerGas;
    get maxFeePerGas(): NumberLike;
    set maxFeePerGas(value: NumberLike);
    private _maxPriorityFeePerGas;
    get maxPriorityFeePerGas(): NumberLike;
    set maxPriorityFeePerGas(value: NumberLike);
    private _paymasterAndData;
    get paymasterAndData(): string;
    set paymasterAndData(value: string);
    private _signature;
    get signature(): string;
    set signature(value: string);
    /**
     * @description convert to userOperation tuple string
     * @returns {string} the userOperation tuple string
     */
    toTuple(): string;
    /**
     * @description convert to userOperation struct
     * @returns {object} the userOperation struct
     */
    getStruct(): {
        sender: string;
        nonce: NumberLike;
        initCode: string;
        callData: string;
        callGasLimit: NumberLike;
        verificationGasLimit: NumberLike;
        preVerificationGas: NumberLike;
        maxFeePerGas: NumberLike;
        maxPriorityFeePerGas: NumberLike;
        paymasterAndData: string;
        signature: string;
    };
    /**
     * @description convert NumberLike property to hex string
     * @returns {void}
     */
    alignment(): void;
    /**
     * @description convert to userOperation json string
     * @returns {string} the userOperation json string
     */
    toJSON(): string;
    /**
     * @description convert from userOperation json string
     * @param {string} json the userOperation json string
     * @returns {UserOperation} the userOperation object
     */
    static fromJSON(json: string): UserOperation;
    /**
     * @description convert from userOperation object
     * @param {object} obj the userOperation object
     * @returns {UserOperation} the userOperation object
     */
    static fromObject(obj: any): UserOperation;
    private recoveryWalletOP;
    private updatePreVerificationGas;
    private updateCallGasLimit;
    /**
     * @description estimate gas
     * @param {string} entryPointAddress the entry point address
     * @param {ethers.providers.BaseProvider} etherProvider the ethers.js provider e.g. ethers.provider
     * @returns {Promise<boolean>} true or false
     */
    estimateGas(entryPointAddress: string, etherProvider: ethers.providers.BaseProvider): Promise<boolean>;
    /**
     * @description get the paymaster sign hash
     * @returns {string} the paymaster sign hash
     */
    payMasterSignHash(): string;
    /**
     * @description sign the user operation
     * @param {string} entryPoint the entry point address
     * @param {number} chainId the chain id
     * @param {string} privateKey the private key
     * @returns {void}
     */
    sign(entryPoint: string, chainId: number, privateKey: string): void;
    /**
     * @description sign the user operation with signature
     * @param {string} signAddress the sign address
     * @param {string} signature the signature
     * @returns {void}
     */
    signWithSignature(signAddress: string, signature: string): void;
    /**
     * @description get the UserOpHash (userOp hash)
     * @param {string} entryPointAddress the entry point address
     * @param {number} chainId the chain id
     * @returns {string} the UserOpHash (userOp hash)
     */
    getUserOpHash(entryPointAddress: string, chainId: number): string;
    /**
     * @description get the UserOpHash (userOp hash) with deadline
     * @param {string} entryPointAddress the entry point address
     * @param {number} chainId the chain id
     * @param {number} deadline the deadline
     * @returns {string} the UserOpHash (userOp hash) with deadline
     * @remarks deadline is a timestamp in seconds
     */
    getUserOpHashWithDeadline(entryPointAddress: string, chainId: number, deadline: number): string;
    /**
     * @description get the required prefund
     * @param {(BigNumber | NumberLike)?} basefee the basefee
     * @returns {BigNumber} the required prefund
     */
    requiredPrefund(basefee?: BigNumber | NumberLike): BigNumber;
}
export { UserOperation };
