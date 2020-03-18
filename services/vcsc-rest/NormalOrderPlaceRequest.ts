/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * Place normal order request schema
 */
export type NormalOrderPlaceRequest = BaseRequest & {
  /**
   * Account number
   */
  accountNumber: string;
  /**
   * Sub number
   */
  subNumber?: string;
  /**
   * Stock code
   */
  stockCode?: string;
  /**
   * Order quantity
   */
  orderQuantity?: number;
  /**
   * Order price
   */
  orderPrice?: number;
  /**
   * Bank code
   */
  bankCode?: string;
  /**
   * Sell buy type, [BUY, SELL, ALL]
   */
  sellBuyType?: null | ("BUY" | "SELL" | "ALL");
  /**
   * Order type, [LO , MP , ATO , ATC , AON , BIG_LOT , MOK , MAK , MTL , IO , SO_GREATER , SO_LESS , SBO , OBO , PLO , ALL]
   */
  orderType?:
    | "LO"
    | "MP"
    | "ATO"
    | "ATC"
    | "AON"
    | "BIG_LOT"
    | "MOK"
    | "MAK"
    | "MTL"
    | "IO"
    | "SO_GREATER"
    | "SO_LESS"
    | "SBO"
    | "OBO"
    | "PLO"
    | "ALL";
  /**
   * Securities type
   */
  securitiesType?: string;
  /**
   * Bank account
   */
  bankAccount?: string;
  /**
   * Bank name
   */
  bankName?: string;
  [k: string]: any;
};