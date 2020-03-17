/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Account transaction history response schema
 */
export interface AccountTransactionHistoryResponse {
  /**
   * Fee
   */
  fee?: null | number;
  /**
   * Channel
   */
  channel?: null | string;
  /**
   * Remarks
   */
  remarks?: null | string;
  /**
   * Stock code
   */
  stockCode?: null | string;
  /**
   * Sub number
   */
  subNumber?: null | string;
  /**
   * total remaining unread notification
   */
  totalUnread?: null | number;
  /**
   * Trading date
   */
  tradingDate?: null | string;
  /**
   * Loan interest
   */
  loanInterest?: null | number;
  /**
   * Trading price
   */
  tradingPrice?: null | number;
  /**
   * Account number
   */
  accountNumber?: null | string;
  /**
   * Deposit amount
   */
  depositAmount?: null | number;
  /**
   * Trading amount
   */
  tradingAmount?: null | number;
  /**
   * Adjusted amount
   */
  adjustedAmount?: null | number;
  /**
   * Balance quantity
   */
  balanceQuantity?: null | number;
  /**
   * Trading quantity
   */
  tradingQuantity?: null | number;
  /**
   * Trading sequence
   */
  tradingSequence?: null | string;
  /**
   * Transaction name
   */
  transactionName?: null | string;
  /**
   * Prev deposit amount
   */
  prevDepositAmount?: null | number;
  [k: string]: any;
}
