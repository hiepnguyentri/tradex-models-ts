/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * Query transfer cash account request schema
 */
export type TransferCashAccountRequest = BaseRequest & {
  /**
   * Account number
   */
  accountNumber: string;
  /**
   * Sub number
   */
  subNumber?: null | string;
  [k: string]: any;
};
