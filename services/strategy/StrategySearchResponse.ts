/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Strategy Search Response
 */
export interface StrategySearchResponse {
  /**
   * name
   */
  name?: string;
  /**
   * strategy id
   */
  id?: number;
  /**
   * description
   */
  description?: string;
  /**
   * type
   */
  type?: "EQUITY" | "DERIVATIVES";
  /**
   * status
   */
  status?: "ACTIVE" | "INACTIVE" | "SUSPEND";
  /**
   * expected profit
   */
  expectedProfit?: number;
  /**
   * expected max drawdown
   */
  expectedMaxDrawdown?: number;
  /**
   * real profit
   */
  realProfit?: number;
  /**
   * one week profit
   */
  oneWeekProfit?: number;
  /**
   * one month profit
   */
  oneMonthProfit?: number;
  /**
   * three month profit
   */
  threeMonthProfit?: number;
  /**
   * six month profit
   */
  sixMonthProfit?: number;
  /**
   * one year profit
   */
  oneYearProfit?: number;
  /**
   * subscribers
   */
  subscribers?: number;
  /**
   * views
   */
  views?: number;
  /**
   * summary image
   */
  summaryImage?: string;
  /**
   * is favorite
   */
  isFavorite?: boolean;
  /**
   * is subscribe
   */
  isSubscribe?: boolean;
  [k: string]: any;
}
