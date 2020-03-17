/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Account balance response schema
 */
export interface AccountBalanceResponse {
  /**
   * Date
   */
  date?: null | string;
  /**
   * Next key
   */
  nextKey?: null | string;
  /**
   * Account name
   */
  accountName?: null | string;
  /**
   * Cash balance
   */
  cashBalance?: null | number;
  /**
   * total remaining unread notification
   */
  totalUnread?: null | number;
  /**
   * Account number
   */
  accountNumber?: null | string;
  /**
   * Deposit balance
   */
  depositBalance?: null | number;
  /**
   * Margin requirement
   */
  marginRequirement?: null | number;
  /**
   * Substitute balance
   */
  substituteBalance?: null | number;
  /**
   * Previous cash balance
   */
  previousCashBalance?: null | number;
  /**
   * Withdrawable balance
   */
  withdrawableBalance?: null | number;
  /**
   * Deposit substitute balance
   */
  depositSubstituteBalance?: null | number;
  /**
   * Previous substitute balance
   */
  previousSubstituteBalance?: null | number;
  /**
   * Withdrawable substitute balance
   */
  withdrawableSubstituteBalance?: null | number;
  [k: string]: any;
}
