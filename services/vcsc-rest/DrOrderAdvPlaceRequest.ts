/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * Dr place adv order request schema
 */
export type DrOrderAdvPlaceRequest = BaseRequest & {
  /**
   * Code
   */
  code: string;
  /**
   * To date
   */
  toDate?: null | string;
  /**
   * From date
   */
  fromDate?: null | string;
  /**
   * Order type
   */
  orderType: string;
  /**
   * Order price
   */
  orderPrice: number;
  /**
   * Sell buy type
   */
  sellBuyType: "BUY" | "SELL" | "ALL";
  /**
   * Account number
   */
  accountNumber: string;
  /**
   * Market session
   */
  marketSession: string;
  /**
   * Order quantity
   */
  orderQuantity: number;
  /**
   * Advance order type
   */
  advanceOrderType: null | ("AO" | "CAO");
  [k: string]: any;
};
