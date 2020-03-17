/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * Loan register request schema
 */
export type LoanRegisterRequest = BaseRequest & {
  /**
   * items
   */
  items?: {
    /**
     * Tax
     */
    tax?: null | number;
    /**
     * Fee rate
     */
    feeRate?: null | number;
    /**
     * Match date
     */
    matchDate?: null | string;
    /**
     * Stock code
     */
    stockCode?: null | string;
    /**
     * Sub number
     */
    subNumber?: null | string;
    /**
     * Loan amount
     */
    loanAmount?: null | number;
    /**
     * Settle date
     */
    settleDate?: null | string;
    /**
     * Trading fee
     */
    tradingFee?: null | number;
    /**
     * Match amount
     */
    matchAmount?: null | number;
    /**
     * Adjust amount
     */
    adjustAmount?: null | number;
    /**
     * Loan bank code
     */
    loanBankCode?: null | string;
    /**
     * Account number
     */
    accountNumber?: null | string;
    /**
     * Loan order type
     */
    loanOrderType?: null | string;
    /**
     * Match quantity
     */
    matchQuantity?: null | number;
    /**
     * Possible amount
     */
    possibleAmount?: null | number;
    /**
     * Settle bank code
     */
    settleBankCode?: null | string;
    [k: string]: any;
  }[];
  [k: string]: any;
};
