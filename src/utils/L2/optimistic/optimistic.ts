/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-03-02 10:07:56
 * @LastEditors: cejay
 * @LastEditTime: 2023-03-10 20:00:25
 */


import { BigNumber, ethers } from 'ethers';
import { AddressZero } from '../../../defines/address';
import { UserOperation } from '../../../entity/userOperation';
import { UserOp } from '../../userOp';
import { OptimisticL1GasPriceOracle } from './optimisticL1GasPriceOracle';

export class Optimistic {


    /**
     *
     *
     * @static
     * @param {ethers.providers.BaseProvider} l2Provider
     * @param {UserOperation} op
     * @return {*}  {Promise<number>}
     * @memberof Optimistic
     */
    public static async calcGasPrice(l2Provider: ethers.providers.BaseProvider, op: UserOperation): Promise<number> {
        const calldataL1 = UserOp.packUserOp(op, false);

        /* 
        (Gas Price * Gas) + (l1GasUsed * l1GasPrice * l1FeeScalar)
        */
        //OptimisticGasPriceOracle
        const optimisticL1GasPriceOracle = new OptimisticL1GasPriceOracle(l2Provider);

        // L2 cost
        const l2Cost = await op.requiredPrefund();

        /* 
                uint256 l1GasUsed = getL1GasUsed(_data);
                uint256 l1Fee = l1GasUsed * l1BaseFee;
                uint256 divisor = 10**decimals;
                uint256 unscaled = l1Fee * scalar;
                uint256 scaled = unscaled / divisor;
                return scaled;
        */
        // L1 cost 
        let l1Cost: BigNumber = await optimisticL1GasPriceOracle.getL1Fee(calldataL1);

        const cost = l2Cost.requiredPrefund.add(l1Cost);

        const noPaymaster = op.paymasterAndData === AddressZero || op.paymasterAndData === '0x';
        const mul = noPaymaster ? 1 : 3;
        const requiredGas = BigNumber.from(op.callGasLimit).add(BigNumber.from(op.verificationGasLimit).mul(mul)).add(BigNumber.from(op.preVerificationGas));

        const reasonableGasPrice = cost.div(requiredGas).mul(120).div(100).toNumber();

        return reasonableGasPrice;
    }
}