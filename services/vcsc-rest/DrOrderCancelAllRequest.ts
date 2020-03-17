/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * Dr order cancel all request schema
 */
export type DrOrderCancelAllRequest = BaseRequest & {
  /**
   * Order type
   */
  orderType?: null | string;
  /**
   * Order price
   */
  orderPrice?: null | number;
  /**
   * Futures code
   */
  futuresCode?: null | string;
  /**
   * Account number
   */
  accountNumber?: null | string;
  [k: string]: any;
};
