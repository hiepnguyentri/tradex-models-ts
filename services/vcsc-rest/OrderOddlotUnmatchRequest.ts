/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * Query order oddlot unmatch request schema
 */
export type OrderOddlotUnmatchRequest = BaseRequest & {
  /**
   * Account number
   */
  accountNumber?: null | string;
  /**
   * Sub number
   */
  subNumber?: null | string;
  /**
   * Last branch code
   */
  lastBranchCode?: null | string;
  /**
   * Last order number
   */
  lastOrderNumber?: null | string;
  /**
   * Fetch count
   */
  fetchCount?: null | number;
  [k: string]: any;
};