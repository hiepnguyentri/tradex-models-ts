/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * symbolLatestResponse schema
 */
export interface SymbolLatestResponse {
  /**
   * symbol code
   */
  s?: string;
  /**
   * type: INDEX/STOCK/FUTURES/CW
   */
  t?: "INDEX" | "STOCK" | "FUTURES" | "CW";
  /**
   * open price
   */
  o?: number;
  /**
   * high price
   */
  h?: number;
  /**
   * low price
   */
  l?: number;
  /**
   * close price
   */
  c?: number;
  /**
   * average price
   */
  a?: number;
  /**
   * expected price
   */
  ep?: number;
  /**
   * exercise price
   */
  exp?: number;
  /**
   * change
   */
  ch?: number;
  /**
   * rate
   */
  ra?: number;
  /**
   * trading volume
   */
  vo?: number;
  /**
   * trading value
   */
  va?: number;
  /**
   * basis (for futures)
   */
  ba?: number;
  /**
   * open interest
   */
  oi?: number;
  /**
   * match volume
   */
  mv?: number;
  /**
   * match by (CEILING/FLOOR)
   */
  mb?: "CEILING" | "FLOOR" | "";
  /**
   * best bid
   */
  bb?: {
    /**
     * price
     */
    p?: number;
    /**
     * volume
     */
    v?: number;
    /**
     * volume change
     */
    c?: number;
    [k: string]: any;
  }[];
  /**
   * best offer
   */
  bo?: {
    /**
     * price
     */
    p?: number;
    /**
     * volume
     */
    v?: number;
    /**
     * volume change
     */
    c?: number;
    [k: string]: any;
  }[];
  /**
   * session
   */
  ss?: string;
  /**
   * total Bid Volume
   */
  tb?: number;
  /**
   * total Offer Volume
   */
  to?: number;
  /**
   * index change
   */
  ic?: {
    /**
     * ceiling count
     */
    ce?: number;
    /**
     * floor count
     */
    fl?: number;
    /**
     * up count
     */
    up?: number;
    /**
     * down count
     */
    dw?: number;
    /**
     * unChange count
     */
    uc?: number;
    /**
     * trade count
     */
    tc?: number;
    /**
     * unTrade count
     */
    utc?: number;
    [k: string]: any;
  };
  /**
   * foreigner
   */
  fr?: {
    /**
     * buy volume
     */
    bv?: number;
    /**
     * sell volume
     */
    sv?: number;
    /**
     * net buy value
     */
    nva?: number;
    /**
     * net buy volume
     */
    nvo?: number;
    /**
     * total room
     */
    tr?: number;
    /**
     * current room
     */
    cr?: number;
    [k: string]: any;
  };
  [k: string]: any;
}
