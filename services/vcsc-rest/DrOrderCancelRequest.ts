/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * Dr cancel normal order request schema
 */
export type DrOrderCancelRequest = BaseRequest & {
  /**
   * Code
   */
  code?: string;
  /**
   * Heg yn
   */
  hegYn?: string;
  /**
   * Reg yn
   */
  regYn?: string;
  /**
   * Password
   */
  password?: string;
  /**
   * Validity
   */
  validity?: string;
  /**
   * Order type
   */
  orderType?: string;
  /**
   * Stop price
   */
  stopPrice?: string;
  /**
   * Order price
   */
  orderPrice?: number;
  /**
   * Order number
   */
  orderNumber?: string;
  /**
   * Account number
   */
  accountNumber?: string;
  /**
   * Order quantity
   */
  orderQuantity?: number;
  /**
   * Unmatched quantity
   */
  unmatchedQuantity?: number;
  [k: string]: any;
};