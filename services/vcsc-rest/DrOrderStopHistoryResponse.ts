/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Dr order stop history response schema
 */
export interface DrOrderStopHistoryResponse {
  /**
   * Ip
   */
  ip?: null | string;
  /**
   * Code
   */
  code?: null | string;
  /**
   * Date
   */
  date?: null | string;
  /**
   * Is sent
   */
  isSent?: boolean;
  /**
   * Send yn
   */
  sendYn?: null | string;
  /**
   * Status
   */
  status?: null | string;
  /**
   * To date (YYYYmmdd)
   */
  toDate?: null | string;
  /**
   * Mdm type
   */
  mdmType?: null | string;
  /**
   * Next key
   */
  nextKey?: null | string;
  /**
   * Code name
   */
  codeName?: null | string;
  /**
   * From date (YYYYmmdd)
   */
  fromDate?: null | string;
  /**
   * Operator
   */
  operator?: null | string;
  /**
   * Username
   */
  username?: null | string;
  /**
   * Band price
   */
  bandPrice?: null | number;
  /**
   * Error code
   */
  errorCode?: null | string;
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
   * Stop price
   */
  stopPrice?: null | number;
  /**
   * Order price
   */
  orderPrice?: null | number;
  /**
   * Registered
   */
  registered?: null | string;
  /**
   * Account name
   */
  accountName?: null | string;
  /**
   * Order number
   */
  orderNumber?: null | string;
  /**
   * Sell buy type, [BUY, SELL, ALL]
   */
  sellBuyType?: null | ("BUY" | "SELL" | "ALL");
  /**
   * Trading date
   */
  tradingDate?: null | string;
  /**
   * Error message
   */
  errorMessage?: null | string;
  /**
   * Is registered
   */
  isRegistered?: boolean;
  /**
   * Account number
   */
  accountNumber?: null | string;
  /**
   * Operating time
   */
  operatingTime?: null | string;
  /**
   * Order quantity
   */
  orderQuantity?: null | number;
  /**
   * Cancel date time
   */
  cancelDateTime?: null | string;
  /**
   * Cancel username
   */
  cancelUsername?: null | string;
  /**
   * Registered date
   */
  registeredDate?: null | string;
  /**
   * Sequence number
   */
  sequenceNumber?: null | string;
  /**
   * Original order number
   */
  originalOrderNumber?: null | string;
  [k: string]: any;
}
