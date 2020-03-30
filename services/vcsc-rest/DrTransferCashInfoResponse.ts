/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Cash transfer info response schema
 */
export interface DrTransferCashInfoResponse {
  /**
   * Deposit amount
   */
  depositAmount?: null | number;
  /**
   * Waiting amount
   */
  waitingAmount?: null | number;
  /**
   * Transferable amount
   */
  transferableAmount?: null | number;
  [k: string]: any;
}