/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * Cash transfer request request schema
 */
export type CashTransferRequestRequest = BaseRequest & {
  /**
   * Note
   */
  note?: null | string;
  /**
   * Amount
   */
  amount?: null | string;
  /**
   * Bank code
   */
  bankCode?: null | string;
  /**
   * Sub number
   */
  subNumber?: null | string;
  /**
   * Account number
   */
  accountNumber?: null | string;
  /**
   * Received sub number
   */
  receivedSubNumber?: null | string;
  [k: string]: any;
};